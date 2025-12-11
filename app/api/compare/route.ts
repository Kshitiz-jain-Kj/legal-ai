import { GoogleGenAI } from "@google/genai"
import { type NextRequest, NextResponse } from "next/server"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" })

export async function POST(request: NextRequest) {
  try {
    const { section, sectionLabel, state1, state2 } = await request.json()

    if (!section || !state1 || !state2) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const prompt = `You are a legal expert specializing in Indian Motor Vehicles Act and state-specific traffic laws.

Compare how "${sectionLabel}" applies in ${state1} and ${state2}.

Provide accurate, realistic information based on the Motor Vehicles (Amendment) Act, 2019 and any state-specific amendments or implementations.

Return a JSON object with the following structure:
{
  "state1": {
    "state": "${state1}",
    "penalty": "Specific penalty amounts for first offense and repeat offense in INR",
    "compoundingFee": "Whether compoundable and fee amount if applicable",
    "additionalNotes": "State-specific enforcement details, special provisions, or notable differences",
    "severity": "low" | "medium" | "high",
    "courtProcedure": "Brief description of court procedure if applicable",
    "licenseImpact": "Impact on driving license (suspension, points, etc.)",
    "vehicleImpact": "Any vehicle impoundment or seizure rules"
  },
  "state2": {
    "state": "${state2}",
    "penalty": "Specific penalty amounts for first offense and repeat offense in INR",
    "compoundingFee": "Whether compoundable and fee amount if applicable",
    "additionalNotes": "State-specific enforcement details, special provisions, or notable differences",
    "severity": "low" | "medium" | "high",
    "courtProcedure": "Brief description of court procedure if applicable",
    "licenseImpact": "Impact on driving license (suspension, points, etc.)",
    "vehicleImpact": "Any vehicle impoundment or seizure rules"
  },
  "keyDifferences": [
    "List 3-5 key differences between how these two states handle this section"
  ],
  "recommendation": "Brief recommendation on which state has stricter enforcement and any tips for compliance"
}

Be specific with actual penalty amounts in Indian Rupees (Rs.). Use real data from the Motor Vehicles Act amendments and state notifications.

Return ONLY valid JSON, no markdown formatting.`

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    })

    const text = response.text || ""

    // Clean the response - remove markdown code blocks if present
    let cleanedText = text.trim()
    if (cleanedText.startsWith("```json")) {
      cleanedText = cleanedText.slice(7)
    } else if (cleanedText.startsWith("```")) {
      cleanedText = cleanedText.slice(3)
    }
    if (cleanedText.endsWith("```")) {
      cleanedText = cleanedText.slice(0, -3)
    }
    cleanedText = cleanedText.trim()

    const comparisonData = JSON.parse(cleanedText)

    return NextResponse.json(comparisonData)
  } catch (error) {
    console.error("Comparison error:", error)
    return NextResponse.json({ error: "Failed to compare states. Please try again." }, { status: 500 })
  }
}
