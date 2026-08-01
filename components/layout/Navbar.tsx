"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/common";
import { navigation } from "@/constants";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <Container>
          <div
            className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
              isScrolled
                ? "h-16 border-white/40 bg-white/75 px-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
                : "h-20 border-neutral-200 bg-white/95 px-8 shadow-sm"
            }`}
          >
            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/images/brand/auctore-logo.png"
                alt="Auctore Group"
                width={isScrolled ? 38 : 42}
                height={isScrolled ? 38 : 42}
                priority
                className="transition-all duration-300"
              />

              <div className="hidden sm:block">
                <h1 className="font-playfair text-2xl font-bold leading-none">
                  Auctore
                </h1>

                <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                  GROUP
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-10 lg:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative text-[15px] transition-colors duration-300 ${
                      active
                        ? "font-semibold text-black"
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-2 left-1/2 h-[2px] rounded-full bg-black transition-all duration-300 ${
                        active
                          ? "w-full -translate-x-1/2"
                          : "w-0 -translate-x-1/2 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full bg-black px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Button */}

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="rounded-xl p-2 transition hover:bg-neutral-100 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-50 flex h-full w-[320px] flex-col bg-white p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-playfair text-2xl font-bold">
                  Menu
                </h2>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg p-2 transition hover:bg-neutral-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg transition-colors ${
                      pathname === item.href
                        ? "font-semibold text-black"
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:bg-neutral-800"
                >
                  Hubungi Kami
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}