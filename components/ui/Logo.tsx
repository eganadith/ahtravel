import { LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
  /** Match navbar: "light" = white/light header bg, "dark" = transparent over hero */
  background?: "light" | "dark";
};

export function Logo({
  className,
  height = 44,
  priority = false,
  background = "dark",
}: LogoProps) {
  const showOnLight = background === "light";

  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      style={{ height, width: height * (LOGO.onDark.width / LOGO.onDark.height) }}
    >
      <Image
        src={LOGO.onDark.src}
        alt="A&H Travel and Tourism LLC"
        width={LOGO.onDark.width}
        height={LOGO.onDark.height}
        className={cn(
          "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-in-out",
          showOnLight ? "opacity-0" : "opacity-100"
        )}
        priority={priority}
        aria-hidden={showOnLight}
      />
      <Image
        src={LOGO.onLight.src}
        alt="A&H Travel and Tourism LLC"
        width={LOGO.onLight.width}
        height={LOGO.onLight.height}
        className={cn(
          "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-in-out",
          showOnLight ? "opacity-100" : "opacity-0"
        )}
        priority={priority}
        aria-hidden={!showOnLight}
      />
    </span>
  );
}
