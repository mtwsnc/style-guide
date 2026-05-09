import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-sans transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:     "bg-primary-green text-white border border-primary-green hover:bg-deep-forest-green hover:border-deep-forest-green",
        outline:     "border border-primary-green bg-transparent text-primary-green hover:bg-primary-green hover:text-white",
        secondary:   "bg-sandy-gold text-deep-forest-green border border-sandy-gold hover:brightness-95",
        ghost:       "bg-transparent text-gray-700 border border-transparent hover:bg-gray-100",
        destructive: "bg-red-700 text-white border border-red-700 hover:bg-red-800 hover:border-red-800",
        link:        "text-primary-green underline-offset-[3px] hover:underline border border-transparent bg-transparent px-1",
      },
      size: {
        default: "h-10 px-[18px] py-[9px]",
        sm:      "h-8 px-3 text-xs",
        lg:      "h-12 px-7 text-base",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
