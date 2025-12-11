import { GoogleGenAI } from "@google/genai"
import { type NextRequest, NextResponse } from "next/server"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

const SYSTEM_PROMPT = `You are LegalEase AI, an expert Indian legal adviser assistant. Your role is to help users understand legal matters in India, particularly:

1. **Traffic Violations**: Motor Vehicles Act 2019, state-specific amendments, challans, fines, and penalties
2. **Criminal Law**: Indian Penal Code (IPC), Bharatiya Nyaya Sanhita (BNS), CrPC procedures
3. **Civil Law**: Contract disputes, property matters, consumer protection
4. **Constitutional Rights**: Fundamental rights, RTI, PIL
5. **Legal Procedures**: Court processes, bail, appeals, documentation

Guidelines:
- Always provide accurate, helpful information based on Indian law
- Explain complex legal terms in simple, easy-to-understand language
- Mention specific sections, acts, and penalties where applicable
- Provide state-specific information when relevant
- Suggest practical next steps the user can take
- Be empathetic and supportive in your responses
- Use bullet points and formatting for clarity
- If unsure about something, acknowledge it and suggest consulting a lawyer

IMPORTANT: Always add this disclaimer at the end of responses involving specific legal advice:
"⚠️ This is general information only and not legal advice. For your specific situation, please consult a qualified lawyer."

Format your responses with:
- **Bold** for important terms and section numbers
- Bullet points for lists
- Clear paragraph breaks for readability`

export async function POST(request: NextRequest) {
  try {
    const { messages, documentContext } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 })
    }

    // Build conversation history
    const conversationHistory = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }))

    // Add document context if available
    let contextPrompt = SYSTEM_PROMPT
    if (documentContext) {
      contextPrompt += `\n\nThe user has uploaded a legal document with the following analysis:\n${JSON.stringify(documentContext, null, 2)}\n\nUse this context to provide more specific and relevant answers.`
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: contextPrompt }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood. I am LegalEase AI, your Indian legal adviser assistant. I will provide helpful, accurate information about Indian law while being clear that my responses are informational and not legal advice. How can I help you today?",
            },
          ],
        },
        ...conversationHistory,
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
    })

    const text = response.text || "I apologize, but I couldn't generate a response. Please try again."

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to generate response. Please try again." }, { status: 500 })
  }
}
