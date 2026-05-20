import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal transition-colors placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
