import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: 
          "relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-[0_20px_35px_rgba(76,_111,_239,_0.3)] hover:shadow-[0_20px_35px_rgba(76,_111,_239,_0.5)] hover:-translate-y-1 border border-white/20 backdrop-blur-xl",
        
        modern: 
          "relative px-6 py-3 bg-black text-white rounded-xl shadow-[0_20px_35px_rgba(0,_0,_0,_0.3)] hover:shadow-[0_20px_35px_rgba(0,_0,_0,_0.5)] hover:-translate-y-1 border border-white/20 backdrop-blur-xl",
        
        gradient: 
          "relative px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl shadow-[0_20px_35px_rgba(99,_102,_241,_0.3)] hover:shadow-[0_20px_35px_rgba(99,_102,_241,_0.5)] hover:-translate-y-1 border border-white/20 backdrop-blur-xl",
        
        shine: 
          "group relative px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl shadow-[0_20px_35px_rgba(99,_102,_241,_0.3)] overflow-hidden border border-white/20 backdrop-blur-xl hover:-translate-y-1 [&>span]:relative [&>span]:z-10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/40 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 before:ease-in-out",
        
        glow: 
          "group relative px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl overflow-hidden border border-white/20 backdrop-blur-xl hover:-translate-y-1 shadow-[0_20px_35px_rgba(99,_102,_241,_0.3)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-600 before:to-indigo-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity [&>span]:relative [&>span]:z-10",
        
        outline:
          "relative px-6 py-3 bg-white/10 backdrop-blur-xl text-gray-900 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50/80 hover:-translate-y-1 shadow-[0_20px_35px_rgba(0,_0,_0,_0.1)] hover:shadow-[0_20px_35px_rgba(0,_0,_0,_0.2)]",
        
        glass: 
          "relative px-6 py-3 bg-white/10 backdrop-blur-xl text-white rounded-xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 shadow-[0_20px_35px_rgba(255,_255,_255,_0.1)] hover:shadow-[0_20px_35px_rgba(255,_255,_255,_0.2)]",
      },
      size: {
        default: "h-11 text-base",
        sm: "h-9 text-sm rounded-lg",
        lg: "h-12 text-lg rounded-xl",
        xl: "h-14 text-xl rounded-2xl",
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