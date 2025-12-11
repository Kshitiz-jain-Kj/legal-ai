"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Scale, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnalysisProgress } from "@/components/analyze/analysis-progress"
import { ResultsDashboard } from "@/components/analyze/results-dashboard"

export default function DemoPage() {
  const router = useRouter()
  const [state, setState] = useState<"loading" | "results">("loading")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Auto-progress for demo
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 20
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(interval)
        setTimeout(() => setState("results"), 500)
      }
      setProgress(currentProgress)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const mockFile = new File([""], "Demo_Traffic_Challan.pdf", { type: "application/pdf" })

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

          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Demo Mode</span>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {state === "loading" ? (
          <AnalysisProgress file={mockFile} progress={progress} onCancel={() => router.push("/")} />
        ) : (
          <ResultsDashboard fileName="Demo_Traffic_Challan.pdf" onNewAnalysis={() => router.push("/analyze")} />
        )}
      </main>
    </div>
  )
}
