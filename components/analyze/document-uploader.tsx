"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Upload, Camera, FileText, ImageIcon, AlertCircle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface DocumentUploaderProps {
  onUpload: (file: File) => void
}

export function DocumentUploader({ onUpload }: DocumentUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    setError(null)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      validateAndUpload(files[0])
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const files = e.target.files
    if (files && files.length > 0) {
      validateAndUpload(files[0])
    }
  }, [])

  const validateAndUpload = (file: File) => {
    const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"]
    if (!validTypes.includes(file.type)) {
      setError("Please upload a PDF, JPG, or PNG file")
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB")
      return
    }
    onUpload(file)
  }

  const tips = [
    "Ensure the document is clear and readable",
    "Full page scans work best for OCR",
    "Avoid blurry or cropped images",
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Upload Your Document</h1>
        <p className="text-muted-foreground text-lg">Get instant AI-powered analysis of any legal document</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Card className="border-2">
          <CardContent className="p-8">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
                isDragging
                  ? "border-primary bg-primary/5 scale-[1.02]"
                  : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              <motion.div
                animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
                className="mb-6 h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center"
              >
                <Upload
                  className={`h-10 w-10 transition-colors ${isDragging ? "text-primary" : "text-muted-foreground"}`}
                />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">
                {isDragging ? "Drop your file here" : "Drag & drop your document"}
              </h3>
              <p className="text-muted-foreground mb-6">or click below to browse files</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gap-2" onClick={() => document.getElementById("file-upload")?.click()}>
                  <FileText className="h-5 w-5" />
                  Choose File
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent"
                  onClick={() => document.getElementById("camera-upload")?.click()}
                >
                  <Camera className="h-5 w-5" />
                  Take Photo
                </Button>
              </div>

              <input
                id="file-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileSelect}
              />
              <input
                id="camera-upload"
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileSelect}
              />

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <FileText className="h-4 w-4" />
                  <span>PDF</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4" />
                  <span>JPG</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4" />
                  <span>PNG</span>
                </div>
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-6"
      >
        <Card className="bg-accent/5 border-accent/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Info className="h-4 w-4 text-accent" />
              Tips for Better Results
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-2">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Security Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-6 text-center text-sm text-muted-foreground"
      >
        <p className="flex items-center justify-center gap-2">
          <CheckCircle className="h-4 w-4 text-accent" />
          Document auto-deletes after analysis. Your privacy is protected.
        </p>
      </motion.div>
    </div>
  )
}
