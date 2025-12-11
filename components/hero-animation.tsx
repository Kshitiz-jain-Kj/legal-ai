"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // This would be where we'd initialize a more complex 3D animation
    // For now, we'll use a simpler SVG animation with Framer Motion
  }, [])

  // Animation variants for the document elements
  const documentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  // Animation variants for the scanning effect
  const scanLineVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: [0, 1, 1, 0],
      y: [0, 100, 200, 300],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
  }

  // Animation variants for the highlight elements
  const highlightVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0.8],
      transition: {
        delay: 1 + i * 0.5,
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      },
    }),
  }

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[90%] max-w-[500px] h-[400px] bg-background rounded-xl border shadow-lg overflow-hidden">
        {/* Document background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 p-6">
          {/* Document header */}
          <motion.div
            className="w-[70%] h-6 bg-primary/10 rounded-md mb-4"
            variants={documentVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          />

          {/* Document content lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-3 bg-muted rounded-md mb-3"
              variants={documentVariants}
              initial="hidden"
              animate="visible"
              custom={i + 1}
              style={{ width: `${Math.random() * 30 + 70}%` }}
            />
          ))}

          {/* Highlighted sections */}
          <motion.div
            className="absolute top-[30%] left-[10%] w-[60%] h-3 bg-primary/20 rounded-md"
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          />

          <motion.div
            className="absolute top-[45%] left-[15%] w-[70%] h-3 bg-primary/20 rounded-md"
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          />

          <motion.div
            className="absolute top-[60%] left-[5%] w-[50%] h-3 bg-primary/20 rounded-md"
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          />

          {/* AI scanning line */}
          <motion.div
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            variants={scanLineVariants}
            initial="hidden"
            animate="visible"
          />
        </div>

        {/* Floating AI elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* AI analysis bubbles */}
          <motion.div
            className="absolute top-[25%] right-[-20px] w-[120px] h-[40px] bg-primary/90 rounded-lg text-white text-xs flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Risk: Low
          </motion.div>

          <motion.div
            className="absolute top-[45%] right-[-20px] w-[120px] h-[40px] bg-destructive/90 rounded-lg text-white text-xs flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            Risk: High
          </motion.div>

          <motion.div
            className="absolute top-[65%] right-[-20px] w-[120px] h-[40px] bg-amber-500/90 rounded-lg text-white text-xs flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            Risk: Medium
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4">
          <motion.div
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
