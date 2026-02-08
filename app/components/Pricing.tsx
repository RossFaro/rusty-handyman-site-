import { DollarSign, Zap, Tag } from "lucide-react";

const plans = [
  {
    icon: DollarSign,
    title: "Standard Work",
    rate: "$65/hr",
    minimum: "$150 minimum",
    items: [
      "Furniture assembly",
      "TV & picture mounting",
      "Painting & touch-ups",
      "Minor repairs & fixes",
    ],
  },
  {
    icon: Zap,
    title: "Skilled Trade",
    rate: "$85/hr",
    minimum: "$175 minimum",
    items: [
      "Electrical work",
      "Plumbing repairs",
      "Diagnostics",
      "Specialized tools included",
    ],
  },
  {
    icon: Tag,
    title: "Flat Rate Specials",
    rate: "Fixed Price",
    minimum: "No hourly surprises",
    items: [
      "TV mount: $120–150",
      "Furniture assembly: $120–140",
      "Best value for common jobs",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-700 text-text sm:text-4xl">
          Transparent Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-text/60">
          I believe in clear, upfront pricing. Here&apos;s how it works:
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <plan.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-heading text-lg font-700 text-text">
                {plan.title}
              </h3>
              <p className="mt-1 text-2xl font-800 text-accent">{plan.rate}</p>
              <p className="text-sm text-text/50">{plan.minimum}</p>
              <ul className="mt-4 space-y-2">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text/70"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-secondary p-6 text-sm leading-relaxed text-text/70">
          <p>
            <strong className="text-text">Why two rates?</strong> Standard work
            covers everyday tasks like assembly and mounting. Skilled trade
            covers electrical and plumbing — these require specialized tools,
            diagnostic expertise, and extra care to get right. Either way,
            I&apos;ll always confirm the price before starting.
          </p>
          <p className="mt-3 text-xs text-text/50">
            Materials billed at cost (receipts provided). Diagnostic visit: $75
            (applied to total if you hire me).
          </p>
        </div>
      </div>
    </section>
  );
}
