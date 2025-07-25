import type React from "react"
import type { Metadata } from "next"
import ClientRootLayout from "./client-layout"

export const metadata: Metadata = {
  title: "Apurva Malasi - ML Engineer & Full-Stack Developer",
  description: "Personal portfolio showcasing machine learning and software development projects",
  keywords: ["machine learning", "web development", "portfolio", "AI", "full-stack"],
  authors: [{ name: "Apurva Malasi" }],
  openGraph: {
    title: "Apurva Malasi - ML Engineer & Full-Stack Developer",
    description: "Personal portfolio showcasing machine learning and software development projects",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientRootLayout children={children} />
}


import './globals.css'
