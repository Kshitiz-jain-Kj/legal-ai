"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Lock,
  FileCheck,
  ShieldCheck,
  ShieldAlert,
  LockKeyhole,
  Key,
  Fingerprint,
  Eye,
  EyeOff,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function Security() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Security & Compliance</h1>
          <p className="text-muted-foreground">
            Ensure legal-grade data protection and regulatory compliance for your sensitive information.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Security Overview</CardTitle>
              <CardDescription>Current security status and compliance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="mb-2 rounded-full bg-green-500/10 p-2">
                      <ShieldCheck className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-muted-foreground">Security Score</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="mb-2 rounded-full bg-primary/10 p-2">
                      <FileCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm text-muted-foreground">Compliance Rate</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="mb-2 rounded-full bg-green-500/10 p-2">
                      <Lock className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">0</div>
                      <div className="text-sm text-muted-foreground">Security Incidents</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Security Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">End-to-End Encryption</CardTitle>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Active
                          </Badge>
                        </div>
                        <CardDescription>All data is encrypted in transit and at rest</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <LockKeyhole className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Encryption Strength</span>
                              <span className="text-sm">AES-256</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Two-Factor Authentication</CardTitle>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Enabled
                          </Badge>
                        </div>
                        <CardDescription>Extra security for user accounts</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Key className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">2FA Methods</span>
                              <span className="text-sm">SMS, Authenticator App</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">Last verification: 2 days ago</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Secure Cloud Storage</CardTitle>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Active
                          </Badge>
                        </div>
                        <CardDescription>Encrypted storage for legal documents</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Shield className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Storage Security</span>
                              <span className="text-sm">Enterprise-grade</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Biometric Authentication</CardTitle>
                          <Badge variant="outline" className="border-amber-500 text-amber-500">
                            Optional
                          </Badge>
                        </div>
                        <CardDescription>Use fingerprint or face recognition</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Fingerprint className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Enable Biometric Login</span>
                              <Switch id="biometric" />
                            </div>
                            <span className="text-xs text-muted-foreground">Available on supported devices only</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Compliance Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">GDPR Compliance</CardTitle>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Compliant
                          </Badge>
                        </div>
                        <CardDescription>European data protection regulation</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Compliance Level</span>
                              <span className="text-sm">100%</span>
                            </div>
                            <Progress value={100} className="h-2" />
                            <span className="text-xs text-muted-foreground">Last audit: 3 months ago</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">HIPAA Compliance</CardTitle>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Compliant
                          </Badge>
                        </div>
                        <CardDescription>Health information privacy standards</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Compliance Level</span>
                              <span className="text-sm">100%</span>
                            </div>
                            <Progress value={100} className="h-2" />
                            <span className="text-xs text-muted-foreground">Last audit: 2 months ago</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">SOC 2 Certification</CardTitle>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Certified
                          </Badge>
                        </div>
                        <CardDescription>Security, availability, and confidentiality</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Certification Status</span>
                              <span className="text-sm">Type II</span>
                            </div>
                            <Progress value={100} className="h-2" />
                            <span className="text-xs text-muted-foreground">Renewed annually</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">ISO 27001</CardTitle>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Certified
                          </Badge>
                        </div>
                        <CardDescription>Information security management</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Certification Status</span>
                              <span className="text-sm">Active</span>
                            </div>
                            <Progress value={100} className="h-2" />
                            <span className="text-xs text-muted-foreground">Last audit: 6 months ago</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <Label htmlFor="privacy-mode" className="font-medium">
                              Privacy Mode
                            </Label>
                          </div>
                          <Switch id="privacy-mode" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                            <Label htmlFor="auto-logout" className="font-medium">
                              Auto-Logout After Inactivity
                            </Label>
                          </div>
                          <Switch id="auto-logout" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                            <Label htmlFor="data-sharing" className="font-medium">
                              Data Sharing with Third Parties
                            </Label>
                          </div>
                          <Switch id="data-sharing" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <Label htmlFor="secure-notes" className="font-medium">
                              Secure Notes Encryption
                            </Label>
                          </div>
                          <Switch id="secure-notes" defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Security Audit Log</Button>
              <Button>Update Security Settings</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
