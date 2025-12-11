"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Scale, Shield, Lock, Trash2, Clock, Eye, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All document processing uses military-grade encryption to protect your data during analysis.",
    },
    {
      icon: Trash2,
      title: "Auto-Delete Policy",
      description:
        "Your documents are automatically deleted within 10 minutes of analysis completion. We retain nothing.",
    },
    {
      icon: Server,
      title: "No Server Storage",
      description:
        "We never store your documents on our servers. All processing happens in real-time and is immediately discarded.",
    },
    {
      icon: Eye,
      title: "No Third-Party Access",
      description: "Your documents are never shared with third parties, advertisers, or any external entities.",
    },
    {
      icon: Shield,
      title: "Local Storage Only",
      description: "Saved cases are stored only on your device's local storage. We have no access to this data.",
    },
    {
      icon: Clock,
      title: "Transparent Processing",
      description: "You can see exactly what our AI is doing with your document in real-time during analysis.",
    },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center">
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
              <span className="font-bold">LegalEase AI</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 rounded-2xl bg-accent/10 items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Privacy & Transparency</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is our top priority. We believe in complete transparency about how we handle your data.
            </p>
          </div>

          {/* Privacy Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {privacyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Detailed Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Our Commitment to You</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <h3>Data Collection</h3>
              <p>
                We collect only the minimum data necessary to provide our service. When you upload a document, it is
                processed in real-time and immediately deleted after analysis. We do not retain copies of your
                documents.
              </p>

              <h3>How We Use Your Data</h3>
              <p>
                Your document is analyzed solely for the purpose of providing you with legal insights. We use AI to
                extract relevant information and match it against legal databases. This process happens in real-time and
                no human ever sees your document.
              </p>

              <h3>Data Storage</h3>
              <p>
                We use a zero-storage policy for uploaded documents. Any "saved cases" are stored exclusively in your
                browser's local storage on your device. We have no access to this data.
              </p>

              <h3>Third-Party Services</h3>
              <p>
                We do not share your documents or personal information with any third parties. Our AI processing is done
                internally and does not involve external services that could access your data.
              </p>

              <h3>Your Rights</h3>
              <p>
                Since we don't store your data, there's nothing to delete. Your "saved cases" in local storage can be
                cleared by you at any time through your browser settings.
              </p>

              <h3>Contact Us</h3>
              <p>If you have any questions about our privacy practices, please contact us at privacy@legalease.ai</p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
