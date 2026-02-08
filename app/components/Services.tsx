import {
  Wrench,
  Sofa,
  Tv,
  Lightbulb,
  Droplets,
  Paintbrush,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    desc: "Door fixes, window repairs, shelving, molding, drywall patching, and all those little things around the house that need attention.",
  },
  {
    icon: Sofa,
    title: "Furniture & Equipment Assembly",
    desc: "IKEA, Amazon, Wayfair — you name it. Beds, desks, dressers, bookshelves, fitness equipment. I bring the tools and patience.",
  },
  {
    icon: Tv,
    title: "TV & Picture Mounting",
    desc: "TV mounting on any wall type (drywall, brick, concrete). Picture hanging and art installation. Flat rate available for standard TV mounts.",
  },
  {
    icon: Lightbulb,
    title: "Minor Electrical",
    desc: "Outlets, switches, light fixtures, ceiling fans. Safe, professional troubleshooting when things stop working.",
  },
  {
    icon: Droplets,
    title: "Minor Plumbing",
    desc: "Faucets, toilets, clogs, shutoff valves. Quick fixes to keep your home running smoothly.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Finishing",
    desc: "Interior painting, touch-ups, drywall finishing. I work neatly and protect your furniture and floors.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-700 text-text sm:text-4xl">
          What I Can Help With
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-heading text-lg font-700 text-text">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text/60">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-text/60">
          Don&apos;t see your project? Just ask — I probably can help!{" "}
          <a
            href="#contact"
            className="font-600 text-primary underline-offset-2 hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}
