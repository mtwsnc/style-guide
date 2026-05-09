import * as React from "react"
import { cn } from "@/lib/utils"

interface QuranVerseBlockProps {
  arabic: string
  translation: string
  source: string
  /** "gold" uses UthmanicHafs + sandy-gold border (default); "green" uses 29LTRiwaya + primary-green border */
  variant?: "gold" | "green"
  className?: string
}

function QuranVerseBlock({
  arabic,
  translation,
  source,
  variant = "gold",
  className,
}: QuranVerseBlockProps) {
  const isGreen = variant === "green"

  return (
    <div
      className={cn(
        "border-l-4 px-6 py-4 bg-white rounded-r-lg",
        isGreen ? "border-primary-green" : "border-sandy-gold",
        className
      )}
    >
      <p
        dir="rtl"
        lang="ar"
        className={cn(
          "text-right text-deep-forest-green mb-2 leading-[1.8]",
          isGreen ? "font-riwaya text-[1.25rem]" : "font-uthmanic text-[1.75rem]"
        )}
      >
        {arabic}
      </p>
      <p className="italic text-gray-600 text-sm leading-relaxed mb-1">
        &ldquo;{translation}&rdquo;
      </p>
      <p className="text-xs text-olive-green font-medium">{source}</p>
    </div>
  )
}

export { QuranVerseBlock }
