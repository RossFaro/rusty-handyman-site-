"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-500 text-text/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+12797996872"
            className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-600 text-white transition-colors hover:bg-primary-dark"
          >
            Call Rusty
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-text" />
          ) : (
            <Menu className="h-6 w-6 text-text" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-t border-secondary bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-500 text-text/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+12797996872"
            className="mt-2 block rounded-2xl bg-primary px-5 py-2.5 text-center text-sm font-600 text-white transition-colors hover:bg-primary-dark"
          >
            Call Rusty
          </a>
        </nav>
      )}
    </header>
  );
}
