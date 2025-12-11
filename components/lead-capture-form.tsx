"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Check } from "lucide-react"

export function LeadCaptureForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit this to your API
    setTimeout(() => {
      setSubmitted(true)
    }, 500)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/10 p-8 rounded-lg border border-primary/20 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
          <Check className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank you for your interest!</h3>
        <p className="text-muted-foreground">We'll be in touch shortly to get you started with your free trial.</p>
      </motion.div>
    )
  }

  return (
    <motion.form onSubmit={handleSubmit} className="bg-background rounded-lg border p-6 shadow-sm max-w-md mx-auto">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full gap-2">
          Start Your Free Trial <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          By signing up, you agree to our{" "}
          <a href="#" className="underline underline-offset-2 hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-2 hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </motion.form>
  )
}
