"use client"

import type * as React from "react"
import {
  Home,
  FolderOpen,
  BookOpen,
  Mail,
  Settings,
  Github,
  Linkedin,
  Twitter,
  Code,
  Database,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// Navigation items
const navItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
]


// Social links
const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/ApurvaMalasi23",
    icon: Github,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/apurvamalasi",
    icon: Linkedin,
  },
  {
    title: "Twitter",
    url: "https://x.com/apurvamalasi10",
    icon: Twitter,
  },
]

// Tech stats
const techStats = [
  { label: "Projects", value: "5+", icon: Code },
  { label: "Technologies", value: "15+", icon: Database },
  { label: "Experience", value: "1+ Years", icon: Zap },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" {...props} className="sidebar-gradient border-r border-tech-red/30">
      <SidebarHeader className="border-b border-tech-red/20 pb-4">
        <div className="flex items-center space-x-3 px-4 py-2">
          <div className="h-10 w-10 red-gradient rounded-lg flex items-center justify-center animate-red-glow">
            <span className="text-white font-bold text-lg font-mono">AM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white">Apurva Malasi</span>
            <span className="text-sm text-tech-red font-mono">ML Engineer</span>
          </div>
        </div>

        {/* Status indicator */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-tech-red rounded-full animate-pulse-red"></div>
            <span className="text-white/80 font-mono">Available for work</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-tech-red font-mono text-xs uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="hover:bg-tech-red/10 hover:text-tech-red data-[active=true]:bg-tech-red data-[active=true]:text-white font-mono"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tech Stats */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-mono text-xs uppercase tracking-wider">Stats</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2 px-2">
              {techStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between p-2 rounded-md bg-tech-black-light/50 border border-tech-red/20"
                >
                  <div className="flex items-center gap-2">
                    <stat.icon className="h-4 w-4 text-tech-red" />
                    <span className="text-sm font-mono text-white/80">{stat.label}</span>
                  </div>
                  <span className="text-sm font-mono text-tech-red font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-tech-red/20 pt-4">
        {/* Social Links */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/60 font-mono text-xs uppercase tracking-wider">
            Connect
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex justify-center gap-2 px-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.title}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-8 w-8 hover:bg-tech-red/20 hover:text-tech-red"
                >
                  <Link href={link.url} target="_blank">
                    <link.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer info */}
        <div className="px-4 py-2 text-center">
          <p className="text-xs text-white/40 font-mono">Built with Next.js & TypeScript</p>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
