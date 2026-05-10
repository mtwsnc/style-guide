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
        "rounded-r-lg border-l-4 bg-white px-6 py-4",
        isGreen ? "border-primary-green" : "border-sandy-gold",
        className,
      )}
    >
      <p
        dir="rtl"
        lang="ar"
        className={cn(
          "mb-2 text-right text-deep-forest-green leading-[1.8]",
          isGreen ? "font-riwaya text-[1.25rem]" : "font-uthmanic text-[1.75rem]",
        )}
      >
        {arabic}
      </p>
      <p className="mb-1 text-gray-600 text-sm italic leading-relaxed">
        &ldquo;{translation}&rdquo;
      </p>
      <p className="font-medium text-olive-green text-xs">{source}</p>
    </div>
  )
}

export { QuranVerseBlock }
