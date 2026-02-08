"use client";

import { Phone, MessageCircle, Clock, CreditCard } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-700 text-text sm:text-4xl">
          Ready to Get It Fixed?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-text/60">
          Call, text, or message me. I respond fast — usually within minutes.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <a
              href="tel:+12797996872"
              className="block text-center text-3xl font-800 text-primary hover:text-primary-dark sm:text-4xl"
            >
              (279) 799-6872
            </a>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+12797996872"
                className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 font-600 text-white transition-colors hover:bg-accent-dark"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href="sms:+12797996872"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary px-6 py-3 font-600 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
                Text Me
              </a>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-text/60">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Available 7 days a week, 8AM – 8PM
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" />
                Cash &middot; Zelle &middot; Venmo &middot; Cash App
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mykdylwl"
            method="POST"
            className="rounded-3xl bg-white p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-500 text-text/70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-secondary bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-500 text-text/70">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 w-full rounded-xl border border-secondary bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-500 text-text/70">
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="mt-1 w-full rounded-xl border border-secondary bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-500 text-text/70">
                  Preferred date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 w-full rounded-xl border border-secondary bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-primary py-3 font-600 text-white transition-colors hover:bg-primary-dark"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
