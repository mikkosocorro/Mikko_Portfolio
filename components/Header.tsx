"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-glow sm:text-xl"
        >
          Mikko Socorro
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative inline-block py-2 text-sm font-medium transition-colors duration-300 ${
                      active ? "text-glow" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-glow transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-50"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-glow hover:text-glow md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-white/10 bg-ink/95 transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="min-h-0">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    tabIndex={open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-white/5 py-4 text-2xl font-bold tracking-tight transition-colors ${
                      active ? "text-glow" : "text-white hover:text-glow"
                    }`}
                  >
                    <span className="relative">
                      {link.label}
                      {active && (
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-glow" />
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
