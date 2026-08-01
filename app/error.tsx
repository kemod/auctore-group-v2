"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  reset,
}: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Terjadi Kesalahan
        </p>

        <h1 className="mt-6 font-playfair text-6xl font-bold text-neutral-900">
          Mohon Maaf
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-600">
          Terjadi kesalahan saat memuat halaman ini.
          Silakan coba kembali.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex h-14 items-center rounded-full bg-black px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
          >
            Coba Lagi
          </button>

          <Link
            href="/"
            className="inline-flex h-14 items-center rounded-full border border-neutral-300 px-8 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-black hover:bg-neutral-50"
          >
            Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}