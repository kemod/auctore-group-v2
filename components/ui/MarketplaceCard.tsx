import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface MarketplaceCardProps {
  logo: string;
  brand: string;
  marketplace: string;
  href: string;
  hoverColor?: string;
}

export default function MarketplaceCard({
  logo,
  brand,
  marketplace,
  href,
  hoverColor = "hover:border-neutral-900",
}: MarketplaceCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between rounded-3xl border border-neutral-200 bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${hoverColor}`}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50">
          <Image
            src={logo}
            alt={brand}
            fill
            sizes="56px"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">
            {brand}
          </h3>

          <p className="mt-1 text-sm text-neutral-500">
            {marketplace}
          </p>
        </div>
      </div>

      <ExternalLink className="h-5 w-5 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </Link>
  );
}