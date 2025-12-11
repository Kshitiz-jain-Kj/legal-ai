"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Plus, Pencil, Trash2, Save, Shield, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { lawyersDatabase, PRACTICE_AREAS, STATES, LANGUAGES, FEE_TYPES, type Lawyer } from "@/lib/lawyers-database"
import { MobileNav } from "@/components/mobile-nav"

const generateId = () => `custom-${Date.now()}`

export default function LawyersAdminPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([])
  const [editingLawyer, setEditingLawyer] = useState<Lawyer | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  // Load custom lawyers from localStorage
  useEffect(() => {
    const storedCustomLawyers = localStorage.getItem("legalease-custom-lawyers")
    const customLawyers = storedCustomLawyers ? JSON.parse(storedCustomLawyers) : []
    setLawyers([...lawyersDatabase, ...customLawyers])
  }, [])

  const saveCustomLawyers = (allLawyers: Lawyer[]) => {
    const customLawyers = allLawyers.filter((l) => l.id.startsWith("custom-"))
    localStorage.setItem("legalease-custom-lawyers", JSON.stringify(customLawyers))
  }

  const getEmptyLawyer = (): Lawyer => ({
    id: generateId(),
    name: "",
    firm: "",
    photo: "/professional-lawyer.png",
    practiceAreas: [],
    yearsExperience: 0,
    state: "Maharashtra",
    city: "",
    languages: ["English", "Hindi"],
    feeType: "private",
    feeRange: "",
    rating: 4.5,
    reviewCount: 0,
    bio: "",
    email: "",
    phone: "",
    officeHours: "Mon-Sat: 10:00 AM - 6:00 PM",
    verified: true,
    verifiedDate: new Date().toISOString().split("T")[0],
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: [],
  })

  const handleAddNew = () => {
    setEditingLawyer(getEmptyLawyer())
    setIsAddingNew(true)
    setShowDialog(true)
  }

  const handleEdit = (lawyer: Lawyer) => {
    setEditingLawyer({ ...lawyer })
    setIsAddingNew(false)
    setShowDialog(true)
  }

  const handleSave = () => {
    if (!editingLawyer) return

    let updatedLawyers: Lawyer[]
    if (isAddingNew) {
      updatedLawyers = [...lawyers, editingLawyer]
    } else {
      updatedLawyers = lawyers.map((l) => (l.id === editingLawyer.id ? editingLawyer : l))
    }

    setLawyers(updatedLawyers)
    saveCustomLawyers(updatedLawyers)
    setShowDialog(false)
    setEditingLawyer(null)
  }

  const handleDelete = (id: string) => {
    const updatedLawyers = lawyers.filter((l) => l.id !== id)
    setLawyers(updatedLawyers)
    saveCustomLawyers(updatedLawyers)
  }

  const isCustomLawyer = (id: string) => id.startsWith("custom-")

  const updateEditingLawyer = (updates: Partial<Lawyer>) => {
    if (editingLawyer) {
      setEditingLawyer({ ...editingLawyer, ...updates })
    }
  }

  const togglePracticeArea = (area: string) => {
    if (!editingLawyer) return
    const areas = editingLawyer.practiceAreas.includes(area)
      ? editingLawyer.practiceAreas.filter((a) => a !== area)
      : [...editingLawyer.practiceAreas, area]
    updateEditingLawyer({ practiceAreas: areas })
  }

  const toggleLanguage = (lang: string) => {
    if (!editingLawyer) return
    const langs = editingLawyer.languages.includes(lang)
      ? editingLawyer.languages.filter((l) => l !== lang)
      : [...editingLawyer.languages, lang]
    updateEditingLawyer({ languages: langs })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/lawyers">
              <Button variant="ghost" size="icon" className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Admin Panel</span>
            </div>
          </div>
          <Button onClick={handleAddNew} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Lawyer
          </Button>
        </div>
      </header>

      <main className="container py-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Manage Lawyers</h1>
          <p className="text-muted-foreground">
            Add, edit, or remove lawyer entries. Custom entries are stored locally.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{lawyers.length}</div>
              <div className="text-sm text-muted-foreground">Total Lawyers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{lawyers.filter((l) => l.verified).length}</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{lawyers.filter((l) => l.feeType === "pro-bono").length}</div>
              <div className="text-sm text-muted-foreground">Pro Bono</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{lawyers.filter((l) => isCustomLawyer(l.id)).length}</div>
              <div className="text-sm text-muted-foreground">Custom Added</div>
            </CardContent>
          </Card>
        </div>

        {/* Lawyers Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Lawyers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={lawyer.photo || "/placeholder.svg"}
                      alt={lawyer.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{lawyer.name}</span>
                        {lawyer.verified && <BadgeCheck className="h-4 w-4 text-green-600" />}
                        {isCustomLawyer(lawyer.id) && (
                          <Badge variant="secondary" className="text-xs">
                            Custom
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {lawyer.city}, {lawyer.state} • {lawyer.feeType}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(lawyer)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    {isCustomLawyer(lawyer.id) && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive"
                        onClick={() => handleDelete(lawyer.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Edit/Add Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isAddingNew ? "Add New Lawyer" : "Edit Lawyer"}</DialogTitle>
            <DialogDescription>
              {isAddingNew
                ? "Add a new lawyer to the directory. Custom entries are stored locally."
                : "Update lawyer information."}
            </DialogDescription>
          </DialogHeader>

          {editingLawyer && (
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input
                    value={editingLawyer.name}
                    onChange={(e) => updateEditingLawyer({ name: e.target.value })}
                    placeholder="Adv. Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Firm</Label>
                  <Input
                    value={editingLawyer.firm}
                    onChange={(e) => updateEditingLawyer({ firm: e.target.value })}
                    placeholder="Firm or Organization Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>State *</Label>
                  <Select value={editingLawyer.state} onValueChange={(value) => updateEditingLawyer({ state: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATES.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>City *</Label>
                  <Input
                    value={editingLawyer.city}
                    onChange={(e) => updateEditingLawyer({ city: e.target.value })}
                    placeholder="City"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Years Experience</Label>
                  <Input
                    type="number"
                    value={editingLawyer.yearsExperience}
                    onChange={(e) => updateEditingLawyer({ yearsExperience: Number.parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    value={editingLawyer.email}
                    onChange={(e) => updateEditingLawyer({ email: e.target.value })}
                    placeholder="lawyer@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone *</Label>
                  <Input
                    value={editingLawyer.phone}
                    onChange={(e) => updateEditingLawyer({ phone: e.target.value })}
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Fee Type</Label>
                  <Select
                    value={editingLawyer.feeType}
                    onValueChange={(value: "pro-bono" | "low-cost" | "private") =>
                      updateEditingLawyer({ feeType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {FEE_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Fee Range</Label>
                  <Input
                    value={editingLawyer.feeRange || ""}
                    onChange={(e) => updateEditingLawyer({ feeRange: e.target.value })}
                    placeholder="₹X,XXX - ₹XX,XXX"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Practice Areas</Label>
                <div className="flex flex-wrap gap-2">
                  {PRACTICE_AREAS.map((area) => (
                    <Badge
                      key={area}
                      variant={editingLawyer.practiceAreas.includes(area) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => togglePracticeArea(area)}
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Languages</Label>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <Badge
                      key={lang}
                      variant={editingLawyer.languages.includes(lang) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleLanguage(lang)}
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea
                  value={editingLawyer.bio}
                  onChange={(e) => updateEditingLawyer({ bio: e.target.value })}
                  placeholder="Brief description of experience and specializations..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Office Hours</Label>
                <Input
                  value={editingLawyer.officeHours}
                  onChange={(e) => updateEditingLawyer({ officeHours: e.target.value })}
                  placeholder="Mon-Sat: 10:00 AM - 6:00 PM"
                />
              </div>

              <Separator />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="verified"
                  checked={editingLawyer.verified}
                  onCheckedChange={(checked) => updateEditingLawyer({ verified: checked as boolean })}
                />
                <Label htmlFor="verified" className="cursor-pointer">
                  Mark as Verified
                </Label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setShowDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  {isAddingNew ? "Add Lawyer" : "Save Changes"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <MobileNav />
    </div>
  )
}
