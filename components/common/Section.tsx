import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "stone" | "black";
}

export default function Section({
  children,
  className,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    stone: "bg-stone-50",
    black: "bg-black text-white",
  };

  return (
    <section
      className={cn(
        "relative py-36",
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
}