import { Trophy, Star, ShieldCheck, Home } from "lucide-react";

const badges = [
  { icon: Trophy, text: "Thumbtack Top Pro" },
  { icon: Star, text: "5.0 Rating" },
  { icon: ShieldCheck, text: "Background Checked" },
  { icon: Home, text: "20+ Homes Served" },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/meet-rusty.png"
              alt="Meet Rusty — your Sacramento handyman"
              className="h-80 w-80 rounded-3xl object-cover shadow-sm"
            />
          </div>

          <div>
            <h2 className="font-heading text-3xl font-700 text-text sm:text-4xl">
              Meet Rusty
            </h2>
            <p className="mt-6 leading-relaxed text-text/70">
              Hi, I&apos;m Rustam — but everyone calls me Rusty. I&apos;m a
              Sacramento-based handyman who handles small to medium home
              repairs. From furniture assembly to picture mounting, door fixes
              to minor plumbing — I take care of the things that make your
              house feel like home.
            </p>
            <p className="mt-4 leading-relaxed text-text/70">
              I work neatly, protect your home, and always clean up after the
              job. When you call Rusty, you get Rusty — not a random contractor
              you&apos;ve never met.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {badges.map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-2 rounded-2xl bg-secondary px-4 py-2 text-sm font-500 text-text/70"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
