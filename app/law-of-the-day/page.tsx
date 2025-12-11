"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Scale,
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  RefreshCw,
  ExternalLink,
  Car,
  Gavel,
  ShoppingCart,
  Laptop,
  Home,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Info,
  Sparkles,
  Shield,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getLawOfTheDay, getRandomLaw, getLawsByCategory, lawsDatabase, type LawEntry } from "@/lib/laws-database"
import { toast } from "sonner"

const categoryIcons: Record<string, React.ReactNode> = {
  traffic: <Car className="h-5 w-5" />,
  ipc: <Gavel className="h-5 w-5" />,
  consumer: <ShoppingCart className="h-5 w-5" />,
  cybercrime: <Laptop className="h-5 w-5" />,
  civil: <Scale className="h-5 w-5" />,
  property: <Home className="h-5 w-5" />,
}

const categoryLabels: Record<string, string> = {
  traffic: "Traffic Laws",
  ipc: "IPC Sections",
  consumer: "Consumer Rights",
  cybercrime: "Cybercrime",
  civil: "Civil Laws",
  property: "Property Laws",
}

const categoryColors: Record<string, string> = {
  traffic: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  ipc: "bg-red-500/10 text-red-600 border-red-500/20",
  consumer: "bg-green-500/10 text-green-600 border-green-500/20",
  cybercrime: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  civil: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  property: "bg-teal-500/10 text-teal-600 border-teal-500/20",
}

export default function LawOfTheDayPage() {
  const [currentLaw, setCurrentLaw] = useState<LawEntry | null>(null)
  const [savedLaws, setSavedLaws] = useState<string[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [showLibrary, setShowLibrary] = useState(false)

  useEffect(() => {
    // Get law of the day
    setCurrentLaw(getLawOfTheDay())

    // Load saved laws from localStorage
    const saved = localStorage.getItem("legalease-saved-laws")
    if (saved) {
      setSavedLaws(JSON.parse(saved))
    }
  }, [])

  const handleSaveLaw = (lawId: string) => {
    const newSavedLaws = savedLaws.includes(lawId) ? savedLaws.filter((id) => id !== lawId) : [...savedLaws, lawId]

    setSavedLaws(newSavedLaws)
    localStorage.setItem("legalease-saved-laws", JSON.stringify(newSavedLaws))

    if (newSavedLaws.includes(lawId)) {
      toast.success("Law saved to your library!")
    } else {
      toast.success("Law removed from library")
    }
  }

  const handleGetRandomLaw = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      const newLaw = getRandomLaw(currentLaw?.id)
      setCurrentLaw(newLaw)
      setIsRefreshing(false)
    }, 500)
  }

  const filteredLaws =
    selectedCategory === "all" ? lawsDatabase : getLawsByCategory(selectedCategory as LawEntry["category"])

  const savedLawEntries = lawsDatabase.filter((law) => savedLaws.includes(law.id))

  if (!currentLaw) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <Scale className="h-12 w-12 text-primary" />
          <p className="text-muted-foreground">Loading Law of the Day...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background pb-20 md:pb-0">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg"
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Law of the Day</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={showLibrary ? "default" : "outline"}
              size="sm"
              onClick={() => setShowLibrary(!showLibrary)}
              className="gap-2"
            >
              <Bookmark className="h-4 w-4" />
              <span className="hidden sm:inline">My Library</span>
              {savedLaws.length > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {savedLaws.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="container py-8">
        <AnimatePresence mode="wait">
          {showLibrary ? (
            <motion.div
              key="library"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Your Saved Laws</h2>
                  <p className="text-muted-foreground">{savedLawEntries.length} laws saved to your library</p>
                </div>
              </div>

              {savedLawEntries.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Bookmark className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">No saved laws yet</h3>
                    <p className="text-muted-foreground text-center max-w-sm">
                      Save laws to your library by clicking the bookmark icon on any law card.
                    </p>
                    <Button className="mt-4" onClick={() => setShowLibrary(false)}>
                      Explore Laws
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {savedLawEntries.map((law) => (
                    <LawCard
                      key={law.id}
                      law={law}
                      isSaved={savedLaws.includes(law.id)}
                      onSave={() => handleSaveLaw(law.id)}
                      compact
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Featured Law of the Day */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-0"
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      Today's Featured Law
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGetRandomLaw}
                    disabled={isRefreshing}
                    className="gap-2 bg-transparent"
                  >
                    <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                    Get Another
                  </Button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLaw.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FeaturedLawCard
                      law={currentLaw}
                      isSaved={savedLaws.includes(currentLaw.id)}
                      onSave={() => handleSaveLaw(currentLaw.id)}
                    />
                  </motion.div>
                </AnimatePresence>
              </section>

              {/* Browse by Category */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Browse All Laws</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="h-4 w-4" />
                    <span>{filteredLaws.length} laws</span>
                  </div>
                </div>

                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
                  <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      All
                    </TabsTrigger>
                    {Object.entries(categoryLabels).map(([key, label]) => (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        {categoryIcons[key]}
                        <span className="hidden sm:inline">{label}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredLaws.map((law, index) => (
                    <motion.div
                      key={law.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <LawCard law={law} isSaved={savedLaws.includes(law.id)} onSave={() => handleSaveLaw(law.id)} />
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

// Featured Law Card Component
function FeaturedLawCard({
  law,
  isSaved,
  onSave,
}: {
  law: LawEntry
  isSaved: boolean
  onSave: () => void
}) {
  return (
    <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-3 gap-0">
          {/* Main Content */}
          <div className="md:col-span-2 p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl ${categoryColors[law.category]}`}
                >
                  {law.icon}
                </div>
                <div>
                  <Badge variant="outline" className={categoryColors[law.category]}>
                    {categoryIcons[law.category]}
                    <span className="ml-1">{categoryLabels[law.category]}</span>
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mt-1">{law.name}</h2>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onSave}
                className={isSaved ? "text-primary" : "text-muted-foreground"}
              >
                {isSaved ? <BookmarkCheck className="h-6 w-6" /> : <Bookmark className="h-6 w-6" />}
              </Button>
            </div>

            {/* Plain Explanation */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                In Simple Words
              </h3>
              <p className="text-lg leading-relaxed">{law.plainExplanation}</p>
            </div>

            {/* Penalties */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Key Penalties & Consequences
              </h3>
              <ul className="space-y-2">
                {law.penalties.map((penalty, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{penalty}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* State Variations */}
            <div className="p-4 rounded-xl bg-muted/50 border">
              <div className="flex items-start gap-3">
                <MapPin
                  className={`h-5 w-5 shrink-0 mt-0.5 ${law.stateVariations.varies ? "text-amber-500" : "text-green-500"}`}
                />
                <div>
                  <p className="font-medium">
                    {law.stateVariations.varies ? "Varies Across States" : "Uniform Across India"}
                  </p>
                  {law.stateVariations.details && (
                    <p className="text-sm text-muted-foreground mt-1">{law.stateVariations.details}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Verified Legal Source • {law.source}</span>
              </div>
              <Link href="/chat">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>

          {/* Side Panel */}
          <div className="bg-muted/30 p-6 md:p-8 border-t md:border-t-0 md:border-l">
            {/* Related Sections */}
            {law.relatedSections && law.relatedSections.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Related Sections
                </h3>
                <div className="flex flex-wrap gap-2">
                  {law.relatedSections.map((section, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {section}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Important Notes */}
            {law.importantNotes && law.importantNotes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Important Notes
                </h3>
                <ul className="space-y-2">
                  {law.importantNotes.map((note, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {law.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Compact Law Card Component
function LawCard({
  law,
  isSaved,
  onSave,
  compact = false,
}: {
  law: LawEntry
  isSaved: boolean
  onSave: () => void
  compact?: boolean
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      className={`group transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer ${expanded ? "ring-2 ring-primary/20" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div
              className={`h-10 w-10 rounded-xl flex items-center justify-center text-lg ${categoryColors[law.category]}`}
            >
              {law.icon}
            </div>
            <div className="flex-1 min-w-0">
              <Badge variant="outline" className={`text-xs mb-1 ${categoryColors[law.category]}`}>
                {categoryLabels[law.category]}
              </Badge>
              <CardTitle className="text-base line-clamp-2">{law.name}</CardTitle>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              onSave()
            }}
            className={`shrink-0 ${isSaved ? "text-primary" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`}
          >
            {isSaved ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className={`text-sm text-muted-foreground ${expanded ? "" : "line-clamp-2"}`}>{law.plainExplanation}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t space-y-4"
            >
              {/* Penalties */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Penalties</h4>
                <ul className="space-y-1">
                  {law.penalties.slice(0, 2).map((penalty, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {penalty}
                    </li>
                  ))}
                </ul>
              </div>

              {/* State Variation */}
              <div className="flex items-center gap-2 text-sm">
                <MapPin className={`h-4 w-4 ${law.stateVariations.varies ? "text-amber-500" : "text-green-500"}`} />
                <span className="text-muted-foreground">
                  {law.stateVariations.varies ? "Varies by state" : "Uniform across India"}
                </span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3 text-green-500" />
                  Verified
                </div>
                <Link href="/chat" onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                    Ask Questions
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t">
            <div className="flex items-center gap-2">
              <MapPin className={`h-4 w-4 ${law.stateVariations.varies ? "text-amber-500" : "text-green-500"}`} />
              <span className="text-xs text-muted-foreground">
                {law.stateVariations.varies ? "State-specific" : "Pan-India"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Shield className="h-3 w-3 text-green-500" />
              Verified
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
