"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, Send, Phone, Mail, CheckCircle, FileText, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import type { Lawyer } from "@/lib/lawyers-database"

interface LawyerContactModalProps {
  lawyer: Lawyer | null
  open: boolean
  onClose: () => void
}

export function LawyerContactModal({ lawyer, open, onClose }: LawyerContactModalProps) {
  const [step, setStep] = useState<"form" | "consent" | "success">("form")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    includeDocumentSummary: false,
    attachDocument: false,
  })
  const [consent, setConsent] = useState({
    shareContact: false,
    shareDocument: false,
    agreeTerms: false,
  })
  const [sending, setSending] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("consent")
  }

  const handleSendMessage = async () => {
    setSending(true)
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSending(false)
    setStep("success")
  }

  const handleClose = () => {
    setStep("form")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      includeDocumentSummary: false,
      attachDocument: false,
    })
    setConsent({
      shareContact: false,
      shareDocument: false,
      agreeTerms: false,
    })
    onClose()
  }

  if (!lawyer) return null

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Contact {lawyer.name}
                </DialogTitle>
                <DialogDescription>
                  Send a message to this lawyer. Your information will be shared only with your explicit consent.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your legal matter"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your situation and how the lawyer can help..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <p className="text-sm font-medium">Optional: Include Document Information</p>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="includeSummary"
                      checked={formData.includeDocumentSummary}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, includeDocumentSummary: checked as boolean })
                      }
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="includeSummary" className="text-sm cursor-pointer">
                        Include AI-generated document summary
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Share the summary from your analyzed document (if any)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button type="submit">Continue</Button>
                </div>
              </form>
            </motion.div>
          )}

          {step === "consent" && (
            <motion.div
              key="consent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy & Consent
                </DialogTitle>
                <DialogDescription>
                  Please review and confirm what information you want to share with {lawyer.name}.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                {/* Info Summary */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <h4 className="font-medium text-sm">Information to be shared:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.email}</span>
                    </div>
                  </div>
                  {formData.includeDocumentSummary && (
                    <div className="flex items-center gap-2 text-sm pt-2 border-t">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Document summary will be included</span>
                    </div>
                  )}
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="shareContact"
                      checked={consent.shareContact}
                      onCheckedChange={(checked) => setConsent({ ...consent, shareContact: checked as boolean })}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="shareContact" className="text-sm cursor-pointer">
                        I consent to share my contact information with {lawyer.name} *
                      </Label>
                    </div>
                  </div>

                  {formData.includeDocumentSummary && (
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="shareDocument"
                        checked={consent.shareDocument}
                        onCheckedChange={(checked) => setConsent({ ...consent, shareDocument: checked as boolean })}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="shareDocument" className="text-sm cursor-pointer">
                          I consent to share my document summary *
                        </Label>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={consent.agreeTerms}
                      onCheckedChange={(checked) => setConsent({ ...consent, agreeTerms: checked as boolean })}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="agreeTerms" className="text-sm cursor-pointer">
                        I understand that LegalEase only connects me with lawyers and does not provide legal
                        representation *
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Privacy Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium">Your privacy is protected</p>
                      <p className="text-xs mt-1">
                        Your message will be sent directly to the lawyer via email. We do not store your documents on
                        our servers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep("form")}>
                    Back
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    disabled={
                      !consent.shareContact ||
                      !consent.agreeTerms ||
                      (formData.includeDocumentSummary && !consent.shareDocument) ||
                      sending
                    }
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="mr-2"
                        >
                          <Send className="h-4 w-4" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="h-8 w-8 text-green-600" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
              <p className="text-muted-foreground mb-6">
                Your message has been sent to {lawyer.name}. They will contact you soon via phone or email.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-medium text-sm mb-2">What happens next?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• The lawyer will review your message</li>
                  <li>• Expect a response within 24-48 hours</li>
                  <li>• Check your email and phone for their reply</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="outline">
                  <a href={`tel:${lawyer.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call Directly
                  </a>
                </Button>
                <Button onClick={handleClose}>Done</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
