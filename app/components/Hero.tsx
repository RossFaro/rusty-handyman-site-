"use client";

import { Phone, ArrowDown, Star, ShieldCheck, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-secondary px-4 py-12 sm:px-6 sm:py-20 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text side */}
        <div className="animate-fade-in-left text-center lg:text-left">
          <h1 className="font-heading text-4xl font-800 leading-tight text-text sm:text-5xl lg:text-6xl">
            Your Trusted
            <br />
            Sacramento
            <br />
            <span className="text-primary">Handyman</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text/70">
            From furniture assembly to minor electrical and plumbing — I handle
            the small stuff so you don&apos;t have to. Fast response, fair
            pricing, and I always clean up after the job.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-8 py-3.5 text-base font-600 text-white shadow-md transition-all hover:bg-accent-dark hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Get a Free Estimate
            </a>
            <a
              href="#reviews"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary px-8 py-3.5 text-base font-600 text-primary transition-all hover:bg-primary hover:text-white hover:scale-105"
            >
              <ArrowDown className="h-5 w-5" />
              See My Work
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm font-500 text-text/60 lg:justify-start">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              5.0 on Thumbtack
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              Background Checked
            </span>
            <span className="flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-primary" />
              Top Pro
            </span>
          </div>
        </div>

        {/* Logo / Image side */}
        <div className="flex justify-center lg:justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-logo.png"
            alt="Trusty Rusty — Sacramento Handyman"
            className="w-72 animate-hero-logo drop-shadow-xl transition-transform duration-300 hover:scale-105 sm:w-80 lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
