"use client"

import { motion } from "framer-motion"
import { Car, FileWarning, Receipt, Building, Users, Scale } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UseCases() {
  const cases = [
    {
      icon: Car,
      title: "Traffic Violations",
      description: "Understand challan notices, fines, and license implications",
    },
    {
      icon: FileWarning,
      title: "FIR Documents",
      description: "Know your rights and next steps after an FIR is filed",
    },
    {
      icon: Receipt,
      title: "Legal Notices",
      description: "Decode demand notices, eviction notices, and summons",
    },
    {
      icon: Building,
      title: "Property Documents",
      description: "Understand sale deeds, rental agreements, and disputes",
    },
    {
      icon: Users,
      title: "Employment Contracts",
      description: "Review offer letters, NDAs, and termination notices",
    },
    {
      icon: Scale,
      title: "Court Orders",
      description: "Comprehend judgments, bail orders, and legal proceedings",
    },
  ]

  return (
    <section id="use-cases" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Common Use Cases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LegalEase AI helps you understand various types of legal documents
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-2 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <useCase.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
