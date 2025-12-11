"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, ChevronDown, Bookmark, BookmarkPlus, Mic, Calendar, Building, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LoadingState } from "@/components/ui/loading-state"

export default function CaseSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [bookmarkedCases, setBookmarkedCases] = useState<number[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false)
      setHasSearched(true)
    }, 1500)
  }

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const toggleBookmark = (caseId: number) => {
    if (bookmarkedCases.includes(caseId)) {
      setBookmarkedCases(bookmarkedCases.filter((id) => id !== caseId))
    } else {
      setBookmarkedCases([...bookmarkedCases, caseId])
    }
  }

  // Mock data for case search results
  const cases = [
    {
      id: 1,
      title: "Smith v. Johnson",
      court: "Supreme Court",
      year: 2021,
      summary:
        "This landmark case established new precedent for intellectual property disputes in software licensing agreements, particularly regarding implied warranties and limitation of liability clauses.",
      relevance: 98,
      risk: "low",
    },
    {
      id: 2,
      title: "Davis Corp v. Miller Inc",
      court: "9th Circuit",
      year: 2020,
      summary:
        "The court ruled that non-compete clauses extending beyond 18 months were presumptively unenforceable in the technology sector, citing unreasonable restraint on trade and employee mobility.",
      relevance: 92,
      risk: "medium",
    },
    {
      id: 3,
      title: "Wilson v. Tech Solutions",
      court: "Federal Circuit",
      year: 2019,
      summary:
        "This case addressed the enforceability of arbitration clauses in employment contracts, finding that overly broad clauses that prevent class actions may be unenforceable under certain state laws.",
      relevance: 87,
      risk: "high",
    },
    {
      id: 4,
      title: "Roberts v. Enterprise Systems",
      court: "2nd Circuit",
      year: 2022,
      summary:
        "The court upheld the enforceability of liquidated damages provisions in SaaS contracts, provided they represent a reasonable estimate of actual damages and are not punitive in nature.",
      relevance: 85,
      risk: "low",
    },
    {
      id: 5,
      title: "Thompson LLC v. Global Services",
      court: "Delaware Chancery",
      year: 2021,
      summary:
        "This case established guidelines for material adverse change clauses in acquisition agreements, particularly regarding the threshold for what constitutes a 'material' change in business conditions.",
      relevance: 82,
      risk: "medium",
    },
  ]

  // Filter options
  const filters = {
    court: ["Supreme Court", "Federal Circuit", "9th Circuit", "2nd Circuit", "Delaware Chancery"],
    year: ["2023", "2022", "2021", "2020", "2019", "Before 2019"],
    relevance: ["High to Low", "Low to High"],
    risk: ["High Risk", "Medium Risk", "Low Risk"],
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">AI-Powered Case Law Search</h1>
          <p className="text-muted-foreground">Find relevant legal precedents with our AI-powered search engine.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Search Case Law</CardTitle>
              <CardDescription>Find relevant legal precedents with our AI-powered search engine</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="flex flex-col gap-4">
                <div className="relative">
                  <div className="flex">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by legal issue, case name, or keywords..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button type="button" variant="outline" className="ml-2" size="icon">
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button type="submit" className="ml-2">
                      Search
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Try: "non-compete clause enforceability in California" or "data breach liability precedents"
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Court Type
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Select Courts</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {filters.court.map((court) => (
                          <DropdownMenuItem
                            key={court}
                            onClick={() => toggleFilter(court)}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={`h-4 w-4 rounded-sm border ${
                                activeFilters.includes(court) ? "bg-primary" : "bg-background"
                              }`}
                            />
                            <span>{court}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Year
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Select Years</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {filters.year.map((year) => (
                          <DropdownMenuItem
                            key={year}
                            onClick={() => toggleFilter(year)}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={`h-4 w-4 rounded-sm border ${
                                activeFilters.includes(year) ? "bg-primary" : "bg-background"
                              }`}
                            />
                            <span>{year}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Relevance
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Sort by Relevance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {filters.relevance.map((option) => (
                          <DropdownMenuItem
                            key={option}
                            onClick={() => toggleFilter(option)}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={`h-4 w-4 rounded-sm border ${
                                activeFilters.includes(option) ? "bg-primary" : "bg-background"
                              }`}
                            />
                            <span>{option}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Risk Level
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Filter by Risk</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {filters.risk.map((risk) => (
                          <DropdownMenuItem
                            key={risk}
                            onClick={() => toggleFilter(risk)}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={`h-4 w-4 rounded-sm border ${
                                activeFilters.includes(risk) ? "bg-primary" : "bg-background"
                              }`}
                            />
                            <span>{risk}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {activeFilters.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveFilters([])}
                      className="text-muted-foreground"
                    >
                      Clear Filters ({activeFilters.length})
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {isSearching && (
          <LoadingState
            title="Searching case law..."
            description="Our AI is analyzing thousands of cases to find the most relevant precedents"
          />
        )}

        {hasSearched && !isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Search Results</h2>
              <p className="text-sm text-muted-foreground">
                Found {cases.length} relevant cases for "{searchQuery}"
              </p>
            </div>

            {cases.map((caseItem) => (
              <Collapsible key={caseItem.id} className="w-full">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            caseItem.risk === "high"
                              ? "destructive"
                              : caseItem.risk === "medium"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {caseItem.risk === "high"
                            ? "High Risk"
                            : caseItem.risk === "medium"
                              ? "Medium Risk"
                              : "Low Risk"}
                        </Badge>
                        <Badge variant="outline" className="bg-primary/5">
                          {caseItem.relevance}% Match
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => toggleBookmark(caseItem.id)}>
                        {bookmarkedCases.includes(caseItem.id) ? (
                          <Bookmark className="h-4 w-4 text-primary" />
                        ) : (
                          <BookmarkPlus className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-3 w-3" />
                      <span>{caseItem.court}</span>
                      <span>•</span>
                      <Calendar className="h-3 w-3" />
                      <span>{caseItem.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm line-clamp-2">{caseItem.summary}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        View Details
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <Button size="sm">Read Full Case</Button>
                  </CardFooter>
                  <CollapsibleContent>
                    <div className="px-6 pb-4">
                      <div className="rounded-md bg-muted p-4">
                        <h4 className="mb-2 font-medium">AI-Generated Case Summary</h4>
                        <p className="text-sm">{caseItem.summary}</p>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-xs font-medium text-muted-foreground">Key Findings</h5>
                            <ul className="mt-1 list-disc pl-4 text-sm">
                              <li>Established precedent for similar contract disputes</li>
                              <li>Clarified interpretation of ambiguous clauses</li>
                              <li>Set standards for reasonable terms in the industry</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-medium text-muted-foreground">Application to Your Case</h5>
                            <ul className="mt-1 list-disc pl-4 text-sm">
                              <li>Similar factual circumstances</li>
                              <li>Comparable contractual language</li>
                              <li>Relevant jurisdiction and applicable law</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Add to Research
                          </Button>
                          <Button size="sm">Read Full Case</Button>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
}
