"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Paperclip, Mic, Bot, User, FileText, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  isLoading?: boolean
  attachments?: {
    name: string
    type: string
  }[]
}

export default function LegalChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI legal assistant. How can I help you with your legal questions today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim() && attachments.length === 0) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
      attachments: attachments.map((file) => ({
        name: file.name,
        type: file.type,
      })),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setAttachments([])
    setIsTyping(true)

    // Simulate AI response after a delay
    const loadingMessage: Message = {
      id: `loading-${Date.now()}`,
      role: "assistant",
      content: "",
      timestamp: new Date(),
      isLoading: true,
    }

    setMessages((prev) => [...prev, loadingMessage])

    // Generate AI response based on user input
    setTimeout(() => {
      setIsTyping(false)

      // Remove loading message
      setMessages((prev) => prev.filter((msg) => !msg.isLoading))

      let aiResponse = ""

      if (input.toLowerCase().includes("non-compete")) {
        aiResponse =
          "Non-compete clauses are generally enforceable if they're reasonable in scope, geography, and duration. However, some states like California have significant restrictions on their enforceability. Would you like me to analyze a specific non-compete clause for you?"
      } else if (input.toLowerCase().includes("contract") || attachments.length > 0) {
        aiResponse =
          "I see you're asking about contract analysis. Based on recent case law, contracts should have clear terms, consideration, and mutual assent to be enforceable. Common issues include ambiguous language, unconscionable terms, and lack of consideration. Would you like me to explain any specific aspect of contract law in more detail?"
      } else if (input.toLowerCase().includes("liability")) {
        aiResponse =
          "Liability limitation clauses are generally enforceable, but courts may invalidate them in cases of gross negligence, willful misconduct, or fraud. Recent precedents suggest including specific carve-outs for these scenarios to strengthen enforceability. Would you like to see some example language for a robust liability limitation clause?"
      } else {
        aiResponse =
          "Thank you for your question. Based on my analysis of recent legal precedents, this issue involves several complex factors. The courts have generally held that similar situations depend on the specific facts and jurisdiction. Would you like me to provide more specific information about any particular aspect of this legal question?"
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setAttachments((prev) => [...prev, ...newFiles])
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-3xl font-bold tracking-tight">AI Legal Assistant</h1>
          <p className="text-muted-foreground">
            Ask legal questions and get AI-powered insights based on case law and legal precedents.
          </p>
        </div>

        <Card className="flex-1 flex flex-col overflow-hidden">
          <CardHeader className="border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">Legal AI Assistant</CardTitle>
                <CardDescription className="text-xs">Powered by advanced legal AI</CardDescription>
              </div>
              <Badge variant="outline" className="ml-auto">
                Online
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-8 w-8 mt-0.5 flex-shrink-0">
                      {message.role === "assistant" ? (
                        <>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </>
                      ) : (
                        <>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </>
                      )}
                    </Avatar>

                    <div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {message.isLoading ? (
                          <div className="flex items-center justify-center h-6">
                            <LoadingSpinner size="sm" className="text-muted-foreground" />
                          </div>
                        ) : (
                          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                        )}

                        {message.attachments && message.attachments.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {message.attachments.map((attachment, index) => (
                              <div key={index} className="flex items-center gap-2 rounded bg-background/50 p-2 text-xs">
                                <FileText className="h-4 w-4" />
                                <span className="flex-1 truncate">{attachment.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <CardFooter className="border-t p-4">
            {attachments.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs">
                    <FileText className="h-3 w-3" />
                    <span className="max-w-[150px] truncate">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 rounded-full"
                      onClick={() => removeAttachment(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex w-full items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0" onClick={triggerFileInput}>
                      <Paperclip className="h-4 w-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Attach document</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} multiple />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Mic className="h-4 w-4" />
                      <span className="sr-only">Voice input</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Voice input</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="relative flex-1">
                <Input
                  placeholder="Type your legal question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pr-10"
                />
              </div>

              <Button className="shrink-0" onClick={handleSend} disabled={!input.trim() && attachments.length === 0}>
                <Send className="mr-2 h-4 w-4" />
                Send
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}
