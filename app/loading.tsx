import Image from "next/image";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <Image
          src="/images/brand/auctore-logo.png"
          alt="Auctore Group"
          width={72}
          height={72}
          priority
          className="animate-pulse"
        />

        <h1 className="mt-8 font-playfair text-4xl font-bold text-neutral-900">
          Auctore
        </h1>

        <p className="mt-2 text-xs uppercase tracking-[0.4em] text-neutral-500">
          GROUP
        </p>

        <div className="mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-neutral-200">
          <div className="loading-bar h-full w-full bg-black" />
        </div>
      </div>
    </main>
  );
}