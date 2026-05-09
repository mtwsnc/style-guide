import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        gold:        "bg-sandy-gold text-deep-forest-green",
        green:       "bg-primary-green text-white",
        outline:     "bg-transparent text-primary-green border border-primary-green",
        gray:        "bg-gray-100 text-gray-700",
        red:         "bg-red-100 text-red-800",
        blue:        "bg-blue-100 text-blue-800",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
