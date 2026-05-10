"use client"

import { BookOpen, Component, Home, Menu, Palette, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { cn } from "@/lib/utils"
import { LiveSitesPopover } from "./LiveSitesPopover"

const navigationItems = [
  { name: "Overview", href: "/", icon: Home },
  { name: "Foundations", href: "/foundations", icon: Palette },
  { name: "Components", href: "/components", icon: Component },
  { name: "Principles", href: "/principles", icon: BookOpen },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/assets/brand/logos/logo.png"
                alt="MTWS Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-bold text-deep-forest-green text-xl">MTWS Design System</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 rounded-lg px-4 py-2 font-medium text-sm transition-all duration-200",
                    pathname === item.href
                      ? "bg-primary-green text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <LiveSitesPopover />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-gray-200 border-t py-4 md:hidden">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg px-4 py-3 font-medium text-sm transition-all duration-200",
                      pathname === item.href
                        ? "bg-primary-green text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    )}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              <div className="mt-4 border-gray-200 border-t px-4 pt-4">
                <LiveSitesPopover />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
