import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 })
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer()
    const base64 = Buffer.from(bytes).toString("base64")

    // Determine mime type
    const mimeType = file.type || "application/pdf"

    // Create the prompt for legal document analysis
    const prompt = `You are an expert legal document analyzer specializing in Indian law. Analyze this document thoroughly and provide a comprehensive analysis in the following JSON format. Be accurate and helpful.

IMPORTANT: Return ONLY valid JSON, no markdown, no code blocks, just the raw JSON object.

PAY SPECIAL ATTENTION TO:
- IPC (Indian Penal Code) sections mentioned (e.g., Section 279, 304A, 338, etc.)
- BNS (Bharatiya Nyaya Sanhita) sections if mentioned (new criminal code)
- Motor Vehicles Act sections
- Any other legal provisions, acts, or statutes mentioned
- Extract ALL section numbers with their corresponding act names

{
  "documentType": "Type of document (e.g., Traffic Violation Notice, FIR, Court Summons, Legal Notice, Rental Agreement, etc.)",
  "state": "State/Jurisdiction where this document applies (e.g., Maharashtra, Delhi, Karnataka, etc.)",
  "riskLevel": "low" | "medium" | "high",
  "riskScore": number between 0-100,
  "verdict": "A brief 1-2 sentence summary of what this document means for the user and recommended action",
  "sections": [
    {
      "id": "1",
      "title": "Section name with Act (e.g., 'Section 279 IPC - Rash Driving', 'Section 184 MVA - Dangerous Driving', 'Section 281 BNS')",
      "actName": "Name of the act (IPC, BNS, Motor Vehicles Act, CrPC, etc.)",
      "sectionNumber": "Just the section number (e.g., '279', '184', '304A')",
      "risk": "low" | "medium" | "high",
      "legalText": "The actual legal text or provision mentioned",
      "plainText": "Simple explanation of what this means in everyday language",
      "penalty": "What are the potential penalties or consequences (include imprisonment terms, fine amounts)",
      "stateNote": "Any state-specific notes or variations",
      "isBailable": "Yes" | "No" | "Not applicable",
      "cognizable": "Yes" | "No" | "Not applicable"
    }
  ],
  "ipcSections": [
    {
      "section": "Section number (e.g., '279')",
      "title": "Section title",
      "description": "What this section covers",
      "punishment": "Prescribed punishment under law"
    }
  ],
  "extractedDetails": {
    "caseNumber": "Case/Challan/FIR/Reference number if found",
    "firNumber": "FIR number if this is a police document",
    "date": "Date mentioned in document",
    "incidentDate": "Date of incident if different from document date",
    "jurisdiction": "Court/Authority/Police Station name",
    "vehicleNumber": "If applicable",
    "partyNames": "Names of parties involved if any",
    "complainant": "Name of complainant if mentioned",
    "accused": "Name of accused if mentioned",
    "amount": "Any amount/fine mentioned",
    "policeStation": "Police station name if mentioned",
    "investigatingOfficer": "IO name if mentioned"
  },
  "missingInfo": ["List of important information that appears to be missing or unclear in the document"],
  "timeline": [
    {
      "title": "Step title",
      "description": "What happens at this step",
      "deadline": "When this needs to happen (if applicable)"
    }
  ],
  "nextSteps": [
    {
      "title": "Action item",
      "description": "What the user should do",
      "priority": "high" | "medium" | "low",
      "deadline": "When to complete this"
    }
  ],
  "suggestedQuestions": [
    "Question 1 the user might want to ask about this document",
    "Question 2",
    "Question 3"
  ]
}

Analyze the document carefully. Extract EVERY legal section mentioned - especially IPC sections, BNS sections, Motor Vehicles Act sections, CrPC sections, and any other statutory provisions. If any field cannot be determined from the document, use reasonable defaults or indicate "Not specified" where appropriate.`

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: base64,
              },
            },
            { text: prompt },
          ],
        },
      ],
    })

    const responseText = result.text || ""

    // Parse JSON from response
    let analysis
    try {
      // Try to extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0])
      } else {
        throw new Error("No JSON found in response")
      }
    } catch (parseError) {
      console.error("Failed to parse Gemini response:", responseText)
      return Response.json(
        {
          error: "Failed to parse analysis",
          rawResponse: responseText,
        },
        { status: 500 },
      )
    }

    // Ensure all required fields have defaults
    const defaultAnalysis = {
      documentType: "Legal Document",
      state: "Not specified",
      riskLevel: "medium" as const,
      riskScore: 50,
      verdict: "Document analyzed. Please review the details below.",
      sections: [],
      ipcSections: [], // Added ipcSections default
      extractedDetails: {
        caseNumber: "Not found",
        date: "Not specified",
        jurisdiction: "Not specified",
      },
      missingInfo: [],
      timeline: [],
      nextSteps: [],
      suggestedQuestions: [
        "What should I do next?",
        "Is there a deadline I should be aware of?",
        "What are my rights in this situation?",
      ],
    }

    // Merge with defaults
    const finalAnalysis = {
      ...defaultAnalysis,
      ...analysis,
      extractedDetails: {
        ...defaultAnalysis.extractedDetails,
        ...(analysis.extractedDetails || {}),
      },
      ipcSections: analysis.ipcSections || [], // Ensure ipcSections is included
    }

    return Response.json({ success: true, analysis: finalAnalysis })
  } catch (error) {
    console.error("Analysis error:", error)
    return Response.json({ error: error instanceof Error ? error.message : "Analysis failed" }, { status: 500 })
  }
}
