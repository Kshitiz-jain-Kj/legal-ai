"use client"

import { motion } from "framer-motion"
import { Gauge, FileWarning, MessageSquare, Scale, FileText, Download, RefreshCcw, Languages } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesShowcase() {
  const features = [
    {
      icon: Gauge,
      title: "Risk Meter",
      description: "Visual risk assessment with dynamic tips for each section of your document",
    },
    {
      icon: FileWarning,
      title: "Missing Info Detector",
      description: "Automatically identifies missing or incomplete information in your documents",
    },
    {
      icon: MessageSquare,
      title: "AI Simplifier",
      description: "Click any section to get a simpler explanation in plain English",
    },
    {
      icon: Scale,
      title: "State Comparison",
      description: "Compare how the same law applies across different states",
    },
    {
      icon: FileText,
      title: "Key Details Extraction",
      description: "Auto-extract dates, case numbers, IPC sections, and more",
    },
    {
      icon: Download,
      title: "Export Summary",
      description: "Download a comprehensive summary report as PDF",
    },
    {
      icon: RefreshCcw,
      title: "Legal Timeline",
      description: "Visual timeline of what to expect: FIR to court hearing",
    },
    {
      icon: Languages,
      title: "Plain English Toggle",
      description: "Switch between legal terminology and simple explanations",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand your legal documents
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
