import { MessageSquare, Calculator, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Describe Your Project",
    desc: "Send me a message or call. Tell me what needs fixing — photos help!",
  },
  {
    icon: Calculator,
    step: "2",
    title: "Get an Estimate",
    desc: "I'll review the details and give you a clear price range. No hidden fees, no surprises.",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "I Show Up & Get It Done",
    desc: "I arrive on time, do the work, clean up, and make sure you're happy before I leave.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-700 text-text sm:text-4xl">
          Getting Help Is Easy
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-700 text-white">
                {item.step}
              </div>
              <h3 className="mt-3 font-heading text-lg font-700 text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
