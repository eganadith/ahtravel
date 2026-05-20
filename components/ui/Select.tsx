import { cn } from "@/lib/utils";
import { forwardRef, type SelectHTMLAttributes } from "react";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full appearance-none rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";
