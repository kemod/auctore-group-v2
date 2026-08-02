import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface MarketplaceCardProps {
  logo: string;
  brand: string;
  marketplace: string;
  marketplaceIcon: string;
  marketplaceHref: string;
  instagramHref: string;
  hoverColor?: string;
}

export default function MarketplaceCard({
  logo,
  brand,
  marketplace,
  marketplaceIcon,
  marketplaceHref,
  instagramHref,
  hoverColor = "hover:border-neutral-900",
}: MarketplaceCardProps) {
  return (
    <article
      className={`group flex items-center justify-between rounded-3xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${hoverColor}`}
    >
      <Link
        href={marketplaceHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center gap-4"
      >
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50">
          <Image
            src={logo}
            alt={brand}
            fill
            sizes="56px"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-neutral-900">
            {brand}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <Image
              src={marketplaceIcon}
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />

            <span className="text-sm text-neutral-500">
              {marketplace}
            </span>
          </div>
        </div>

        <ExternalLink className="h-5 w-5 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </Link>

      <Link
        href={instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram ${brand}`}
        className="ml-5 rounded-xl p-2 transition hover:bg-neutral-100"
      >
        <Image
          src="/icons/Instagram.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}