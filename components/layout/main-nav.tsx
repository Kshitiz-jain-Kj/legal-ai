"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, BookOpen, BarChart3, MessageSquare, Users, Shield, Settings, User, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Document Review",
      href: "/document-review",
      icon: FileText,
    },
    {
      name: "Case Research",
      href: "/case-search",
      icon: BookOpen,
    },
    {
      name: "Predictive Analysis",
      href: "/predictive-analysis",
      icon: BarChart3,
    },
    {
      name: "Legal Chatbot",
      href: "/legal-chatbot",
      icon: MessageSquare,
    },
    {
      name: "Team Collaboration",
      href: "/collaboration",
      icon: Users,
    },
    {
      name: "Security & Compliance",
      href: "/security",
      icon: Shield,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-primary-foreground">LA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">LegalAI</span>
            <span className="text-xs text-muted-foreground">AI Legal Platform</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton isActive={pathname === route.href} tooltip={route.name} asChild>
                    <Link href={route.href}>
                      <route.icon className="h-4 w-4" />
                      <span>{route.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Profile" asChild>
              <Link href="/profile">
                <User className="h-4 w-4" />
                <span>John Smith</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Log Out" asChild>
              <Link href="/logout">
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
