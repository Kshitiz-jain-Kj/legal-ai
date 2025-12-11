"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for solo practitioners and small firms.",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "AI-powered legal research",
        "Contract analysis (up to 50/month)",
        "Basic case law search",
        "Email support",
        "1 user",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing law firms and legal departments.",
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      features: [
        "Everything in Starter",
        "Contract analysis (up to 200/month)",
        "Advanced case law search",
        "Predictive legal analysis",
        "Priority support",
        "5 users",
      ],
    },
    {
      name: "Enterprise",
      description: "For large firms with complex legal needs.",
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        "Everything in Professional",
        "Unlimited contract analysis",
        "Custom AI training",
        "API access",
        "Dedicated account manager",
        "Unlimited users",
      ],
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the plan that's right for your practice. All plans include a 14-day free trial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center mt-8 space-x-2"
          >
            <Label
              htmlFor="billing-toggle"
              className={billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}
            >
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "annual"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
            />
            <Label
              htmlFor="billing-toggle"
              className={billingCycle === "annual" ? "font-medium" : "text-muted-foreground"}
            >
              Annual <span className="text-xs text-primary ml-1">(Save 20%)</span>
            </Label>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${plan.popular ? "border-primary shadow-md relative" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-muted-foreground ml-2">/ month</span>
                    {billingCycle === "annual" && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Billed annually (${billingCycle === "monthly" ? plan.monthlyPrice * 12 : plan.annualPrice * 12}
                        /year)
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
