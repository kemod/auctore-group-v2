import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Background Glow */}
      <div className="absolute -top-16 -right-16 -z-10 h-72 w-72 rounded-full bg-stone-100 blur-3xl" />

      <div className="absolute -bottom-16 -left-16 -z-10 h-56 w-56 rounded-full bg-neutral-100 blur-3xl" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        <Image
          src="/images/hero/hero-editorial.webp"
          alt="Auctore Group"
          width={900}
          height={1125}
          priority
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      {/* Floating Card */}
      <div className="absolute -bottom-8 -left-8 hidden rounded-3xl border border-neutral-200 bg-white/95 p-6 shadow-2xl backdrop-blur-md lg:block">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Featured Brands
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between gap-10">
            <span className="text-sm text-neutral-700">
              Jenn Aira
            </span>

            <span className="font-semibold">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between gap-10">
            <span className="text-sm text-neutral-700">
              Auctfits
            </span>

            <span className="font-semibold">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}