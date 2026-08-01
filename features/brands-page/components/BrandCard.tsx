import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BrandCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export default function BrandCard({
  name,
  category,
  description,
  image,
  href,
}: BrandCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[36px] border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            {category}
          </span>

          <h3 className="mt-3 font-playfair text-4xl font-bold text-white">
            {name}
          </h3>

          <p className="mt-5 leading-7 text-white/85">
            {description}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
            Explore Brand

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}