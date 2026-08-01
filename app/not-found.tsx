import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Error 404
        </p>

        <h1 className="mt-6 font-playfair text-6xl font-bold text-neutral-900">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-600">
          Halaman yang Anda cari mungkin telah dipindahkan
          atau alamat yang dimasukkan tidak tersedia.
        </p>

        <Link
          href="/"
          className="mt-12 inline-flex h-14 items-center rounded-full bg-black px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}