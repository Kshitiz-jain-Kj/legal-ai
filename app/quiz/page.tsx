"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  GraduationCap,
  ChevronRight,
  Clock,
  Trophy,
  Star,
  MapPin,
  BookOpen,
  Target,
  Zap,
  Shield,
  ArrowLeft,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { quizPacks, badges, type QuizResult } from "@/lib/quiz-data"
import { MobileNav } from "@/components/mobile-nav"

export default function QuizPage() {
  const [selectedState, setSelectedState] = useState<string>("all")
  const [completedQuizzes, setCompletedQuizzes] = useState<QuizResult[]>([])
  const [earnedBadges, setEarnedBadges] = useState<string[]>([])
  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem("quiz-progress")
    if (saved) {
      const progress = JSON.parse(saved)
      setCompletedQuizzes(progress.completedQuizzes || [])
      setEarnedBadges(progress.earnedBadges || [])
      setTotalPoints(progress.totalPoints || 0)
    }
  }, [])

  const filteredPacks = selectedState === "all" ? quizPacks : quizPacks.filter((pack) => pack.state === selectedState)

  const states = [...new Set(quizPacks.map((pack) => pack.state))]

  const getPackStatus = (packId: string) => {
    const result = completedQuizzes.find((q) => q.packId === packId)
    if (result) {
      return {
        completed: true,
        score: result.score,
        total: result.totalQuestions,
        percentage: Math.round((result.score / result.totalQuestions) * 100),
      }
    }
    return { completed: false }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return <BookOpen className="h-4 w-4" />
      case "intermediate":
        return <Target className="h-4 w-4" />
      case "scenario":
        return <Zap className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "intermediate":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "scenario":
        return "bg-orange-100 text-orange-700 border-orange-200"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="font-bold">{totalPoints} pts</span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Legal Knowledge Quiz</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test and improve your understanding of Indian laws, traffic rules, and legal procedures. All questions are
            based on verified legal sources.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">{completedQuizzes.length}</div>
              <div className="text-sm text-emerald-700">Quizzes Completed</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{totalPoints}</div>
              <div className="text-sm text-blue-700">Total Points</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">{earnedBadges.length}</div>
              <div className="text-sm text-amber-700">Badges Earned</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {completedQuizzes.length > 0
                  ? Math.round(
                      completedQuizzes.reduce((acc, q) => acc + (q.score / q.totalQuestions) * 100, 0) /
                        completedQuizzes.length,
                    )
                  : 0}
                %
              </div>
              <div className="text-sm text-purple-700">Avg. Score</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Badges Section */}
        {earnedBadges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Your Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              {badges
                .filter((b) => earnedBadges.includes(b.id))
                .map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 border border-amber-200"
                  >
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-sm font-medium text-amber-800">{badge.name}</span>
                  </div>
                ))}
            </div>
          </motion.div>
        )}

        {/* State Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6"
        >
          <h2 className="text-xl font-semibold">Choose a Quiz Pack</h2>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Quiz Packs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPacks.map((pack, index) => {
              const status = getPackStatus(pack.id)
              return (
                <motion.div
                  key={pack.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/quiz/${pack.id}`}>
                    <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${pack.color}`} />
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="text-3xl mb-2">{pack.icon}</div>
                          {status.completed && (
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                              <Trophy className="h-3 w-3 mr-1" />
                              {status.percentage}%
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {pack.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{pack.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className={getDifficultyColor(pack.difficulty)}>
                            {getDifficultyIcon(pack.difficulty)}
                            <span className="ml-1 capitalize">{pack.difficulty}</span>
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="h-3 w-3 mr-1" />
                            {pack.state}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {pack.questionsCount} questions
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {pack.estimatedTime}
                          </div>
                        </div>
                        {status.completed && (
                          <div className="mt-3">
                            <Progress value={status.percentage} className="h-2" />
                          </div>
                        )}
                        <Button
                          className="w-full mt-4 gap-2 group-hover:bg-primary group-hover:text-primary-foreground"
                          variant={status.completed ? "outline" : "default"}
                        >
                          {status.completed ? "Retake Quiz" : "Start Quiz"}
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Privacy Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-4 rounded-lg bg-muted/50 border flex items-start gap-3"
        >
          <Shield className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium">Your Privacy Matters</p>
            <p className="text-sm text-muted-foreground">
              Quiz results are stored locally on your device only. No data is transmitted to any server unless you
              explicitly choose to share your certificate.
            </p>
          </div>
        </motion.div>

        {/* Admin Link */}
        <div className="mt-6 text-center">
          <Link href="/quiz/admin">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Lock className="h-3 w-3 mr-1" />
              Admin Panel
            </Button>
          </Link>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
