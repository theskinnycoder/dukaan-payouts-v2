import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import * as React from "react"

const inputVariants = cva(
  "flex h-10 w-full rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 text-neutral-800",
  {
    variants: {
      variant: {
        gray: "bg-muted placeholder:text-primary/40",
        outline:
          "bg-transparent border border-border placeholder:text-primary/30",
      },
    },
    defaultVariants: {
      variant: "gray",
    },
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
