"use client"

import { motion } from "framer-motion"
import { FileText, Search, Mail, Building, Gavel, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { TimelineStep } from "@/lib/types"

interface LegalTimelineProps {
  timeline?: TimelineStep[]
}

export function LegalTimeline({ timeline }: LegalTimelineProps) {
  // Default timeline if none provided from API
  const defaultSteps = [
    {
      title: "Document Received",
      description: "You received the legal notice",
      deadline: "Today",
    },
    {
      title: "Review Period",
      description: "Review and understand the document",
      deadline: "Within 7 days",
    },
    {
      title: "Take Action",
      description: "Respond or take required action",
      deadline: "As specified",
    },
    {
      title: "Resolution",
      description: "Case resolved after action taken",
      deadline: "TBD",
    },
  ]

  const steps = timeline && timeline.length > 0 ? timeline : defaultSteps

  // Icons for different step types
  const getIcon = (index: number, total: number) => {
    if (index === 0) return FileText
    if (index === total - 1) return Gavel
    if (index === 1) return Mail
    if (index === 2) return Search
    return Building
  }

  // Determine status based on position
  const getStatus = (index: number) => {
    if (index === 0) return "completed"
    if (index === 1) return "current"
    return "upcoming"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Legal Timeline</CardTitle>
        <CardDescription>Expected progression of your case</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = getIcon(i, steps.length)
              const status = getStatus(i)

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="relative flex gap-4"
                >
                  <div
                    className={`relative z-10 h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${
                      status === "completed"
                        ? "bg-accent text-accent-foreground"
                        : status === "current"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {status === "completed" ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{step.title}</h4>
                      {step.deadline && (
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {step.deadline}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                    {status === "current" && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Current Stage
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
