import Link from "next/link";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-black text-white hover:-translate-y-0.5 hover:bg-neutral-800"
          : "border border-neutral-300 bg-white text-neutral-900 hover:border-black hover:bg-neutral-50",
        className
      )}
    >
      {children}
    </Link>
  );
}