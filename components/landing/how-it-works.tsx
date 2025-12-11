"use client"

import { motion } from "framer-motion"
import { Upload, Sparkles, FileCheck, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Drag & drop your legal document (PDF, JPG, PNG)",
    },
    {
      icon: Sparkles,
      title: "Analyze",
      description: "AI extracts text, detects state, identifies legal sections",
    },
    {
      icon: FileCheck,
      title: "Get Guidance",
      description: "Receive plain-English explanation & actionable next steps",
    },
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to understand any legal document
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold z-10">
                  {i + 1}
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse-ring" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {/* Arrow for mobile */}
                {i < steps.length - 1 && <ArrowRight className="h-6 w-6 text-muted-foreground mt-6 md:hidden" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
