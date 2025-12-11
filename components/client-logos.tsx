"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const logos = [
    { name: "Baker McKenzie", width: "w-32" },
    { name: "Clifford Chance", width: "w-36" },
    { name: "DLA Piper", width: "w-28" },
    { name: "Latham & Watkins", width: "w-36" },
    { name: "Skadden", width: "w-28" },
    { name: "White & Case", width: "w-32" },
  ]

  return (
    <section ref={ref} className="py-12 border-y bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            TRUSTED BY TOP LAW FIRMS WORLDWIDE
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${logo.width} h-8 bg-muted rounded-md flex items-center justify-center text-muted-foreground font-semibold`}
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
