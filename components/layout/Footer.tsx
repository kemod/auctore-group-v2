import Link from "next/link";

import { Container } from "@/components/common";

const navigation = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Brands", href: "/brands" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Jenn Aira", href: "/brands/jenn-aira" },
      { label: "Auctfits", href: "/brands/auctfits" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <h2 className="font-playfair text-4xl font-bold text-neutral-900">
              Auctore
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
              Group
            </p>

            <p className="mt-8 max-w-md leading-8 text-neutral-600">
              Building timeless fashion brands through thoughtful
              craftsmanship, innovation, and long-term vision.
            </p>
          </div>

          {/* Company */}

          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-neutral-600 transition hover:text-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 py-8 text-sm text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Auctore Group. All rights
            reserved.
          </p>

          <p>Designed & Developed by Auctore Group.</p>
        </div>
      </Container>
    </footer>
  );
}