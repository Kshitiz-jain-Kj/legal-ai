"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Info, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LoadingState } from "@/components/ui/loading-state"

export default function PredictiveAnalysis() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("risk")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsLoading(true)

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  // Mock data for risk assessment
  const riskFactors = [
    {
      name: "Contract Enforceability",
      score: 75,
      status: "medium",
      description: "Based on recent precedents, there's a moderate risk of certain clauses being challenged.",
    },
    {
      name: "Regulatory Compliance",
      score: 92,
      status: "low",
      description: "Your current practices align well with regulatory requirements in this jurisdiction.",
    },
    {
      name: "Liability Exposure",
      score: 45,
      status: "high",
      description: "Recent court decisions suggest increased scrutiny on liability limitations in similar contracts.",
    },
    {
      name: "Intellectual Property Protection",
      score: 88,
      status: "low",
      description: "Your IP clauses are well-structured and align with current legal standards.",
    },
    {
      name: "Data Privacy Compliance",
      score: 62,
      status: "medium",
      description: "Some provisions may need updating to fully comply with recent privacy law changes.",
    },
  ]

  // Mock data for strategy suggestions
  const strategySuggestions = [
    {
      title: "Revise Liability Clauses",
      priority: "high",
      description:
        "Consider adding specific exceptions for gross negligence and willful misconduct to your liability limitation clauses.",
      precedents: ["Wilson v. Tech Solutions (2019)", "Roberts v. Enterprise Systems (2022)"],
    },
    {
      title: "Update Data Processing Agreements",
      priority: "medium",
      description:
        "Recent regulatory changes require more specific language regarding data processing activities and user consent.",
      precedents: ["In re: Data Privacy Litigation (2021)"],
    },
    {
      title: "Strengthen IP Assignment Language",
      priority: "low",
      description:
        "While your current IP clauses are strong, adding specific language about work created outside of employment hours would further protect your interests.",
      precedents: ["Davis Corp v. Miller Inc (2020)"],
    },
  ]

  // Mock data for outcome predictions
  const outcomePredictions = [
    {
      scenario: "Contract Dispute Resolution",
      winProbability: 72,
      factors: ["Strong documentary evidence", "Clear breach of material terms", "Favorable jurisdiction"],
      challenges: ["Potential ambiguity in certain clauses", "Opposing party has strong industry reputation"],
    },
    {
      scenario: "Regulatory Investigation Defense",
      winProbability: 85,
      factors: ["Robust compliance program", "Proactive remediation efforts", "Similar cases resolved favorably"],
      challenges: ["Evolving regulatory landscape", "Potential for increased penalties"],
    },
    {
      scenario: "IP Infringement Claim",
      winProbability: 63,
      factors: ["Clear documentation of original work", "Established timeline of development"],
      challenges: ["Similar products in marketplace", "Potential prior art issues", "High cost of litigation"],
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Predictive Legal Analysis & Strategy</h1>
          <p className="text-muted-foreground">
            AI-powered risk predictions and legal strategy recommendations based on historical case data.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Case Analysis</CardTitle>
              <CardDescription>
                Enter your case details or search for a specific legal issue to get AI-powered predictions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="flex flex-col gap-4">
                <div className="relative">
                  <div className="flex">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Describe your legal issue or case details..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="ml-2">
                      Analyze
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Try: "Contract dispute with vendor over service quality" or "Potential IP infringement claim"
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {isLoading ? (
          <LoadingState
            title="Analyzing your case..."
            description="Our AI is evaluating risk factors and generating strategic recommendations"
          />
        ) : (
          <>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
                <TabsTrigger value="strategy">Strategy Suggestions</TabsTrigger>
                <TabsTrigger value="outcomes">Outcome Predictions</TabsTrigger>
              </TabsList>

              <TabsContent value="risk" className="mt-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Risk Assessment Dashboard</CardTitle>
                          <CardDescription>
                            AI evaluation of potential case risks based on legal history
                          </CardDescription>
                        </div>
                        <Button>
                          <Download className="mr-2 h-4 w-4" /> Export Report
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="mb-2 rounded-full bg-primary/10 p-2">
                              <BarChart3 className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">72%</div>
                              <div className="text-sm text-muted-foreground">Overall Success Probability</div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="mb-2 rounded-full bg-amber-500/10 p-2">
                              <AlertTriangle className="h-5 w-5 text-amber-500" />
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">3</div>
                              <div className="text-sm text-muted-foreground">Risk Factors Identified</div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="mb-2 rounded-full bg-green-500/10 p-2">
                              <TrendingUp className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">85%</div>
                              <div className="text-sm text-muted-foreground">Similar Case Success Rate</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-6">
                        <div className="text-lg font-semibold">Risk Factor Analysis</div>
                        <div className="space-y-4">
                          {riskFactors.map((factor, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{factor.name}</span>
                                  {factor.status === "high" ? (
                                    <Badge variant="destructive">High Risk</Badge>
                                  ) : factor.status === "medium" ? (
                                    <Badge variant="outline" className="border-amber-500 text-amber-500">
                                      Medium Risk
                                    </Badge>
                                  ) : (
                                    <Badge variant="secondary">Low Risk</Badge>
                                  )}
                                </div>
                                <span className="text-sm font-semibold">{factor.score}%</span>
                              </div>
                              <Progress
                                value={factor.score}
                                className={`h-2 ${
                                  factor.status === "high"
                                    ? "bg-muted [&>div]:bg-destructive"
                                    : factor.status === "medium"
                                      ? "bg-muted [&>div]:bg-amber-500"
                                      : "bg-muted [&>div]:bg-green-500"
                                }`}
                              />
                              <p className="text-sm text-muted-foreground">{factor.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="strategy" className="mt-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>AI-Driven Strategy Suggestions</CardTitle>
                          <CardDescription>Strategic recommendations based on similar case outcomes</CardDescription>
                        </div>
                        <Button>
                          <Download className="mr-2 h-4 w-4" /> Export Strategies
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {strategySuggestions.map((strategy, index) => (
                          <Card key={index} className="overflow-hidden">
                            <div
                              className={`h-1 w-full ${
                                strategy.priority === "high"
                                  ? "bg-destructive"
                                  : strategy.priority === "medium"
                                    ? "bg-amber-500"
                                    : "bg-green-500"
                              }`}
                            />
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold">{strategy.title}</h3>
                                  <Badge
                                    variant={
                                      strategy.priority === "high"
                                        ? "destructive"
                                        : strategy.priority === "medium"
                                          ? "outline"
                                          : "secondary"
                                    }
                                    className={strategy.priority === "medium" ? "border-amber-500 text-amber-500" : ""}
                                  >
                                    {strategy.priority.charAt(0).toUpperCase() + strategy.priority.slice(1)} Priority
                                  </Badge>
                                </div>
                                <div className="rounded-full bg-primary/10 p-2">
                                  {strategy.priority === "high" ? (
                                    <AlertTriangle className="h-5 w-5 text-destructive" />
                                  ) : strategy.priority === "medium" ? (
                                    <Info className="h-5 w-5 text-amber-500" />
                                  ) : (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  )}
                                </div>
                              </div>
                              <p className="mt-4 text-muted-foreground">{strategy.description}</p>
                              <div className="mt-4">
                                <h4 className="text-sm font-medium">Supporting Precedents:</h4>
                                <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                                  {strategy.precedents.map((precedent, i) => (
                                    <li key={i}>{precedent}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-4 flex justify-end">
                                <Button>Implement Strategy</Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="outcomes" className="mt-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Precedent-Based Outcome Predictions</CardTitle>
                          <CardDescription>AI predicts win/loss probability based on legal patterns</CardDescription>
                        </div>
                        <Button>
                          <Download className="mr-2 h-4 w-4" /> Export Predictions
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {outcomePredictions.map((prediction, index) => (
                          <Card key={index}>
                            <CardContent className="p-6">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                  <h3 className="text-lg font-semibold">{prediction.scenario}</h3>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-medium">Win Probability:</span>
                                    <div className="flex items-center">
                                      <span
                                        className={`text-lg font-bold ${
                                          prediction.winProbability >= 75
                                            ? "text-green-500"
                                            : prediction.winProbability >= 50
                                              ? "text-amber-500"
                                              : "text-destructive"
                                        }`}
                                      >
                                        {prediction.winProbability}%
                                      </span>
                                      {prediction.winProbability >= 75 ? (
                                        <TrendingUp className="ml-1 h-4 w-4 text-green-500" />
                                      ) : prediction.winProbability >= 50 ? (
                                        <TrendingUp className="ml-1 h-4 w-4 text-amber-500" />
                                      ) : (
                                        <TrendingDown className="ml-1 h-4 w-4 text-destructive" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full md:w-64">
                                  <div className="h-4 w-full rounded-full bg-muted overflow-hidden">
                                    <div
                                      className={`h-full ${
                                        prediction.winProbability >= 75
                                          ? "bg-green-500"
                                          : prediction.winProbability >= 50
                                            ? "bg-amber-500"
                                            : "bg-destructive"
                                      }`}
                                      style={{ width: `${prediction.winProbability}%` }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="text-sm font-medium flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                    Favorable Factors
                                  </h4>
                                  <ul className="mt-2 space-y-1">
                                    {prediction.factors.map((factor, i) => (
                                      <li key={i} className="text-sm flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{factor}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium flex items-center">
                                    <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                                    Potential Challenges
                                  </h4>
                                  <ul className="mt-2 space-y-1">
                                    {prediction.challenges.map((challenge, i) => (
                                      <li key={i} className="text-sm flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{challenge}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="mt-6 flex justify-end gap-2">
                                <Button variant="outline">View Similar Cases</Button>
                                <Button>Generate Detailed Report</Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
