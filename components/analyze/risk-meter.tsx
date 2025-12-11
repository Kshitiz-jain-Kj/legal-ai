"use client"

import { motion } from "framer-motion"

interface RiskMeterProps {
  level: "low" | "medium" | "high"
  score: number
}

export function RiskMeter({ level, score }: RiskMeterProps) {
  const color = level === "low" ? "text-accent" : level === "medium" ? "text-amber-500" : "text-destructive"
  const bgColor = level === "low" ? "bg-accent" : level === "medium" ? "bg-amber-500" : "bg-destructive"
  const label = level === "low" ? "Low Risk" : level === "medium" ? "Medium Risk" : "High Risk"

  return (
    <div className="flex flex-col items-center">
      <div className="text-sm text-muted-foreground mb-2">Risk Level</div>
      <div className="relative h-24 w-24">
        {/* Background circle */}
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted/30" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={color}
            strokeDasharray={`${2 * Math.PI * 40}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - score / 100) }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-2xl font-bold ${color}`}>{score}</span>
        </div>
      </div>
      <div className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${bgColor} text-white`}>{label}</div>
    </div>
  )
}
