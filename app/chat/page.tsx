"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Send, ArrowLeft, Bot, User, Scale, Info, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const suggestedQuestions = [
  "What does Section 279 mean?",
  "How much is the fine for my violation?",
  "Can I contest this challan?",
  "What happens if I don't pay on time?",
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AI legal assistant. I've analyzed your traffic violation notice. How can I help you understand it better?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("section 279") || input.toLowerCase().includes("279")) {
        response =
          "Section 279 of the Motor Vehicles Act deals with rash driving or riding on a public way. In simple terms, it means driving in a manner that could endanger human life or cause injury to others.\n\n**Key points:**\n• First offense: Fine up to Rs. 1,000\n• Second offense: Fine up to Rs. 2,000 or imprisonment up to 6 months\n• In Maharashtra, first-time offenders can pay a compounding fee of Rs. 500"
      } else if (input.toLowerCase().includes("fine") || input.toLowerCase().includes("pay")) {
        response =
          "Based on your challan, the fine amount depends on:\n\n• **First offense**: Rs. 500-1,000\n• **Second offense**: Rs. 2,000 or more\n\nYou can pay online through the Maharashtra Traffic Police portal or visit the nearest traffic police station. Payment must be made within 15 days to avoid additional penalties."
      } else if (input.toLowerCase().includes("contest") || input.toLowerCase().includes("challenge")) {
        response =
          "Yes, you can contest this challan if you believe it was issued incorrectly.\n\n**Steps to contest:**\n1. Appear at the traffic court on the mentioned date\n2. Bring all relevant documents (license, RC, insurance)\n3. Present your case to the magistrate\n4. Provide any evidence (dashcam footage, witnesses)\n\nNote: Contesting requires appearing in person. For minor violations, paying the fine is often more practical."
      } else {
        response =
          "I understand you have questions about your legal document. Here's what I can help you with:\n\n• Explaining specific legal sections\n• Understanding penalties and fines\n• Outlining your options (pay vs contest)\n• Clarifying timelines and deadlines\n\nFeel free to ask anything specific about your traffic violation notice!"
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/analyze">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Results
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Scale className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold hidden sm:block">AI Assistant</span>
            </div>
          </div>

          <Badge variant="outline" className="gap-1.5">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Online
          </Badge>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 container py-4 md:py-8 flex flex-col max-w-3xl">
        <Card className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <CardHeader className="border-b py-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-primary">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">Legal AI Assistant</h2>
                <p className="text-sm text-muted-foreground">Ask questions about your document</p>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className={`h-8 w-8 shrink-0 ${message.role === "assistant" ? "bg-primary" : "bg-muted"}`}>
                    <AvatarFallback
                      className={message.role === "assistant" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {message.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                    <div
                      className={`text-xs mt-2 ${
                        message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                <Avatar className="h-8 w-8 bg-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="text-xs bg-transparent"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <CardFooter className="border-t p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex w-full gap-2"
            >
              <Input
                placeholder="Ask a question about your document..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={!input.trim() || isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>

        {/* Disclaimer */}
        <Alert className="mt-4" variant="default">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-xs">
            This AI assistant provides informational guidance only and does not constitute legal advice. For complex
            legal matters, please consult a qualified attorney.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
