"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Search,
  Filter,
  MapPin,
  Star,
  Clock,
  Phone,
  Mail,
  Shield,
  BadgeCheck,
  ChevronDown,
  X,
  Briefcase,
  Languages,
  IndianRupee,
  Users,
  ArrowLeft,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { MobileNav } from "@/components/mobile-nav"
import { lawyersDatabase, PRACTICE_AREAS, STATES, LANGUAGES, FEE_TYPES, type Lawyer } from "@/lib/lawyers-database"
import { LawyerContactModal } from "@/components/lawyers/lawyer-contact-modal"

export default function LawyersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedState, setSelectedState] = useState<string>("all")
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>("all")
  const [selectedFeeType, setSelectedFeeType] = useState<string>("all")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)

  const filteredLawyers = useMemo(() => {
    return lawyersDatabase.filter((lawyer) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          lawyer.name.toLowerCase().includes(query) ||
          lawyer.firm.toLowerCase().includes(query) ||
          lawyer.practiceAreas.some((area) => area.toLowerCase().includes(query)) ||
          lawyer.city.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }

      // State filter
      if (selectedState !== "all" && lawyer.state !== selectedState) return false

      // Practice area filter
      if (selectedPracticeArea !== "all" && !lawyer.practiceAreas.includes(selectedPracticeArea)) return false

      // Fee type filter
      if (selectedFeeType !== "all" && lawyer.feeType !== selectedFeeType) return false

      // Language filter
      if (selectedLanguage !== "all" && !lawyer.languages.includes(selectedLanguage)) return false

      return true
    })
  }, [searchQuery, selectedState, selectedPracticeArea, selectedFeeType, selectedLanguage])

  const activeFiltersCount = [selectedState, selectedPracticeArea, selectedFeeType, selectedLanguage].filter(
    (f) => f !== "all",
  ).length

  const clearFilters = () => {
    setSelectedState("all")
    setSelectedPracticeArea("all")
    setSelectedFeeType("all")
    setSelectedLanguage("all")
  }

  const handleContact = (lawyer: Lawyer) => {
    setSelectedLawyer(lawyer)
    setShowContactModal(true)
  }

  const getFeeTypeBadgeColor = (feeType: string) => {
    switch (feeType) {
      case "pro-bono":
        return "bg-green-100 text-green-700 border-green-200"
      case "low-cost":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "private":
        return "bg-purple-100 text-purple-700 border-purple-200"
      default:
        return ""
    }
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-500"
      case "busy":
        return "bg-yellow-500"
      case "unavailable":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Users className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold hidden sm:inline">Find Lawyers</span>
            </div>
          </div>
          <Link href="/lawyers/admin">
            <Button variant="outline" size="sm">
              Admin
            </Button>
          </Link>
        </div>
      </header>

      <main className="container py-6">
        {/* Page Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Find Verified Legal Help</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with trusted lawyers and legal aid services in your state. All lawyers are verified for your safety.
          </p>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg max-w-xl mx-auto">
            <p className="text-sm text-amber-800">
              <Shield className="h-4 w-4 inline mr-1" />
              <strong>Disclaimer:</strong> LegalEase connects you to lawyers — we do not provide legal representation.
            </p>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, firm, practice area, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFiltersCount}
                </Badge>
              )}
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <Card className="mb-4">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">State</label>
                        <Select value={selectedState} onValueChange={setSelectedState}>
                          <SelectTrigger>
                            <SelectValue placeholder="All States" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All States</SelectItem>
                            {STATES.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Practice Area</label>
                        <Select value={selectedPracticeArea} onValueChange={setSelectedPracticeArea}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Areas" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Areas</SelectItem>
                            {PRACTICE_AREAS.map((area) => (
                              <SelectItem key={area} value={area}>
                                {area}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Fee Type</label>
                        <Select value={selectedFeeType} onValueChange={setSelectedFeeType}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Types" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            {FEE_TYPES.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Language</label>
                        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Languages" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Languages</SelectItem>
                            {LANGUAGES.map((lang) => (
                              <SelectItem key={lang} value={lang}>
                                {lang}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {activeFiltersCount > 0 && (
                      <div className="mt-4 flex justify-end">
                        <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
                          <X className="h-4 w-4" />
                          Clear all filters
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredLawyers.length} lawyer{filteredLawyers.length !== 1 ? "s" : ""}
            </p>
          </div>
        </motion.div>

        {/* Lawyer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredLawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      {/* Photo & Status */}
                      <div className="relative sm:w-40 h-40 sm:h-auto bg-muted flex-shrink-0">
                        <img
                          src={lawyer.photo || "/placeholder.svg"}
                          alt={lawyer.name}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute top-2 right-2 h-3 w-3 rounded-full ${getAvailabilityColor(
                            lawyer.availability,
                          )} ring-2 ring-white`}
                          title={lawyer.availability}
                        />
                        {lawyer.verified && (
                          <div className="absolute bottom-2 left-2">
                            <Badge className="bg-green-600 text-white gap-1 text-xs">
                              <BadgeCheck className="h-3 w-3" />
                              Verified
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{lawyer.name}</h3>
                            <p className="text-sm text-muted-foreground">{lawyer.firm}</p>
                          </div>
                          <Badge className={`${getFeeTypeBadgeColor(lawyer.feeType)} border`}>
                            {lawyer.feeType === "pro-bono"
                              ? "Free"
                              : lawyer.feeType === "low-cost"
                                ? "Low Cost"
                                : "Private"}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {lawyer.practiceAreas.slice(0, 3).map((area) => (
                            <Badge key={area} variant="secondary" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                          {lawyer.practiceAreas.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{lawyer.practiceAreas.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {lawyer.city}, {lawyer.state}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" />
                            {lawyer.yearsExperience} years
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                            {lawyer.rating} ({lawyer.reviewCount})
                          </div>
                          <div className="flex items-center gap-1">
                            <Languages className="h-3.5 w-3.5" />
                            {lawyer.languages.slice(0, 2).join(", ")}
                          </div>
                        </div>

                        {lawyer.feeRange && (
                          <div className="flex items-center gap-1 text-sm mb-3">
                            <IndianRupee className="h-3.5 w-3.5" />
                            <span>{lawyer.feeRange}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                          <Clock className="h-3.5 w-3.5" />
                          {lawyer.officeHours}
                        </div>

                        <Separator className="my-3" />

                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" onClick={() => handleContact(lawyer)} className="gap-1">
                            <MessageSquare className="h-4 w-4" />
                            Contact
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={`tel:${lawyer.phone}`}>
                              <Phone className="h-4 w-4 mr-1" />
                              Call
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={`mailto:${lawyer.email}`}>
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredLawyers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No lawyers found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
            <Button variant="outline" onClick={clearFilters}>
              Clear all filters
            </Button>
          </motion.div>
        )}
      </main>

      {/* Contact Modal */}
      <LawyerContactModal lawyer={selectedLawyer} open={showContactModal} onClose={() => setShowContactModal(false)} />

      <MobileNav />
    </div>
  )
}
