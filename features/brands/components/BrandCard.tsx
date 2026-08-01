import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BrandCardProps {
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function BrandCard({
  name,
  description,
  image,
  href,
}: BrandCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[36px] border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="text-xs uppercase tracking-[0.3em] opacity-80">
            Fashion Brand
          </p>

          <h3 className="mt-3 font-playfair text-4xl font-bold">
            {name}
          </h3>

          <p className="mt-4 max-w-sm leading-7 text-white/80">
            {description}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
            Explore Brand

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}