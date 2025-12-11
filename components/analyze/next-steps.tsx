"use client"

import { motion } from "framer-motion"
import { CheckSquare, Square, AlertCircle, FileText, CreditCard, Phone, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { NextStep } from "@/lib/types"

interface NextStepsProps {
  steps?: NextStep[]
}

export function NextSteps({ steps }: NextStepsProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  // Default actions if none provided from API
  const defaultActions: NextStep[] = [
    { title: "Keep a copy of the document safe", description: "Store it securely for reference", priority: "high" },
    { title: "Note any deadlines mentioned", description: "Mark important dates on your calendar", priority: "high" },
    {
      title: "Verify all details are correct",
      description: "Check names, dates, and other information",
      priority: "medium",
    },
    {
      title: "Gather required documents",
      description: "Collect any supporting documents you may need",
      priority: "medium",
    },
  ]

  const actionItems = steps && steps.length > 0 ? steps : defaultActions

  // Separate by priority
  const highPriority = actionItems.filter((item) => item.priority === "high")
  const mediumPriority = actionItems.filter((item) => item.priority === "medium")
  const lowPriority = actionItems.filter((item) => item.priority === "low")

  const renderActionItems = (items: NextStep[], startIndex: number) => {
    return items.map((item, i) => {
      const id = `${startIndex + i}`
      return (
        <motion.div
          key={id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
          onClick={() => toggleItem(id)}
        >
          {checkedItems.includes(id) ? (
            <CheckSquare className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          ) : (
            <Square className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          )}
          <div>
            <span className={checkedItems.includes(id) ? "line-through text-muted-foreground" : "font-medium"}>
              {item.title}
            </span>
            {item.description && (
              <p
                className={`text-sm mt-0.5 ${checkedItems.includes(id) ? "text-muted-foreground/60" : "text-muted-foreground"}`}
              >
                {item.description}
              </p>
            )}
            {item.deadline && <p className="text-xs text-amber-600 mt-1">Deadline: {item.deadline}</p>}
          </div>
        </motion.div>
      )
    })
  }

  return (
    <div className="space-y-6">
      {/* High Priority Actions */}
      {highPriority.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              High Priority Actions
            </CardTitle>
            <CardDescription>Things you should do right away</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">{renderActionItems(highPriority, 0)}</div>
          </CardContent>
        </Card>
      )}

      {/* Medium Priority Actions */}
      {mediumPriority.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-amber-500" />
              Recommended Actions
            </CardTitle>
            <CardDescription>Important steps to take soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">{renderActionItems(mediumPriority, highPriority.length)}</div>
          </CardContent>
        </Card>
      )}

      {/* Low Priority Actions */}
      {lowPriority.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Additional Steps
            </CardTitle>
            <CardDescription>Other actions you may consider</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {renderActionItems(lowPriority, highPriority.length + mediumPriority.length)}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Show default card if no priority-specific items */}
      {highPriority.length === 0 && mediumPriority.length === 0 && lowPriority.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              Recommended Actions
            </CardTitle>
            <CardDescription>Steps you should consider taking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">{renderActionItems(defaultActions, 0)}</div>
          </CardContent>
        </Card>
      )}

      {/* Need a Lawyer? */}
      <Card className="border-accent/30 bg-accent/5">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold mb-1">Need Professional Legal Help?</h3>
              <p className="text-sm text-muted-foreground">
                If this matter is complex or you are unsure how to proceed, consider consulting a legal professional.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Phone className="h-4 w-4" />
                Get Legal Help
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Calendar className="h-4 w-4" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
