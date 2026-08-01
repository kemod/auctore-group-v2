import { cn } from "@/lib/utils";

interface HeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function Heading({
  eyebrow,
  title,
  description,
  align = "center",
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-6 font-playfair text-5xl font-bold leading-tight text-neutral-900 md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 text-lg leading-8 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}