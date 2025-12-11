"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import {
  ArrowRight,
  Upload,
  Lock,
  Scale,
  History,
  Eye,
  ArrowLeftRight,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LandingHero } from "@/components/landing/landing-hero"
import { TrustBadges } from "@/components/landing/trust-badges"
import { MobileNav } from "@/components/mobile-nav"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const { t } = useLanguage()

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col pb-20 md:pb-0">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LegalEase AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/law-of-the-day"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <Sparkles className="h-4 w-4" />
              {t.nav.lawOfTheDay}
            </Link>
            <Link href="/compare" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.compareStates}
            </Link>
            <Link
              href="/quiz"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <GraduationCap className="h-4 w-4" />
              {t.nav.quiz}
            </Link>
            <Link
              href="/lawyers"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <Users className="h-4 w-4" />
              {t.nav.findLawyers}
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.privacy}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/saved-cases">
              <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
                <History className="h-4 w-4" />
                {t.nav.savedCases}
              </Button>
            </Link>
            <Link href="/analyze">
              <Button size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                <span className="hidden sm:inline">{t.nav.analyzeDocument}</span>
                <span className="sm:hidden">Start</span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <LandingHero />

        {/* Trust Badges */}
        <TrustBadges />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <Badge variant="secondary" className="mb-4">
                {t.cta.badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">{t.cta.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/analyze">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Upload className="h-5 w-5" />
                    {t.cta.uploadButton}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                    <Eye className="h-5 w-5" />
                    {t.cta.demoButton}
                  </Button>
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/compare">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ArrowLeftRight className="h-4 w-4" />
                    {t.cta.compareButton}
                  </Button>
                </Link>
                <Link href="/law-of-the-day">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    {t.cta.lawOfDayButton}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Scale className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">LegalEase AI</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{t.footer.tagline}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-accent" />
                <span>{t.footer.securePrivate}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.product}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/analyze" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.analyzeDocument}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/law-of-the-day"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Sparkles className="h-3 w-3" />
                    {t.nav.lawOfTheDay}
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.compareStates}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quiz"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <GraduationCap className="h-3 w-3" />
                    {t.nav.quiz}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lawyers"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Users className="h-3 w-3" />
                    {t.nav.findLawyers}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.legal}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.terms}
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.disclaimer}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.support}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.faq}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.helpCenter}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground mb-2">{t.footer.informational}</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
