"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Calendar,
  Edit,
  Camera,
  Moon,
  Sun,
  Shield,
  Key,
  CreditCard,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile")
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // In a real app, this would toggle a class on the document or use a theme context
    document.documentElement.classList.toggle("dark")
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Profile & Settings</h1>
          <p className="text-muted-foreground">Manage your account, preferences, and subscription settings.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>Update your profile photo</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Smith" />
                      <AvatarFallback className="text-2xl">JS</AvatarFallback>
                    </Avatar>
                    <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">John Smith</h3>
                    <p className="text-sm text-muted-foreground">Lead Attorney</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                    <Button size="sm">Upload New</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="full-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="full-name" className="pl-10" defaultValue="John Smith" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="email" className="pl-10" defaultValue="john.smith@legalai.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="phone" className="pl-10" defaultValue="(555) 123-4567" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="role" className="pl-10" defaultValue="Lead Attorney" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="location" className="pl-10" defaultValue="New York, NY" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="joined">Joined</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="joined" className="pl-10" defaultValue="January 2023" readOnly />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <div className="relative">
                        <textarea
                          id="bio"
                          className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="Experienced attorney specializing in contract law and intellectual property. Over 10 years of experience in corporate legal departments."
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Edit className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="preferences" className="mt-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>User Preferences</CardTitle>
                  <CardDescription>Customize your experience and AI settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Appearance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {darkMode ? (
                            <Moon className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Sun className="h-4 w-4 text-muted-foreground" />
                          )}
                          <Label htmlFor="dark-mode" className="font-medium">
                            {darkMode ? "Dark Mode" : "Light Mode"}
                          </Label>
                        </div>
                        <Switch id="dark-mode" checked={darkMode} onCheckedChange={toggleDarkMode} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Edit className="h-4 w-4 text-muted-foreground" />
                          <Label htmlFor="font-size" className="font-medium">
                            Font Size
                          </Label>
                        </div>
                        <select
                          id="font-size"
                          className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          defaultValue="medium"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">AI Customization</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="risk-sensitivity" className="font-medium mb-2 block">
                          Risk Assessment Sensitivity
                        </Label>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Conservative</span>
                          <input
                            type="range"
                            id="risk-sensitivity"
                            min="1"
                            max="5"
                            defaultValue="3"
                            className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                          />
                          <span className="text-sm">Aggressive</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Adjust how sensitive the AI is when flagging potential risks in contracts
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="ai-suggestions" className="font-medium mb-2 block">
                          AI Suggestion Frequency
                        </Label>
                        <select
                          id="ai-suggestions"
                          className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          defaultValue="medium"
                        >
                          <option value="low">Low - Only critical suggestions</option>
                          <option value="medium">Medium - Balanced approach</option>
                          <option value="high">High - Frequent suggestions</option>
                        </select>
                        <p className="text-xs text-muted-foreground mt-1">
                          Control how often the AI provides suggestions and insights
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Integrations</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Google Drive</h4>
                          <p className="text-sm text-muted-foreground">Connect to access documents</p>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Dropbox</h4>
                          <p className="text-sm text-muted-foreground">Connect to access documents</p>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Westlaw</h4>
                          <p className="text-sm text-muted-foreground">Connect to legal database</p>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="subscription" className="mt-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Management</CardTitle>
                  <CardDescription>Manage your plan and billing information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">Professional Plan</h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mt-1">
                          Active
                        </Badge>
                      </div>
                      <Button variant="outline">Change Plan</Button>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Billing Cycle</p>
                        <p className="font-medium">Monthly</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Next Billing Date</p>
                        <p className="font-medium">June 15, 2023</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">$99.00 / month</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-8 w-8 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button variant="outline" size="sm">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Add Payment Method
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Billing History</h3>
                    <div className="rounded-lg border overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-2 text-left font-medium">Date</th>
                            <th className="px-4 py-2 text-left font-medium">Description</th>
                            <th className="px-4 py-2 text-left font-medium">Amount</th>
                            <th className="px-4 py-2 text-left font-medium">Status</th>
                            <th className="px-4 py-2 text-right font-medium">Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-2">May 15, 2023</td>
                            <td className="px-4 py-2">Professional Plan - Monthly</td>
                            <td className="px-4 py-2">$99.00</td>
                            <td className="px-4 py-2">
                              <Badge
                                variant="secondary"
                                className="bg-green-500/10 text-green-500 hover:bg-green-500/20"
                              >
                                Paid
                              </Badge>
                            </td>
                            <td className="px-4 py-2 text-right">
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">Apr 15, 2023</td>
                            <td className="px-4 py-2">Professional Plan - Monthly</td>
                            <td className="px-4 py-2">$99.00</td>
                            <td className="px-4 py-2">
                              <Badge
                                variant="secondary"
                                className="bg-green-500/10 text-green-500 hover:bg-green-500/20"
                              >
                                Paid
                              </Badge>
                            </td>
                            <td className="px-4 py-2 text-right">
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Mar 15, 2023</td>
                            <td className="px-4 py-2">Professional Plan - Monthly</td>
                            <td className="px-4 py-2">$99.00</td>
                            <td className="px-4 py-2">
                              <Badge
                                variant="secondary"
                                className="bg-green-500/10 text-green-500 hover:bg-green-500/20"
                              >
                                Paid
                              </Badge>
                            </td>
                            <td className="px-4 py-2 text-right">
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="text-destructive">
                    Cancel Subscription
                  </Button>
                  <Button>Download All Invoices</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="security" className="mt-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and authentication methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="current-password" type="password" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="new-password" type="password" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="confirm-password" type="password" className="pl-10" />
                        </div>
                      </div>
                      <Button>Update Password</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Shield className="h-8 w-8 text-primary" />
                          <div>
                            <p className="font-medium">Two-Factor Authentication</p>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                        </div>
                        <Switch id="2fa" defaultChecked />
                      </div>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-md bg-muted p-3">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="authenticator" name="2fa-method" defaultChecked />
                            <Label htmlFor="authenticator" className="font-medium">
                              Authenticator App
                            </Label>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 ml-5">
                            Use an authenticator app like Google Authenticator or Authy
                          </p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="sms" name="2fa-method" />
                            <Label htmlFor="sms" className="font-medium">
                              SMS
                            </Label>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 ml-5">
                            Receive a code via SMS to your registered phone number
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Session Management</h3>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Active Sessions</p>
                          <p className="text-sm text-muted-foreground">You're currently logged in on 2 devices</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage Sessions
                        </Button>
                      </div>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between rounded-md bg-muted p-3">
                          <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-xs text-muted-foreground">
                              MacBook Pro • New York, USA • Started 2 hours ago
                            </p>
                          </div>
                          <Badge>Current</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-md bg-muted p-3">
                          <div>
                            <p className="font-medium">iPhone 13</p>
                            <p className="text-xs text-muted-foreground">iOS 16 • New York, USA • Started 1 day ago</p>
                          </div>
                          <Button variant="ghost" size="sm" className="text-destructive">
                            Revoke
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Security Settings</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
