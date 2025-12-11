"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Scale, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnalysisProgress } from "@/components/analyze/analysis-progress"
import { ResultsDashboard } from "@/components/analyze/results-dashboard"
import type { DocumentAnalysis } from "@/lib/types"

const mockAnalysis: DocumentAnalysis = {
  documentType: "Traffic Challan",
  state: "Maharashtra",
  riskLevel: "medium",
  riskScore: 45,
  verdict:
    "This is a traffic violation challan for overspeeding. The fine amount is moderate and can be paid online or at the RTO office within 60 days to avoid additional penalties.",
  extractedDetails: {
    "Challan Number": "MH-2024-TC-78234",
    "Vehicle Number": "MH 12 AB 1234",
    Violation: "Overspeeding (Section 183)",
    "Fine Amount": "Rs. 2,000",
    "Issue Date": "15 Dec 2024",
    "Due Date": "14 Feb 2025",
    "Issuing Authority": "Mumbai Traffic Police",
    Location: "Western Express Highway, Andheri",
  },
  missingInfo: ["Driver's license number not clearly visible", "Exact speed reading not mentioned"],
  sections: [
    {
      id: "section-183",
      title: "Section 183 - Driving at Excessive Speed",
      legalText:
        "Whoever drives a motor vehicle at a speed exceeding the maximum or below the minimum fixed under this Act shall be punishable as per the Motor Vehicles Act, 2019.",
      plainText:
        "You were caught driving faster than the legal speed limit. This is a common traffic violation that carries a fine, but typically does not result in license suspension for first-time offenders.",
      risk: "medium",
      penalty: "Fine of Rs. 1,000 to Rs. 2,000 for first offense. Rs. 2,000 to Rs. 4,000 for subsequent offenses.",
      stateNote:
        "Maharashtra has implemented e-challan system. Payment can be made online through the Mahatrafficechallan portal.",
    },
    {
      id: "section-184",
      title: "Section 184 - Dangerous Driving",
      legalText:
        "Whoever drives a motor vehicle at a speed or in a manner which is dangerous to the public shall be punishable under the Motor Vehicles Act.",
      plainText:
        "If the overspeeding was in a manner dangerous to others, additional charges under dangerous driving may apply. This was not indicated in your challan.",
      risk: "low",
      penalty: "Fine up to Rs. 5,000 and/or imprisonment up to 6 months for first offense.",
      stateNote: "This section is typically applied only when overspeeding is combined with reckless behavior.",
    },
  ],
  timeline: [
    { date: "15 Dec 2024", event: "Challan Issued", description: "Traffic violation recorded" },
    { date: "Within 60 days", event: "Payment Due", description: "Pay fine to avoid penalties" },
    { date: "After 60 days", event: "Late Fee Applicable", description: "Additional charges may apply" },
  ],
  nextSteps: [
    { step: "Verify challan details on official portal", completed: false },
    { step: "Pay fine online or visit RTO", completed: false },
    { step: "Keep payment receipt for records", completed: false },
  ],
  suggestedQuestions: [
    "How can I pay this challan online?",
    "What happens if I don't pay within 60 days?",
    "Can I contest this challan?",
  ],
}

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
          <ResultsDashboard
            fileName="Demo_Traffic_Challan.pdf"
            onNewAnalysis={() => router.push("/analyze")}
            analysis={mockAnalysis}
          />
        )}
      </main>
    </div>
  )
}
