import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes } from "react";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[140px] w-full resize-y rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal transition-colors placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
