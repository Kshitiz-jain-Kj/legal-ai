"use client"

import { useState } from "react"
import { ArrowLeftRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface StateComparisonModalProps {
  currentState: string
  section: string
  sectionTitle: string
}

const states = ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Gujarat", "Uttar Pradesh"]

export function StateComparisonModal({ currentState, section, sectionTitle }: StateComparisonModalProps) {
  const [compareState, setCompareState] = useState("")
  const [open, setOpen] = useState(false)

  // Mock data for different states
  const getStateData = (state: string) => {
    const data: Record<string, { penalty: string; notes: string; severity: string }> = {
      Maharashtra: {
        penalty: "Rs. 500-1,000 (first offense)",
        notes: "Online payment available. Compounding fee of Rs. 500.",
        severity: "medium",
      },
      Delhi: {
        penalty: "Rs. 750-1,500 (first offense)",
        notes: "Stricter enforcement. E-challan system mandatory.",
        severity: "medium",
      },
      Karnataka: {
        penalty: "Rs. 500-1,000 (first offense)",
        notes: "Special traffic tribunals in Bangalore.",
        severity: "low",
      },
      "Tamil Nadu": {
        penalty: "Rs. 500-1,000 (first offense)",
        notes: "Spot payment option available at certain locations.",
        severity: "medium",
      },
      Gujarat: {
        penalty: "Rs. 500-1,500 (first offense)",
        notes: "Online payment through state portal.",
        severity: "medium",
      },
      "Uttar Pradesh": {
        penalty: "Rs. 500-1,000 (first offense)",
        notes: "Payment through UP100 app.",
        severity: "low",
      },
    }
    return data[state] || { penalty: "Standard penalty", notes: "Contact local RTO", severity: "medium" }
  }

  const currentData = getStateData(currentState)
  const compareData = compareState ? getStateData(compareState) : null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <ArrowLeftRight className="h-4 w-4" />
          Compare States
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5 text-primary" />
            Compare {sectionTitle}
          </DialogTitle>
          <DialogDescription>See how this section applies differently across states</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* State Selector */}
          <div>
            <label className="text-sm font-medium mb-2 block">Compare with:</label>
            <Select value={compareState} onValueChange={setCompareState}>
              <SelectTrigger>
                <SelectValue placeholder="Select a state to compare" />
              </SelectTrigger>
              <SelectContent>
                {states
                  .filter((s) => s !== currentState)
                  .map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Current State */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {currentState}
                  <Badge variant="secondary" className="ml-auto">
                    Current
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Penalty</p>
                  <p className="text-sm font-medium">{currentData.penalty}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Notes</p>
                  <p className="text-sm">{currentData.notes}</p>
                </div>
              </CardContent>
            </Card>

            {/* Compare State */}
            {compareData ? (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    {compareState}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Penalty</p>
                    <p className="text-sm font-medium">{compareData.penalty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Notes</p>
                    <p className="text-sm">{compareData.notes}</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="flex items-center justify-center">
                <CardContent className="text-center py-8">
                  <p className="text-muted-foreground text-sm">Select a state to compare</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
