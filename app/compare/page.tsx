"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Scale,
  MapPin,
  ArrowLeftRight,
  Info,
  Loader2,
  AlertTriangle,
  CheckCircle2,
  Car,
  FileText,
  Gavel,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
]

const sections = [
  { value: "177", label: "Section 177 - General Offenses" },
  { value: "178", label: "Section 178 - Travelling Without Ticket" },
  { value: "179", label: "Section 179 - Disobedience of Orders" },
  { value: "180", label: "Section 180 - Unauthorized Use of Vehicle" },
  { value: "181", label: "Section 181 - Driving Without License" },
  { value: "182", label: "Section 182 - Driving Despite Disqualification" },
  { value: "183", label: "Section 183 - Overspeeding" },
  { value: "184", label: "Section 184 - Dangerous Driving" },
  { value: "185", label: "Section 185 - Drunken Driving" },
  { value: "186", label: "Section 186 - Driving When Mentally/Physically Unfit" },
  { value: "187", label: "Section 187 - Hit and Run" },
  { value: "188", label: "Section 188 - Racing on Highways" },
  { value: "189", label: "Section 189 - Speeding Near Schools" },
  { value: "190", label: "Section 190 - Using Mobile While Driving" },
  { value: "192", label: "Section 192 - Using Vehicle Without Registration" },
  { value: "194", label: "Section 194 - Overloading" },
  { value: "196", label: "Section 196 - Driving Without Insurance" },
  { value: "199", label: "Section 199 - Offenses by Juveniles" },
]

interface StateComparison {
  state: string
  penalty: string
  compoundingFee: string
  additionalNotes: string
  severity: "low" | "medium" | "high"
  courtProcedure?: string
  licenseImpact?: string
  vehicleImpact?: string
}

interface ComparisonResult {
  state1: StateComparison
  state2: StateComparison
  keyDifferences: string[]
  recommendation: string
}

function parseMarkdownBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, index) => {
    // Odd indices are the content that was between ** **
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part}
        </strong>
      )
    }
    return part
  })
}

export default function ComparePage() {
  const [selectedSection, setSelectedSection] = useState("")
  const [state1, setState1] = useState("")
  const [state2, setState2] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [comparison, setComparison] = useState<ComparisonResult | null>(null)

  const handleCompare = async () => {
    if (!selectedSection || !state1 || !state2) return

    setIsLoading(true)
    setError(null)
    setComparison(null)

    try {
      const sectionLabel = sections.find((s) => s.value === selectedSection)?.label || selectedSection

      const response = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: selectedSection,
          sectionLabel,
          state1,
          state2,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to compare states")
      }

      const data = await response.json()
      setComparison(data)
    } catch (err) {
      setError("Failed to fetch comparison data. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="h-4 w-4" />
      case "medium":
        return <Info className="h-4 w-4" />
      default:
        return <CheckCircle2 className="h-4 w-4" />
    }
  }

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

      <main className="container py-8 md:py-12 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Hero */}
          <div className="text-center mb-8">
            <div className="inline-flex h-14 w-14 rounded-2xl bg-primary/10 items-center justify-center mb-4">
              <ArrowLeftRight className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Compare Laws Across States</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              See how the same legal section applies differently in different Indian states
            </p>
          </div>

          {/* Selection Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Section & States</CardTitle>
              <CardDescription>
                Choose a legal section from the Motor Vehicles Act and two states to compare
              </CardDescription>
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
                  disabled={!selectedSection || !state1 || !state2 || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Comparing...
                    </>
                  ) : (
                    <>
                      <ArrowLeftRight className="h-4 w-4 mr-2" />
                      Compare
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Loading State */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="relative">
                  <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                  <Scale className="h-6 w-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="mt-4 text-muted-foreground">Analyzing state-specific laws...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error State */}
          {error && (
            <Alert variant="destructive" className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Comparison Results */}
          <AnimatePresence>
            {comparison && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* State Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[comparison.state1, comparison.state2].map((comp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="overflow-hidden h-full">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-primary" />
                              <CardTitle>{comp.state}</CardTitle>
                            </div>
                            <Badge variant={getSeverityColor(comp.severity)} className="gap-1">
                              {getSeverityIcon(comp.severity)}
                              {comp.severity} severity
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                              <Gavel className="h-4 w-4" />
                              Penalty
                            </h4>
                            <p className="font-medium">{parseMarkdownBold(comp.penalty)}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Compounding Fee</h4>
                            <p className="font-medium">{parseMarkdownBold(comp.compoundingFee)}</p>
                          </div>

                          {comp.licenseImpact && (
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                License Impact
                              </h4>
                              <p className="text-sm">{parseMarkdownBold(comp.licenseImpact)}</p>
                            </div>
                          )}

                          {comp.vehicleImpact && (
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                                <Car className="h-4 w-4" />
                                Vehicle Impact
                              </h4>
                              <p className="text-sm">{parseMarkdownBold(comp.vehicleImpact)}</p>
                            </div>
                          )}

                          {comp.courtProcedure && (
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Court Procedure</h4>
                              <p className="text-sm">{parseMarkdownBold(comp.courtProcedure)}</p>
                            </div>
                          )}

                          <div className="p-3 rounded-lg bg-muted/50">
                            <h4 className="text-sm font-medium mb-1">State-Specific Notes</h4>
                            <p className="text-sm text-muted-foreground">{parseMarkdownBold(comp.additionalNotes)}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Key Differences */}
                {comparison.keyDifferences && comparison.keyDifferences.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ArrowLeftRight className="h-5 w-5 text-primary" />
                          Key Differences
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {comparison.keyDifferences.map((diff, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                                {i + 1}
                              </span>
                              <span className="text-muted-foreground leading-relaxed">{parseMarkdownBold(diff)}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Recommendation */}
                {comparison.recommendation && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Alert className="border-primary/20 bg-primary/5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-foreground">
                        <strong className="block mb-1">Recommendation</strong>
                        {parseMarkdownBold(comparison.recommendation)}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info Alert */}
          <Alert className="mt-8">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Laws and penalties may change. This comparison is based on the Motor Vehicles (Amendment) Act, 2019 and
              state-specific notifications. Always verify with official sources before taking any action.
            </AlertDescription>
          </Alert>
        </motion.div>
      </main>
    </div>
  )
}
