"use client";

import { Phone } from "lucide-react";

export default function MobileCallButton() {
  return (
    <a
      href="tel:+12797996872"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform hover:scale-105 md:hidden"
      aria-label="Call Rusty"
    >
      <Phone className="h-6 w-6 text-white" />
    </a>
  );
}
