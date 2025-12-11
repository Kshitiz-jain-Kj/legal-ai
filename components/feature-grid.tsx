"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { BookOpen, FileSearch, Scale, Shield, Sparkles, Zap } from "lucide-react"

export function FeatureGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: FileSearch,
      title: "AI-Powered Legal Research",
      description: "Find relevant case law in seconds with our advanced AI search algorithms.",
    },
    {
      icon: Scale,
      title: "Contract Risk Assessment",
      description: "Automatically identify high-risk clauses and potential legal issues.",
    },
    {
      icon: Sparkles,
      title: "Predictive Legal Analysis",
      description: "Get AI-powered predictions on case outcomes based on historical data.",
    },
    {
      icon: Zap,
      title: "Automated Document Review",
      description: "Review contracts 90% faster with AI-powered clause extraction.",
    },
    {
      icon: BookOpen,
      title: "Legal Knowledge Base",
      description: "Access a comprehensive database of legal precedents and insights.",
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Stay compliant with automatic updates on regulatory changes.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" ref={ref} className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Powerful AI Features for Legal Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our AI-powered platform helps you research faster, analyze contracts more accurately, and make better legal
            decisions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
