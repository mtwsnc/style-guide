"use client"

import { ExternalLink, Globe } from "lucide-react"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface LiveSite {
  title: string
  url: string
  description: string
}

const liveSites: LiveSite[] = [
  {
    title: "Main Website",
    url: "mtws.org",
    description: "Community hub and worship information",
  },
  {
    title: "Seminars & Events Site",
    url: "mtws.one",
    description: "Educational seminars and community events",
  },
  {
    title: "Da'wah Portal",
    url: "dawah.mtws.one",
    description: "Islamic outreach and educational resources",
  },
]

export const LiveSitesPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close popover on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const handleSiteClick = (url: string) => {
    window.open(`https://${url}`, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-sm transition-all duration-200 ${
          isOpen
            ? "bg-primary-green text-white shadow-md"
            : "text-gray-700 hover:bg-gray-50 hover:text-primary-green"
        }
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="View live MTWS websites"
      >
        <Globe className="h-4 w-4" />
        Live Sites
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="fade-in-0 zoom-in-95 slide-in-from-top-2 absolute top-full left-0 z-50 mt-2 w-80 animate-in rounded-xl border border-gray-200 bg-white py-2 shadow-xl duration-200"
          role="menu"
          aria-label="Live MTWS websites"
        >
          <div className="border-gray-100 border-b px-4 py-3">
            <h3 className="font-semibold text-gray-900 text-sm">MTWS Digital Ecosystem</h3>
            <p className="mt-1 text-gray-500 text-xs">Access our live websites</p>
          </div>

          <div className="py-2">
            {liveSites.map((site, index) => (
              <button
                key={index}
                onClick={() => handleSiteClick(site.url)}
                className="group w-full px-4 py-3 text-left transition-colors duration-150 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                role="menuitem"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <h4 className="font-medium text-gray-900 text-sm transition-colors group-hover:text-primary-green">
                        {site.title}
                      </h4>
                      <ExternalLink className="h-3 w-3 text-gray-400 transition-colors group-hover:text-primary-green" />
                    </div>
                    <p className="mb-1 text-gray-500 text-xs">{site.description}</p>
                    <p className="inline-block rounded bg-primary-green/10 px-2 py-1 font-mono text-primary-green text-xs">
                      {site.url}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="border-gray-100 border-t px-4 py-2">
            <p className="text-center text-gray-400 text-xs">Click any site to open in a new tab</p>
          </div>
        </div>
      )}
    </div>
  )
}
