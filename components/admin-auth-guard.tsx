"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Shield } from "lucide-react"

interface AdminAuthGuardProps {
  children: React.ReactNode
}

export function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("admin_token")

      if (!token) {
        router.push("/admin/login")
        return
      }

      try {
        const response = await fetch("/api/admin/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        })

        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem("admin_token")
          router.push("/admin/login")
        }
      } catch (error) {
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center matrix-bg">
        <div className="text-center space-y-4">
          <div className="mx-auto h-12 w-12 red-gradient rounded-lg flex items-center justify-center animate-red-glow">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div className="flex items-center gap-2 text-white font-mono">
            <Loader2 className="h-4 w-4 animate-spin text-tech-red" />
            Verifying access...
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
