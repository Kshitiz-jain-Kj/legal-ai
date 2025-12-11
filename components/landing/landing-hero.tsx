"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Upload, FileText, Sparkles, CheckCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Badge variant="secondary" className="gap-2 px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                AI-Powered Legal Explainer
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance"
            >
              Understand legal documents{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">instantly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Your personal legal explainer. Upload any document and get state-specific, simple, and accurate
              explanations in plain English.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/analyze">
                <Button size="lg" className="gap-2 w-full sm:w-auto shadow-lg shadow-primary/20">
                  <Upload className="h-5 w-5" />
                  Upload Document
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  See Demo
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>Data never stored</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>100% free</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl border bg-card shadow-2xl overflow-hidden">
              {/* Mock Document Preview */}
              <div className="p-6 border-b bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Traffic_Violation_Notice.pdf</div>
                    <div className="text-sm text-muted-foreground">Analyzing...</div>
                  </div>
                </div>
              </div>

              {/* Animated Analysis Steps */}
              <div className="p-6 space-y-4">
                <AnalysisStep delay={0.8} label="Extracting text" completed />
                <AnalysisStep delay={1.2} label="Detecting sections" completed />
                <AnalysisStep delay={1.6} label="Identifying state: Maharashtra" completed />
                <AnalysisStep delay={2} label="Matching legal sections" active />
                <AnalysisStep delay={2.4} label="Generating explanation" />
              </div>

              {/* Result Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.5 }}
                className="mx-6 mb-6 p-4 rounded-xl bg-accent/10 border border-accent/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="font-medium text-sm">Quick Verdict</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "This appears to be a minor traffic violation. The fine is likely bailable..."
                </p>
              </motion.div>

              {/* Scanning effect */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ top: "0%" }}
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="absolute -top-4 -right-4 bg-card border rounded-lg px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-medium">Risk: Low</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-card border rounded-lg px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span className="font-medium">Encrypted</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnalysisStep({
  label,
  delay,
  completed,
  active,
}: {
  label: string
  delay: number
  completed?: boolean
  active?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <div
        className={`h-5 w-5 rounded-full flex items-center justify-center ${
          completed ? "bg-accent text-accent-foreground" : active ? "bg-primary/20 border-2 border-primary" : "bg-muted"
        }`}
      >
        {completed && <CheckCircle className="h-3 w-3" />}
        {active && <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
      </div>
      <span className={`text-sm ${completed ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
    </motion.div>
  )
}
