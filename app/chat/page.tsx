"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Send, ArrowLeft, Bot, User, Scale, Info, Loader2, Sparkles } from "lucide-react"
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
  "What does Section 279 IPC mean?",
  "How do I respond to a traffic challan?",
  "What are my rights if stopped by police?",
  "Explain bail procedures in India",
  "What is the Motor Vehicles Act 2019?",
  "How to file a consumer complaint?",
]

function parseFormattedText(text: string) {
  // Split by **text** pattern
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Namaste! I'm your AI legal assistant powered by advanced AI. I can help you understand Indian law, traffic violations, legal procedures, and your rights. Ask me anything about:\n\n• **Traffic Laws** - Challans, fines, Motor Vehicles Act\n• **Criminal Law** - IPC sections, FIR, bail\n• **Civil Matters** - Contracts, property, consumer rights\n• **Legal Procedures** - Court processes, documentation\n\nHow can I assist you today?",
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

  const handleSend = async () => {
    if (!input.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      // Prepare messages for API (exclude the initial greeting)
      const apiMessages = [...messages.slice(1), userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I apologize, but I encountered an error processing your request. Please try again or rephrase your question.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/50 to-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Scale className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold hidden sm:block">Legal AI Assistant</span>
            </div>
          </div>

          <Badge variant="outline" className="gap-1.5 border-accent/50">
            <Sparkles className="h-3 w-3 text-accent" />
            Powered by Gemini
          </Badge>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 container py-4 md:py-8 flex flex-col max-w-3xl">
        <Card className="flex-1 flex flex-col overflow-hidden shadow-lg border-0 bg-background/80 backdrop-blur">
          {/* Chat Header */}
          <CardHeader className="border-b py-4 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Bot className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-lg">LegalEase AI Assistant</h2>
                <p className="text-sm text-muted-foreground">Your expert guide to Indian law</p>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px]">
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
                  <Avatar
                    className={`h-8 w-8 shrink-0 ${message.role === "assistant" ? "ring-2 ring-primary/20" : ""}`}
                  >
                    <AvatarFallback
                      className={
                        message.role === "assistant"
                          ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                          : "bg-muted"
                      }
                    >
                      {message.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/80 border border-border/50"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">
                      {parseFormattedText(message.content)}
                    </div>
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
                <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted/80 border border-border/50 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Analyzing your question...</span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-3 border-t bg-muted/30">
              <p className="text-xs text-muted-foreground mb-2 pt-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="text-xs bg-background hover:bg-primary/5 hover:border-primary/50 transition-colors"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <CardFooter className="border-t p-4 bg-background">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex w-full gap-2"
            >
              <Input
                placeholder="Ask any legal question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-muted/50 border-muted-foreground/20 focus:border-primary"
                disabled={isTyping}
              />
              <Button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>

        {/* Disclaimer */}
        <Alert className="mt-4 bg-amber-50/50 border-amber-200/50" variant="default">
          <Info className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-xs text-amber-800">
            This AI assistant provides informational guidance based on Indian law and does not constitute legal advice.
            For complex legal matters or specific cases, please consult a qualified advocate.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
