"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Scale,
  FileText,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface SavedCase {
  id: string
  fileName: string
  documentType: string
  state: string
  riskLevel: "low" | "medium" | "high"
  analyzedAt: Date
  sections: string[]
}

export default function SavedCasesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock saved cases (in real app, this would come from localStorage)
  const [savedCases, setSavedCases] = useState<SavedCase[]>([
    {
      id: "1",
      fileName: "Traffic_Violation_Notice.pdf",
      documentType: "Traffic Challan",
      state: "Maharashtra",
      riskLevel: "low",
      analyzedAt: new Date(Date.now() - 86400000),
      sections: ["Section 279", "Section 177"],
    },
    {
      id: "2",
      fileName: "FIR_Copy.pdf",
      documentType: "FIR Document",
      state: "Delhi",
      riskLevel: "medium",
      analyzedAt: new Date(Date.now() - 172800000),
      sections: ["Section 420", "Section 406"],
    },
    {
      id: "3",
      fileName: "Rental_Agreement.pdf",
      documentType: "Rental Agreement",
      state: "Karnataka",
      riskLevel: "low",
      analyzedAt: new Date(Date.now() - 604800000),
      sections: ["Section 107", "Section 108"],
    },
  ])

  const deleteCase = (id: string) => {
    setSavedCases((prev) => prev.filter((c) => c.id !== id))
  }

  const filteredCases = savedCases.filter(
    (c) =>
      c.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.documentType.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high":
        return "destructive"
      case "medium":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high":
      case "medium":
        return <AlertTriangle className="h-3 w-3" />
      default:
        return <CheckCircle className="h-3 w-3" />
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
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

          <Link href="/analyze">
            <Button size="sm" className="gap-2">
              <FileText className="h-4 w-4" />
              New Analysis
            </Button>
          </Link>
        </div>
      </header>

      <main className="container py-8 md:py-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Saved Cases</h1>
            <p className="text-muted-foreground">Your previously analyzed documents (stored locally on your device)</p>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search saved cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Cases List */}
          {filteredCases.length > 0 ? (
            <div className="space-y-4">
              {filteredCases.map((caseItem, i) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{caseItem.fileName}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span>{caseItem.documentType}</span>
                              <span className="text-muted-foreground/50">•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {caseItem.state}
                              </span>
                              <span className="text-muted-foreground/50">•</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {caseItem.analyzedAt.toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <Badge variant={getRiskColor(caseItem.riskLevel) as any} className="gap-1">
                                {getRiskIcon(caseItem.riskLevel)}
                                {caseItem.riskLevel} risk
                              </Badge>
                              {caseItem.sections.slice(0, 2).map((section, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {section}
                                </Badge>
                              ))}
                              {caseItem.sections.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{caseItem.sections.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 sm:flex-col">
                          <Link href={`/results/${caseItem.id}`} className="flex-1 sm:flex-none">
                            <Button variant="outline" size="sm" className="gap-2 w-full bg-transparent">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2 text-destructive hover:text-destructive"
                            onClick={() => deleteCase(caseItem.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only sm:not-sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">No saved cases</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery ? "No cases match your search" : "Your analyzed documents will appear here"}
                </p>
                <Link href="/analyze">
                  <Button className="gap-2">
                    <FileText className="h-4 w-4" />
                    Analyze a Document
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Privacy Note */}
          <Alert className="mt-8">
            <AlertDescription className="text-sm">
              All saved cases are stored locally on your device only. We never store your documents on our servers.
              Clearing your browser data will remove all saved cases.
            </AlertDescription>
          </Alert>
        </motion.div>
      </main>
    </div>
  )
}
