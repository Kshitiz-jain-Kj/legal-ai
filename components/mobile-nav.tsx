"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Upload, History, MessageSquare, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MobileNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: "/", icon: Home, label: t.nav.home },
    { href: "/analyze", icon: Upload, label: t.nav.analyze },
    { href: "/lawyers", icon: Users, label: t.nav.lawyers },
    { href: "/saved-cases", icon: History, label: t.nav.savedCases },
    { href: "/chat", icon: MessageSquare, label: t.nav.chat },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
