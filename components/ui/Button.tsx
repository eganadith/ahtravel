import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export type ButtonVariant = "gold" | "outline-white" | "outline-navy" | "ghost";

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-navy hover:bg-gold/90 shadow-lg shadow-gold/20",
  "outline-white":
    "border-2 border-white/90 text-white hover:bg-white/10 backdrop-blur-sm",
  "outline-navy":
    "border-2 border-navy text-navy hover:bg-navy hover:text-warm-white",
  ghost: "text-navy hover:bg-navy/5",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
