"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle, Download, FileText, Upload, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function DocumentReview() {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeTab, setActiveTab] = useState("analysis")

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Simulate file upload
    setIsUploaded(true)
    setIsAnalyzing(true)

    // Simulate progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setIsAnalyzing(false)
      }
    }, 150)
  }

  const handleUploadClick = () => {
    // Simulate file upload
    setIsUploaded(true)
    setIsAnalyzing(true)

    // Simulate progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setIsAnalyzing(false)
      }
    }, 150)
  }

  const handleReset = () => {
    setIsUploaded(false)
    setIsAnalyzing(false)
    setProgress(0)
  }

  // Mock data for document analysis
  const clauses = [
    {
      id: 1,
      title: "Non-Compete Agreement",
      content:
        "Employee shall not, during the term of employment and for a period of two (2) years following the termination of employment, engage in any business that competes with the Company within a 100-mile radius.",
      risk: "high",
      explanation:
        "This non-compete clause may be unenforceable in California as it's overly restrictive in both duration and geographic scope.",
      recommendation:
        "Consider limiting the duration to 1 year and specifying the exact industry rather than any competing business.",
    },
    {
      id: 2,
      title: "Termination Policy",
      content:
        "The Company may terminate this Agreement at any time without cause and without further obligation to the Employee except for payment of services through the date of termination.",
      risk: "medium",
      explanation:
        "This at-will termination clause lacks specificity about notice periods and may conflict with implied contract terms.",
      recommendation:
        "Add a specific notice period (e.g., 2 weeks) and clarify any severance or benefits continuation.",
    },
    {
      id: 3,
      title: "Intellectual Property Rights",
      content:
        "All inventions, improvements, and developments made by Employee during employment shall be the sole and exclusive property of the Company.",
      risk: "low",
      explanation: "This IP assignment clause is generally enforceable but could benefit from more specificity.",
      recommendation: "Consider adding language that specifically addresses work created outside of employment hours.",
    },
    {
      id: 4,
      title: "Liability Limitation",
      content:
        "In no event shall the Company be liable for any indirect, special, incidental, or consequential damages arising out of this Agreement.",
      risk: "medium",
      explanation: "This liability limitation may be unenforceable in cases of gross negligence or willful misconduct.",
      recommendation: "Add an exception for cases of gross negligence, willful misconduct, or fraud.",
    },
    {
      id: 5,
      title: "Governing Law",
      content:
        "This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware.",
      risk: "low",
      explanation: "This governing law provision is standard and generally enforceable.",
      recommendation: "No changes needed. This clause is appropriate.",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">AI-Powered Legal Document Review</h1>
          <p className="text-muted-foreground">Upload a document to get AI-powered analysis and recommendations.</p>
        </div>

        {!isUploaded ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle>Upload Document for AI Analysis</CardTitle>
                <CardDescription>
                  Drag and drop your legal document or click to upload. We support PDF, DOCX, and TXT files.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
                    isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {isDragging ? "Drop your file here" : "Drag & Drop your document here"}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">or click the button below to browse files</p>
                  <Button onClick={handleUploadClick}>Upload Document</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : isAnalyzing ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle>Analyzing Document</CardTitle>
                <CardDescription>
                  Our AI is extracting clauses, identifying risks, and generating recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-8 flex items-center gap-4">
                  <FileText className="h-12 w-12 text-primary" />
                  <div className="text-lg font-medium">Contract_Agreement_2023.pdf</div>
                  <Button variant="ghost" size="icon" onClick={handleReset}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mb-4 w-full max-w-md">
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="text-sm text-muted-foreground">
                  {progress < 30
                    ? "Extracting clauses..."
                    : progress < 60
                      ? "Identifying risks..."
                      : progress < 90
                        ? "Generating recommendations..."
                        : "Finalizing analysis..."}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Document Analysis Results</CardTitle>
                    <CardDescription>AI-powered analysis of Contract_Agreement_2023.pdf</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleReset}>
                      New Analysis
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="analysis">Clause Analysis</TabsTrigger>
                    <TabsTrigger value="summary">AI Summary</TabsTrigger>
                    <TabsTrigger value="comparison">Contract Comparison</TabsTrigger>
                  </TabsList>
                  <TabsContent value="analysis">
                    <div className="mb-4 grid grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4 flex flex-col items-center">
                          <div className="mb-2 rounded-full bg-green-500/20 p-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold">3</div>
                            <div className="text-sm text-muted-foreground">Low Risk Clauses</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex flex-col items-center">
                          <div className="mb-2 rounded-full bg-amber-500/20 p-2">
                            <AlertTriangle className="h-5 w-5 text-amber-500" />
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold">2</div>
                            <div className="text-sm text-muted-foreground">Medium Risk Clauses</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex flex-col items-center">
                          <div className="mb-2 rounded-full bg-destructive/20 p-2">
                            <AlertTriangle className="h-5 w-5 text-destructive" />
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold">1</div>
                            <div className="text-sm text-muted-foreground">High Risk Clauses</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {clauses.map((clause) => (
                        <AccordionItem key={clause.id} value={`clause-${clause.id}`}>
                          <AccordionTrigger className="group">
                            <div className="flex items-center gap-3">
                              {clause.risk === "high" ? (
                                <Badge variant="destructive">High Risk</Badge>
                              ) : clause.risk === "medium" ? (
                                <Badge variant="outline" className="border-amber-500 text-amber-500">
                                  Medium Risk
                                </Badge>
                              ) : (
                                <Badge variant="secondary">Low Risk</Badge>
                              )}
                              <span>{clause.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <div className="rounded-md bg-muted p-3">
                                <div className="text-sm font-medium mb-1">Original Clause:</div>
                                <div className="text-sm">{clause.content}</div>
                              </div>
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-md bg-muted/50 p-3">
                                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                                    <Info className="h-4 w-4" /> Analysis:
                                  </div>
                                  <div className="text-sm">{clause.explanation}</div>
                                </div>
                                <div className="rounded-md bg-primary/5 p-3">
                                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                                    <CheckCircle className="h-4 w-4 text-primary" /> Recommendation:
                                  </div>
                                  <div className="text-sm">{clause.recommendation}</div>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  <TabsContent value="summary">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">AI-Generated Legal Summary</h3>
                        <div className="space-y-4 text-sm">
                          <p>
                            This employment agreement contains several standard clauses with varying levels of risk. The
                            most concerning is the non-compete clause, which extends for 2 years and covers a 100-mile
                            radius. This clause is likely unenforceable in California and potentially other states with
                            restrictions on non-compete agreements.
                          </p>
                          <p>
                            The termination policy lacks specificity regarding notice periods, which could create
                            ambiguity in the event of employment termination. The intellectual property clause is
                            generally enforceable but could benefit from more specific language regarding work created
                            outside of employment hours.
                          </p>
                          <p>
                            The liability limitation clause may be unenforceable in cases of gross negligence or willful
                            misconduct and should include appropriate exceptions. The governing law provision
                            designating Delaware is standard and generally enforceable.
                          </p>
                          <p>
                            <strong>Overall Risk Assessment:</strong> This contract contains provisions that may create
                            legal exposure, particularly regarding the non-compete and termination clauses. We recommend
                            revisions to these sections to improve enforceability and reduce potential disputes.
                          </p>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <Button>
                            <Download className="mr-2 h-4 w-4" /> Download Summary
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="comparison">
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-semibold">Contract Comparison</h3>
                          <p className="text-sm text-muted-foreground">
                            Upload another version of this contract to compare differences
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center">
                          <div className="mb-4 rounded-full bg-primary/10 p-3">
                            <Upload className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold">Upload a contract version to compare</h3>
                          <p className="mb-4 text-sm text-muted-foreground">
                            We'll highlight the differences between versions
                          </p>
                          <Button>Upload for Comparison</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
}
