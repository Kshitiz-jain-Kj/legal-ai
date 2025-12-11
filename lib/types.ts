export interface LegalSection {
  id: string
  title: string
  risk: "low" | "medium" | "high"
  legalText: string
  plainText: string
  penalty: string
  stateNote: string
}

export interface ExtractedDetails {
  caseNumber?: string
  date?: string
  jurisdiction?: string
  vehicleNumber?: string
  partyNames?: string
  amount?: string
  [key: string]: string | undefined
}

export interface TimelineStep {
  title: string
  description: string
  deadline?: string
}

export interface NextStep {
  title: string
  description: string
  priority: "high" | "medium" | "low"
  deadline?: string
}

export interface DocumentAnalysis {
  documentType: string
  state: string
  riskLevel: "low" | "medium" | "high"
  riskScore: number
  verdict: string
  sections: LegalSection[]
  extractedDetails: ExtractedDetails
  missingInfo: string[]
  timeline: TimelineStep[]
  nextSteps: NextStep[]
  suggestedQuestions: string[]
}
