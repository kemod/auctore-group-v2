import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common";
import { FadeUp } from "@/components/motion";

const navigation = [
  {
    title: "Perusahaan",
    links: [
      {
        label: "Beranda",
        href: "/",
      },
      {
        label: "Tentang Kami",
        href: "/about",
      },
      {
        label: "Brand",
        href: "/brands",
      },
      {
        label: "Kontak",
        href: "/contact",
      },
    ],
  },
  {
    title: "Brand",
    links: [
      {
        label: "Jenn Aira",
        href: "/brands/jenn-aira",
      },
      {
        label: "Auctfits",
        href: "/brands/auctfits",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <FadeUp>
          <div className="grid gap-16 py-20 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}

            <div className="max-w-md">
              <h2 className="font-playfair text-4xl font-bold text-neutral-900 transition duration-300 hover:tracking-wide">
                Auctore
              </h2>

              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
                GROUP
              </p>

              <p className="mt-8 leading-8 text-neutral-600">
                Membangun berbagai brand fashion yang mengedepankan kualitas,
                inovasi, dan visi jangka panjang untuk menghadirkan nilai yang
                berkelanjutan bagi setiap pelanggan.
              </p>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-black transition hover:gap-3"
              >
                Mulai Berdiskusi

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* Navigation */}

            {navigation.map((section, index) => (
              <div key={section.title}>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-900">
                  {section.title}
                </h3>

                <ul className="space-y-4">
                  {section.links.map((item, linkIndex) => (
                    <FadeUp
                      key={item.label}
                      delay={(index * 0.1) + (linkIndex * 0.05)}
                    >
                      <li>
                        <Link
                          href={item.href}
                          className="group inline-flex items-center text-neutral-600 transition-all duration-300 hover:translate-x-1 hover:text-black"
                        >
                          {item.label}
                        </Link>
                      </li>
                    </FadeUp>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 py-8 text-sm text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Auctore Group. Seluruh hak cipta
            dilindungi.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-black"
            >
              Kebijakan Privasi
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-black"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}