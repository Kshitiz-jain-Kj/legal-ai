"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { LockKeyhole, Shield, ShieldCheck, ShieldAlert } from "lucide-react"

export function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "GDPR Compliant",
      description: "We adhere to all GDPR requirements for data protection and privacy.",
    },
    {
      icon: ShieldAlert,
      title: "HIPAA Compliant",
      description: "Our platform meets all HIPAA requirements for handling sensitive information.",
    },
    {
      icon: LockKeyhole,
      title: "End-to-End Encryption",
      description: "All your data is encrypted in transit and at rest using AES-256 encryption.",
    },
    {
      icon: Shield,
      title: "SOC 2 Certified",
      description: "We maintain SOC 2 compliance for security, availability, and confidentiality.",
    },
  ]

  return (
    <section id="security" ref={ref} className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Security You Can Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Your legal data is sensitive. That's why we've built LegalAI with security and compliance at its core.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 rounded-lg border bg-muted/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">We take your security seriously</h3>
              <p className="text-muted-foreground">
                LegalAI undergoes regular security audits and penetration testing to ensure your data remains protected.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center justify-center h-16 w-32 bg-background rounded-md border">
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center justify-center h-16 w-32 bg-background rounded-md border">
                <span className="font-semibold">SOC 2</span>
              </div>
              <div className="flex items-center justify-center h-16 w-32 bg-background rounded-md border">
                <span className="font-semibold">GDPR</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
