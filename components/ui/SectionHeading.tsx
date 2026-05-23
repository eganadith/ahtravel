import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-lato font-semibold text-navy",
          eyebrow ? "mt-3" : "",
          align === "center" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 leading-relaxed text-charcoal/70",
            align === "center" ? "text-lg md:text-xl" : "text-base md:text-lg"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
