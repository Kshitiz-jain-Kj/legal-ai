"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, Loader2, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface AnalysisProgressProps {
  file: File
  progress: number
  onCancel: () => void
}

export function AnalysisProgress({ file, progress, onCancel }: AnalysisProgressProps) {
  const steps = [
    { label: "Extracting text from document", threshold: 20 },
    { label: "Detecting document sections", threshold: 40 },
    { label: "Identifying state jurisdiction", threshold: 55 },
    { label: "Matching legal sections", threshold: 75 },
    { label: "Generating explanation", threshold: 90 },
    { label: "Finalizing analysis", threshold: 100 },
  ]

  const currentStepIndex = steps.findIndex((step) => progress < step.threshold)
  const activeStep = currentStepIndex === -1 ? steps.length - 1 : currentStepIndex

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Analyzing Document</h1>
        <p className="text-muted-foreground text-lg">Our AI is processing your document</p>
      </motion.div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{file.name}</CardTitle>
                <CardDescription>{(file.size / 1024 / 1024).toFixed(2)} MB</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => {
              const isCompleted = progress >= step.threshold
              const isActive = i === activeStep

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isCompleted
                        ? "bg-accent text-accent-foreground"
                        : isActive
                          ? "bg-primary/20 border-2 border-primary"
                          : "bg-muted"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : isActive ? (
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    ) : (
                      <span className="text-xs font-medium text-muted-foreground">{i + 1}</span>
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      isCompleted || isActive ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </motion.div>
              )
            })}
          </div>

          {/* Security Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span>Your document is processed securely and never stored</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
