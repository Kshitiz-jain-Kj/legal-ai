"use client"

import { useState, useEffect, useCallback } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  HelpCircle,
  ChevronRight,
  BookOpen,
  Trophy,
  RotateCcw,
  Home,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { quizPacks, quizQuestions, type QuizResult } from "@/lib/quiz-data"

export default function QuizPlayPage() {
  const params = useParams()
  const router = useRouter()
  const packId = params.packId as string

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [answers, setAnswers] = useState<{ questionId: string; selectedAnswer: number; isCorrect: boolean }[]>([])
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false)
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([])
  const [quizComplete, setQuizComplete] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)

  const pack = quizPacks.find((p) => p.id === packId)
  const questions = quizQuestions[packId] || []
  const currentQuestion = questions[currentQuestionIndex]

  // Timer
  useEffect(() => {
    if (!quizComplete) {
      const timer = setInterval(() => setTimeElapsed((t) => t + 1), 1000)
      return () => clearInterval(timer)
    }
  }, [quizComplete])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (optionIndex: number) => {
    if (showFeedback || eliminatedOptions.includes(optionIndex)) return
    setSelectedAnswer(optionIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedAnswer,
        isCorrect,
      },
    ])
    setShowFeedback(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setEliminatedOptions([])
    } else {
      finishQuiz()
    }
  }

  const handleFiftyFifty = () => {
    if (fiftyFiftyUsed || showFeedback) return

    const correctAnswer = currentQuestion.correctAnswer
    const wrongAnswers = [0, 1, 2, 3].filter((i) => i !== correctAnswer)
    const toEliminate = wrongAnswers.sort(() => Math.random() - 0.5).slice(0, 2)

    setEliminatedOptions(toEliminate)
    setFiftyFiftyUsed(true)
  }

  const finishQuiz = useCallback(() => {
    const score =
      answers.filter((a) => a.isCorrect).length + (selectedAnswer === currentQuestion?.correctAnswer ? 1 : 0)
    const result: QuizResult = {
      packId,
      state: pack?.state || "",
      score,
      totalQuestions: questions.length,
      completedAt: new Date().toISOString(),
      answers: [
        ...answers,
        {
          questionId: currentQuestion?.id || "",
          selectedAnswer: selectedAnswer || 0,
          isCorrect: selectedAnswer === currentQuestion?.correctAnswer,
        },
      ],
    }

    // Save to localStorage
    const saved = localStorage.getItem("quiz-progress")
    const progress = saved ? JSON.parse(saved) : { completedQuizzes: [], earnedBadges: [], totalPoints: 0 }

    // Update or add quiz result
    const existingIndex = progress.completedQuizzes.findIndex((q: QuizResult) => q.packId === packId)
    if (existingIndex >= 0) {
      progress.completedQuizzes[existingIndex] = result
    } else {
      progress.completedQuizzes.push(result)
    }

    // Calculate points (10 per correct answer)
    progress.totalPoints = progress.completedQuizzes.reduce((acc: number, q: QuizResult) => acc + q.score * 10, 0)

    // Check for badges
    if (!progress.earnedBadges.includes("first-quiz") && progress.completedQuizzes.length >= 1) {
      progress.earnedBadges.push("first-quiz")
    }
    if (!progress.earnedBadges.includes("perfect-score") && score === questions.length) {
      progress.earnedBadges.push("perfect-score")
    }
    if (!progress.earnedBadges.includes("streak-3") && progress.completedQuizzes.length >= 3) {
      progress.earnedBadges.push("streak-3")
    }

    localStorage.setItem("quiz-progress", JSON.stringify(progress))
    setQuizComplete(true)
  }, [answers, currentQuestion, pack?.state, packId, questions.length, selectedAnswer])

  if (!pack || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Quiz Not Found</h2>
            <p className="text-muted-foreground mb-4">This quiz pack is not available yet.</p>
            <Link href="/quiz">
              <Button>Back to Quizzes</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Scorecard View
  if (quizComplete) {
    const finalScore = answers.filter((a) => a.isCorrect).length
    const percentage = Math.round((finalScore / questions.length) * 100)

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            {/* Score Card */}
            <Card className="overflow-hidden">
              <div
                className={`h-2 ${percentage >= 70 ? "bg-emerald-500" : percentage >= 50 ? "bg-amber-500" : "bg-red-500"}`}
              />
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4">
                  {percentage >= 70 ? (
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Trophy className="h-10 w-10 text-emerald-600" />
                    </div>
                  ) : percentage >= 50 ? (
                    <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
                      <Sparkles className="h-10 w-10 text-amber-600" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-blue-600" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-2xl">
                  {percentage >= 70 ? "Excellent!" : percentage >= 50 ? "Good Effort!" : "Keep Learning!"}
                </CardTitle>
                <CardDescription>You completed the {pack.title} quiz</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold mb-2">{percentage}%</div>
                <p className="text-muted-foreground mb-4">
                  {finalScore} out of {questions.length} correct
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {formatTime(timeElapsed)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />+{finalScore * 10} points
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Answer Review */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Answer Review</CardTitle>
                <CardDescription>Review your answers and learn from explanations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {questions.map((question, index) => {
                  const answer = answers[index]
                  const isCorrect = answer?.isCorrect
                  return (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg border ${
                        isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium mb-2">
                            Q{index + 1}: {question.question}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm mb-2">
                              <span className="text-red-600">Your answer:</span>{" "}
                              {question.options[answer?.selectedAnswer || 0]}
                            </p>
                          )}
                          <p className="text-sm text-emerald-700 mb-2">
                            <span className="font-medium">Correct:</span> {question.options[question.correctAnswer]}
                          </p>
                          <p className="text-sm text-muted-foreground">{question.explanation}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {question.reference.act}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {question.reference.section}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex-1 gap-2 bg-transparent"
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setSelectedAnswer(null)
                  setShowFeedback(false)
                  setAnswers([])
                  setFiftyFiftyUsed(false)
                  setEliminatedOptions([])
                  setQuizComplete(false)
                  setTimeElapsed(0)
                }}
              >
                <RotateCcw className="h-4 w-4" />
                Retake Quiz
              </Button>
              <Link href="/quiz" className="flex-1">
                <Button className="w-full gap-2">
                  <Home className="h-4 w-4" />
                  Back to Quizzes
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Play View
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/quiz" className="flex items-center gap-2 text-sm">
            <ArrowLeft className="h-4 w-4" />
            Exit Quiz
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4" />
              {formatTime(timeElapsed)}
            </div>
            <Badge variant="outline">
              {currentQuestionIndex + 1} / {questions.length}
            </Badge>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full">
        <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="h-1 rounded-none" />
      </div>

      <main className="container max-w-2xl py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Card */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="capitalize">
                    {currentQuestion.difficulty}
                  </Badge>
                  <Badge variant="outline">{pack.state}</Badge>
                </div>
                <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isEliminated = eliminatedOptions.includes(index)
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === currentQuestion.correctAnswer
                    const showCorrect = showFeedback && isCorrect
                    const showWrong = showFeedback && isSelected && !isCorrect

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback || isEliminated}
                        className={`w-full p-4 rounded-lg border text-left transition-all ${
                          isEliminated
                            ? "opacity-30 cursor-not-allowed bg-muted"
                            : showCorrect
                              ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                              : showWrong
                                ? "bg-red-50 border-red-500 text-red-900"
                                : isSelected
                                  ? "bg-primary/10 border-primary"
                                  : "hover:bg-muted/50 hover:border-primary/50"
                        }`}
                        whileHover={!showFeedback && !isEliminated ? { scale: 1.01 } : {}}
                        whileTap={!showFeedback && !isEliminated ? { scale: 0.99 } : {}}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              showCorrect
                                ? "bg-emerald-500 text-white"
                                : showWrong
                                  ? "bg-red-500 text-white"
                                  : isSelected
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted"
                            }`}
                          >
                            {showCorrect ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : showWrong ? (
                              <XCircle className="h-4 w-4" />
                            ) : (
                              String.fromCharCode(65 + index)
                            )}
                          </div>
                          <span className={isEliminated ? "line-through" : ""}>{option}</span>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>

                {/* 50:50 Help */}
                {!showFeedback && (
                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleFiftyFifty}
                      disabled={fiftyFiftyUsed}
                      className="gap-2 bg-transparent"
                    >
                      <HelpCircle className="h-4 w-4" />
                      50:50 {fiftyFiftyUsed && "(Used)"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Feedback Modal */}
            <Dialog open={showFeedback} onOpenChange={() => {}}>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        <span className="text-emerald-600">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span className="text-red-600">Incorrect</span>
                      </>
                    )}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>

                  <div className="p-3 rounded-lg bg-muted/50 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Legal Reference:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {currentQuestion.reference.act}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {currentQuestion.reference.section}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Source: {currentQuestion.reference.source}</p>
                  </div>

                  <Button onClick={handleNextQuestion} className="w-full gap-2">
                    {currentQuestionIndex < questions.length - 1 ? (
                      <>
                        Next Question
                        <ChevronRight className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        View Results
                        <Trophy className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Submit Button */}
            {!showFeedback && (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="w-full gap-2"
                size="lg"
              >
                Submit Answer
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
