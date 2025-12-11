"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Plus, FileText, MessageSquare, Calendar, Clock, CheckCircle, AlertTriangle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function Collaboration() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("team")

  // Mock data for team members
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "Lead Attorney",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      status: "online",
      email: "john.smith@legalai.com",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Paralegal",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
      status: "offline",
      email: "sarah.johnson@legalai.com",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Associate Attorney",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
      status: "online",
      email: "michael.chen@legalai.com",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Legal Researcher",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
      status: "away",
      email: "emily.rodriguez@legalai.com",
    },
  ]

  // Mock data for shared documents
  const sharedDocuments = [
    {
      id: 1,
      name: "Johnson Contract - Final Draft.pdf",
      sharedBy: "John Smith",
      sharedDate: "2 days ago",
      comments: 5,
      status: "reviewed",
    },
    {
      id: 2,
      name: "Davis v. Miller - Case Analysis.docx",
      sharedBy: "Sarah Johnson",
      sharedDate: "Yesterday",
      comments: 12,
      status: "in-progress",
    },
    {
      id: 3,
      name: "IP Licensing Agreement Template.docx",
      sharedBy: "Michael Chen",
      sharedDate: "5 hours ago",
      comments: 3,
      status: "new",
    },
    {
      id: 4,
      name: "Regulatory Compliance Report Q2.pdf",
      sharedBy: "Emily Rodriguez",
      sharedDate: "Just now",
      comments: 0,
      status: "new",
    },
  ]

  // Mock data for tasks
  const tasks = [
    {
      id: 1,
      title: "Review Johnson Contract",
      assignedTo: "John Smith",
      dueDate: "Tomorrow, 5:00 PM",
      priority: "high",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Research precedents for Davis case",
      assignedTo: "Sarah Johnson",
      dueDate: "Friday, 3:00 PM",
      priority: "medium",
      status: "not-started",
    },
    {
      id: 3,
      title: "Draft response to discovery requests",
      assignedTo: "Michael Chen",
      dueDate: "Next Monday, 12:00 PM",
      priority: "medium",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Prepare client presentation",
      assignedTo: "Emily Rodriguez",
      dueDate: "Today, 4:00 PM",
      priority: "high",
      status: "completed",
    },
    {
      id: 5,
      title: "Update case management system",
      assignedTo: "John Smith",
      dueDate: "Wednesday, 2:00 PM",
      priority: "low",
      status: "not-started",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Team Collaboration</h1>
          <p className="text-muted-foreground">
            Collaborate with your legal team on case research and document analysis.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search team, documents, or tasks..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Share Document
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="team">Team Members</TabsTrigger>
            <TabsTrigger value="documents">Shared Documents</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="mt-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Manage your legal team and their access permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map((member) => (
                      <Card key={member.id} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12 border-2 border-background">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{member.name}</h3>
                                <Badge
                                  variant={
                                    member.status === "online"
                                      ? "secondary"
                                      : member.status === "away"
                                        ? "outline"
                                        : "secondary"
                                  }
                                  className={
                                    member.status === "online"
                                      ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                      : member.status === "away"
                                        ? "border-amber-500 text-amber-500"
                                        : "bg-muted text-muted-foreground"
                                  }
                                >
                                  {member.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                              <p className="text-xs text-muted-foreground mt-1">{member.email}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="mr-2 h-3 w-3" />
                              Message
                            </Button>
                            <Button size="sm">View Profile</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                      <div className="rounded-full bg-primary/10 p-3 mb-4">
                        <Plus className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Add Team Member</h3>
                      <p className="text-sm text-muted-foreground text-center mb-4">
                        Invite a colleague to collaborate
                      </p>
                      <Button>Invite User</Button>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="documents" className="mt-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Shared Documents</CardTitle>
                  <CardDescription>Access and collaborate on shared legal documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sharedDocuments.map((document) => (
                      <Card key={document.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="rounded-md bg-primary/10 p-2">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium truncate">{document.name}</h3>
                                <Badge
                                  variant={
                                    document.status === "reviewed"
                                      ? "secondary"
                                      : document.status === "in-progress"
                                        ? "outline"
                                        : "secondary"
                                  }
                                  className={
                                    document.status === "reviewed"
                                      ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                      : document.status === "in-progress"
                                        ? "border-amber-500 text-amber-500"
                                        : "bg-primary/10 text-primary"
                                  }
                                >
                                  {document.status === "reviewed"
                                    ? "Reviewed"
                                    : document.status === "in-progress"
                                      ? "In Progress"
                                      : "New"}
                                </Badge>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground mt-1">
                                <span>Shared by {document.sharedBy}</span>
                                <span className="mx-2">•</span>
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{document.sharedDate}</span>
                                <span className="mx-2">•</span>
                                <MessageSquare className="h-3 w-3 mr-1" />
                                <span>{document.comments} comments</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="mr-2 h-3 w-3" />
                              Comment
                            </Button>
                            <Button size="sm">Open Document</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                  <Button variant="outline">View All Documents</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="tasks" className="mt-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Task Assignments</CardTitle>
                  <CardDescription>Tasks assigned based on legal workflow and team expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <Card key={task.id} className="overflow-hidden">
                        <div
                          className={`h-1 w-full ${
                            task.priority === "high"
                              ? "bg-destructive"
                              : task.priority === "medium"
                                ? "bg-amber-500"
                                : "bg-green-500"
                          }`}
                        />
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="mt-1">
                              {task.status === "completed" ? (
                                <div className="rounded-full bg-green-500/20 p-1">
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                </div>
                              ) : task.priority === "high" ? (
                                <div className="rounded-full bg-destructive/20 p-1">
                                  <AlertTriangle className="h-5 w-5 text-destructive" />
                                </div>
                              ) : (
                                <div className="rounded-full bg-amber-500/20 p-1">
                                  <Clock className="h-5 w-5 text-amber-500" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">{task.title}</h3>
                                <Badge
                                  variant={
                                    task.status === "completed"
                                      ? "secondary"
                                      : task.status === "in-progress"
                                        ? "outline"
                                        : "secondary"
                                  }
                                  className={
                                    task.status === "completed"
                                      ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                      : task.status === "in-progress"
                                        ? "border-amber-500 text-amber-500"
                                        : "bg-muted text-muted-foreground"
                                  }
                                >
                                  {task.status === "completed"
                                    ? "Completed"
                                    : task.status === "in-progress"
                                      ? "In Progress"
                                      : "Not Started"}
                                </Badge>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground mt-1">
                                <User className="h-3 w-3 mr-1" />
                                <span>Assigned to {task.assignedTo}</span>
                                <span className="mx-2">•</span>
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>Due {task.dueDate}</span>
                                <span className="mx-2">•</span>
                                <Badge
                                  variant="outline"
                                  className={
                                    task.priority === "high"
                                      ? "border-destructive text-destructive"
                                      : task.priority === "medium"
                                        ? "border-amber-500 text-amber-500"
                                        : "border-green-500 text-green-500"
                                  }
                                >
                                  {task.priority} priority
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end gap-2">
                            {task.status !== "completed" && (
                              <Button variant="outline" size="sm">
                                <CheckCircle className="mr-2 h-3 w-3" />
                                Mark Complete
                              </Button>
                            )}
                            <Button size="sm">View Details</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Task
                  </Button>
                  <Button variant="outline">View All Tasks</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
