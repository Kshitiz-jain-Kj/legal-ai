"use client"

import type { ReactNode } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { MainNav } from "@/components/layout/main-nav"
import { SiteHeader } from "@/components/layout/site-header"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/30">
        <MainNav />
        <div className="flex-1 overflow-auto">
          <SiteHeader />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
