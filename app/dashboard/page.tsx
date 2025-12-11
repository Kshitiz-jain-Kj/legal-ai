"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, FileText, Search, AlertTriangle, CheckCircle, Clock, Upload, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for the dashboard
  const stats = [
    {
      title: "Contracts Reviewed",
      value: "128",
      change: "+12% from last month",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: "Risk Levels Detected",
      value: "24",
      change: "-8% from last month",
      icon: AlertTriangle,
      color: "bg-amber-500",
    },
    {
      title: "Cases Analyzed",
      value: "56",
      change: "+18% from last month",
      icon: BarChart3,
      color: "bg-green-500",
    },
  ]

  const recentInsights = [
    {
      title: "Non-Compete Clause Risk",
      description: "The non-compete clause in the Johnson contract may be unenforceable in California.",
      risk: "high",
      time: "2 hours ago",
    },
    {
      title: "Liability Limitation",
      description: "The liability limitation in the Smith contract is below industry standard.",
      risk: "medium",
      time: "5 hours ago",
    },
    {
      title: "Payment Terms",
      description: "The payment terms in the Davis contract are favorable and align with your policies.",
      risk: "low",
      time: "1 day ago",
    },
  ]

  const suggestedCases = [
    {
      title: "Smith v. Johnson (2021)",
      relevance: "98% match",
      court: "Supreme Court",
      description: "Precedent for intellectual property disputes in software licensing.",
    },
    {
      title: "Davis Corp v. Miller Inc (2020)",
      relevance: "92% match",
      court: "9th Circuit",
      description: "Similar contract breach case with favorable outcome.",
    },
    {
      title: "Wilson v. Tech Solutions (2019)",
      relevance: "87% match",
      court: "Federal Circuit",
      description: "Relevant for current patent infringement defense strategy.",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John. Here's an overview of your legal AI workspace.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className={`${stat.color} rounded-full p-2 text-white`}>
                    <stat.icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks to help you get started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Document</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <Search className="h-5 w-5" />
                  <span>Search Cases</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Draft Contract</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <PlusCircle className="h-5 w-5" />
                  <span>New Project</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent AI Legal Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Recent AI Legal Insights</CardTitle>
                <CardDescription>AI-generated insights from your recent documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInsights.map((insight, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-0.5">
                        {insight.risk === "high" ? (
                          <div className="rounded-full bg-destructive/20 p-1 text-destructive">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                        ) : insight.risk === "medium" ? (
                          <div className="rounded-full bg-amber-500/20 p-1 text-amber-500">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-green-500/20 p-1 text-green-500">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{insight.title}</h4>
                          <Badge
                            variant={
                              insight.risk === "high"
                                ? "destructive"
                                : insight.risk === "medium"
                                  ? "outline"
                                  : "secondary"
                            }
                            className="ml-auto"
                          >
                            {insight.risk} risk
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {insight.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI-Suggested Case Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>AI-Suggested Case Law</CardTitle>
                <CardDescription>Relevant cases based on your current matters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestedCases.map((caseItem, i) => (
                    <div key={i} className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{caseItem.title}</h4>
                        <Badge variant="secondary">{caseItem.relevance}</Badge>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{caseItem.court}</div>
                      <p className="mt-2 text-sm">{caseItem.description}</p>
                      <div className="mt-3 flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          Save
                        </Button>
                        <Button size="sm">View Case</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  )
}
