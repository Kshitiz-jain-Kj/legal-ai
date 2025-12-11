"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Trash2, Clock } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "End-to-end encryption",
    },
    {
      icon: Lock,
      title: "Never Stored",
      description: "Your data stays private",
    },
    {
      icon: Trash2,
      title: "Auto-Delete",
      description: "Files deleted after analysis",
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Analysis in seconds",
    },
  ]

  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <badge.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-sm">{badge.title}</div>
                <div className="text-xs text-muted-foreground">{badge.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
