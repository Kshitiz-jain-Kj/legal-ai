"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Shield, ArrowLeft, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocumentUploader } from "@/components/analyze/document-uploader"
import { AnalysisProgress } from "@/components/analyze/analysis-progress"
import { ResultsDashboard } from "@/components/analyze/results-dashboard"
import type { DocumentAnalysis } from "@/lib/types"

type AnalysisState = "upload" | "analyzing" | "results" | "error"

export default function AnalyzePage() {
  const [state, setState] = useState<AnalysisState>("upload")
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [analysisData, setAnalysisData] = useState<DocumentAnalysis | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = useCallback(async (uploadedFile: File) => {
    setFile(uploadedFile)
    setState("analyzing")
    setProgress(0)
    setError(null)

    let currentProgress = 0
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 8
      if (currentProgress >= 90) {
        currentProgress = 90 // Cap at 90% until API responds
      }
      setProgress(currentProgress)
    }, 500)

    try {
      const formData = new FormData()
      formData.append("file", uploadedFile)

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Analysis failed")
      }

      const data = await response.json()

      if (data.success && data.analysis) {
        setProgress(100)
        setAnalysisData(data.analysis)
        setTimeout(() => setState("results"), 500)
      } else {
        throw new Error("Invalid response from server")
      }
    } catch (err) {
      clearInterval(progressInterval)
      console.error("Analysis error:", err)
      setError(err instanceof Error ? err.message : "An error occurred during analysis")
      setState("error")
    }
  }, [])

  const handleReset = useCallback(() => {
    setState("upload")
    setFile(null)
    setProgress(0)
    setAnalysisData(null)
    setError(null)
  }, [])

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
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

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span className="hidden sm:inline">Secure & Private</span>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <AnimatePresence mode="wait">
          {state === "upload" && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <DocumentUploader onUpload={handleFileUpload} />
            </motion.div>
          )}

          {state === "analyzing" && file && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <AnalysisProgress file={file} progress={progress} onCancel={handleReset} />
            </motion.div>
          )}

          {state === "results" && analysisData && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ResultsDashboard
                fileName={file?.name || "Document"}
                onNewAnalysis={handleReset}
                analysis={analysisData}
              />
            </motion.div>
          )}

          {state === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="p-8 rounded-xl bg-destructive/10 border border-destructive/20">
                <h2 className="text-xl font-semibold mb-2">Analysis Failed</h2>
                <p className="text-muted-foreground mb-4">{error}</p>
                <Button onClick={handleReset}>Try Again</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
