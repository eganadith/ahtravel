import { LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
};

export function Logo({ className, height = 44, priority = false }: LogoProps) {
  return (
    <Image
      src={LOGO.src}
      alt="A&H Travel and Tourism LLC"
      width={LOGO.width}
      height={LOGO.height}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ height, width: "auto" }}
      priority={priority}
    />
  );
}
