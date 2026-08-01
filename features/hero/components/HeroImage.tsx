import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Background Glow */}
      <div className="absolute -top-16 -right-16 -z-10 h-72 w-72 rounded-full bg-stone-100 blur-3xl" />

      <div className="absolute -bottom-16 -left-16 -z-10 h-56 w-56 rounded-full bg-neutral-100 blur-3xl" />

      {/* Hero Image */}
      <div className="relative overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        <Image
          src="/images/hero/hero-editorial.png"
          alt="Auctore Group"
          width={900}
          height={1125}
          priority
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
    </div>
  );
}