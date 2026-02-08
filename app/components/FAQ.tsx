"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What's your minimum charge?",
    a: "$150 for standard work (assembly, mounting, painting, repairs). $175 for electrical and plumbing.",
  },
  {
    q: "Do you provide materials?",
    a: "I can pick up everything you need. Materials at cost, no markup. I always provide receipts.",
  },
  {
    q: "How fast can you come?",
    a: "Most jobs scheduled within 1–2 days. Same-day availability for urgent requests when possible.",
  },
  {
    q: "What areas do you serve?",
    a: "Sacramento and surrounding areas within a 30-minute drive — Elk Grove, Rancho Cordova, Folsom, Roseville, and more.",
  },
  {
    q: "Do you have a license?",
    a: "As a handyman in California, I handle jobs under $500 which don't require a contractor's license. For larger projects, I'm happy to recommend a licensed specialist.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "Cash, Zelle, Venmo, and Cash App.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-heading text-3xl font-700 text-text sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-600 text-text">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-text/40 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-sm leading-relaxed text-text/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
