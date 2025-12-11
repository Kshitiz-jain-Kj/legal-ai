"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Scale, MapPin, ArrowLeftRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

const states = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Uttar Pradesh",
  "West Bengal",
  "Rajasthan",
]

const sections = [
  { value: "279", label: "Section 279 - Rash Driving" },
  { value: "177", label: "Section 177 - General Provision" },
  { value: "184", label: "Section 184 - Dangerous Driving" },
  { value: "185", label: "Section 185 - Drunken Driving" },
]

interface StateComparison {
  state: string
  penalty: string
  compoundingFee: string
  additionalNotes: string
  severity: "low" | "medium" | "high"
}

export default function ComparePage() {
  const [selectedSection, setSelectedSection] = useState("")
  const [state1, setState1] = useState("")
  const [state2, setState2] = useState("")
  const [showComparison, setShowComparison] = useState(false)

  // Mock comparison data
  const getComparisonData = (state: string, section: string): StateComparison => {
    const data: Record<string, Record<string, StateComparison>> = {
      Maharashtra: {
        "279": {
          state: "Maharashtra",
          penalty: "First offense: Rs. 1,000 | Second offense: Rs. 2,000",
          compoundingFee: "Rs. 500 for first-time offenders",
          additionalNotes: "Online payment available through Maharashtra Traffic Police portal",
          severity: "medium",
        },
        "185": {
          state: "Maharashtra",
          penalty: "First offense: Rs. 10,000 | Repeat: Rs. 15,000 + 2 years imprisonment",
          compoundingFee: "Not compoundable",
          additionalNotes: "License suspended for 6 months minimum",
          severity: "high",
        },
      },
      Delhi: {
        "279": {
          state: "Delhi",
          penalty: "First offense: Rs. 1,500 | Second offense: Rs. 3,000",
          compoundingFee: "Rs. 750 for first-time offenders",
          additionalNotes: "Stricter enforcement in NCR region",
          severity: "medium",
        },
        "185": {
          state: "Delhi",
          penalty: "First offense: Rs. 10,000 | Repeat: Rs. 15,000 + 3 years imprisonment",
          compoundingFee: "Not compoundable",
          additionalNotes: "Vehicle may be impounded for 90 days",
          severity: "high",
        },
      },
      Karnataka: {
        "279": {
          state: "Karnataka",
          penalty: "First offense: Rs. 1,000 | Second offense: Rs. 2,500",
          compoundingFee: "Rs. 600 for first-time offenders",
          additionalNotes: "Bangalore has special traffic tribunals",
          severity: "low",
        },
        "185": {
          state: "Karnataka",
          penalty: "First offense: Rs. 10,000 | Repeat: Rs. 15,000 + 2 years imprisonment",
          compoundingFee: "Not compoundable",
          additionalNotes: "Mandatory counseling sessions introduced",
          severity: "high",
        },
      },
    }

    return (
      data[state]?.[section] || {
        state,
        penalty: "Standard penalty as per Motor Vehicles Act",
        compoundingFee: "Varies by case",
        additionalNotes: "Contact local RTO for specific details",
        severity: "medium" as const,
      }
    )
  }

  const handleCompare = () => {
    if (selectedSection && state1 && state2) {
      setShowComparison(true)
    }
  }

  const comparison1 = showComparison ? getComparisonData(state1, selectedSection) : null
  const comparison2 = showComparison ? getComparisonData(state2, selectedSection) : null

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Scale className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold hidden sm:block">LegalEase AI</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Hero */}
          <div className="text-center mb-8">
            <div className="inline-flex h-14 w-14 rounded-2xl bg-primary/10 items-center justify-center mb-4">
              <ArrowLeftRight className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Compare Laws Across States</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              See how the same legal section applies differently in different states
            </p>
          </div>

          {/* Selection Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Section & States</CardTitle>
              <CardDescription>Choose a legal section and two states to compare</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Legal Section</label>
                  <Select value={selectedSection} onValueChange={setSelectedSection}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a section" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.map((section) => (
                        <SelectItem key={section.value} value={section.value}>
                          {section.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">State 1</label>
                    <Select value={state1} onValueChange={setState1}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state} disabled={state === state2}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">State 2</label>
                    <Select value={state2} onValueChange={setState2}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state} disabled={state === state1}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  className="w-full sm:w-auto"
                  onClick={handleCompare}
                  disabled={!selectedSection || !state1 || !state2}
                >
                  <ArrowLeftRight className="h-4 w-4 mr-2" />
                  Compare
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Results */}
          {showComparison && comparison1 && comparison2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[comparison1, comparison2].map((comp, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/5">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle>{comp.state}</CardTitle>
                    </div>
                    <Badge
                      variant={
                        comp.severity === "high" ? "destructive" : comp.severity === "medium" ? "outline" : "secondary"
                      }
                    >
                      {comp.severity} severity
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Penalty</h4>
                      <p className="font-medium">{comp.penalty}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Compounding Fee</h4>
                      <p className="font-medium">{comp.compoundingFee}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <h4 className="text-sm font-medium mb-1">State-Specific Notes</h4>
                      <p className="text-sm text-muted-foreground">{comp.additionalNotes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {/* Info Alert */}
          <Alert className="mt-8">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Laws and penalties may change. This comparison is for informational purposes only. Always verify with
              official sources.
            </AlertDescription>
          </Alert>
        </motion.div>
      </main>
    </div>
  )
}
