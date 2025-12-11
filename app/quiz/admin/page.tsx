"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Plus, Edit, Trash2, Save, X, BookOpen, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { quizPacks, quizQuestions, type QuizQuestion } from "@/lib/quiz-data"

export default function QuizAdminPage() {
  const [selectedPack, setSelectedPack] = useState<string>("")
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [editingQuestion, setEditingQuestion] = useState<QuizQuestion | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [customQuestions, setCustomQuestions] = useState<Record<string, QuizQuestion[]>>({})

  // Load custom questions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("custom-quiz-questions")
    if (saved) {
      setCustomQuestions(JSON.parse(saved))
    }
  }, [])

  // Update questions when pack changes
  useEffect(() => {
    if (selectedPack) {
      const baseQuestions = quizQuestions[selectedPack] || []
      const custom = customQuestions[selectedPack] || []
      setQuestions([...baseQuestions, ...custom])
    }
  }, [selectedPack, customQuestions])

  const handleSaveQuestion = (question: QuizQuestion) => {
    const updated = { ...customQuestions }
    if (!updated[selectedPack]) {
      updated[selectedPack] = []
    }

    const existingIndex = updated[selectedPack].findIndex((q) => q.id === question.id)
    if (existingIndex >= 0) {
      updated[selectedPack][existingIndex] = question
    } else {
      updated[selectedPack].push(question)
    }

    setCustomQuestions(updated)
    localStorage.setItem("custom-quiz-questions", JSON.stringify(updated))
    setEditingQuestion(null)
    setIsAddingNew(false)
  }

  const handleDeleteQuestion = (questionId: string) => {
    const updated = { ...customQuestions }
    if (updated[selectedPack]) {
      updated[selectedPack] = updated[selectedPack].filter((q) => q.id !== questionId)
      setCustomQuestions(updated)
      localStorage.setItem("custom-quiz-questions", JSON.stringify(updated))
    }
  }

  const pack = quizPacks.find((p) => p.id === selectedPack)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/quiz" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Quizzes</span>
          </Link>
          <Badge variant="secondary" className="gap-1">
            <Lock className="h-3 w-3" />
            Admin Panel
          </Badge>
        </div>
      </header>

      <main className="container py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Quiz Question Manager
              </CardTitle>
              <CardDescription>
                Add, edit, or remove quiz questions. Custom questions are stored locally.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Select Quiz Pack</Label>
                  <Select value={selectedPack} onValueChange={setSelectedPack}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a quiz pack to manage" />
                    </SelectTrigger>
                    <SelectContent>
                      {quizPacks.map((pack) => (
                        <SelectItem key={pack.id} value={pack.id}>
                          {pack.icon} {pack.title} - {pack.state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedPack && (
                  <Button
                    onClick={() => {
                      setIsAddingNew(true)
                      setEditingQuestion({
                        id: `custom-${Date.now()}`,
                        question: "",
                        options: ["", "", "", ""],
                        correctAnswer: 0,
                        explanation: "",
                        reference: { act: "", section: "", source: "" },
                        difficulty: pack?.difficulty || "beginner",
                      })
                    }}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add New Question
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Questions List */}
          {selectedPack && questions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Questions ({questions.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {questions.map((question, index) => {
                  const isCustom = customQuestions[selectedPack]?.some((q) => q.id === question.id)
                  return (
                    <div
                      key={question.id}
                      className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              Q{index + 1}
                            </Badge>
                            {isCustom && (
                              <Badge variant="secondary" className="text-xs">
                                Custom
                              </Badge>
                            )}
                          </div>
                          <p className="font-medium line-clamp-2">{question.question}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {question.reference.act} - {question.reference.section}
                          </p>
                        </div>
                        {isCustom && (
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setEditingQuestion(question)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive hover:text-destructive"
                              onClick={() => handleDeleteQuestion(question.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          )}

          {/* Edit/Add Question Dialog */}
          <Dialog
            open={!!editingQuestion}
            onOpenChange={() => {
              setEditingQuestion(null)
              setIsAddingNew(false)
            }}
          >
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{isAddingNew ? "Add New Question" : "Edit Question"}</DialogTitle>
                <DialogDescription>Fill in all fields to create a valid quiz question.</DialogDescription>
              </DialogHeader>

              {editingQuestion && (
                <div className="space-y-4">
                  <div>
                    <Label>Question</Label>
                    <Textarea
                      value={editingQuestion.question}
                      onChange={(e) =>
                        setEditingQuestion({
                          ...editingQuestion,
                          question: e.target.value,
                        })
                      }
                      placeholder="Enter the question..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Options (mark correct answer)</Label>
                    {editingQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="correctAnswer"
                          checked={editingQuestion.correctAnswer === index}
                          onChange={() =>
                            setEditingQuestion({
                              ...editingQuestion,
                              correctAnswer: index,
                            })
                          }
                          className="h-4 w-4"
                        />
                        <Input
                          value={option}
                          onChange={(e) => {
                            const newOptions = [...editingQuestion.options]
                            newOptions[index] = e.target.value
                            setEditingQuestion({
                              ...editingQuestion,
                              options: newOptions,
                            })
                          }}
                          placeholder={`Option ${String.fromCharCode(65 + index)}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <Label>Explanation</Label>
                    <Textarea
                      value={editingQuestion.explanation}
                      onChange={(e) =>
                        setEditingQuestion({
                          ...editingQuestion,
                          explanation: e.target.value,
                        })
                      }
                      placeholder="Explain why this answer is correct..."
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label>Act/Law</Label>
                      <Input
                        value={editingQuestion.reference.act}
                        onChange={(e) =>
                          setEditingQuestion({
                            ...editingQuestion,
                            reference: { ...editingQuestion.reference, act: e.target.value },
                          })
                        }
                        placeholder="e.g., Motor Vehicles Act"
                      />
                    </div>
                    <div>
                      <Label>Section</Label>
                      <Input
                        value={editingQuestion.reference.section}
                        onChange={(e) =>
                          setEditingQuestion({
                            ...editingQuestion,
                            reference: { ...editingQuestion.reference, section: e.target.value },
                          })
                        }
                        placeholder="e.g., Section 185"
                      />
                    </div>
                    <div>
                      <Label>Source</Label>
                      <Input
                        value={editingQuestion.reference.source}
                        onChange={(e) =>
                          setEditingQuestion({
                            ...editingQuestion,
                            reference: { ...editingQuestion.reference, source: e.target.value },
                          })
                        }
                        placeholder="e.g., Central Rules"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => {
                        setEditingQuestion(null)
                        setIsAddingNew(false)
                      }}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => handleSaveQuestion(editingQuestion)}
                      disabled={
                        !editingQuestion.question ||
                        editingQuestion.options.some((o) => !o) ||
                        !editingQuestion.explanation
                      }
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Question
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </motion.div>
      </main>
    </div>
  )
}
