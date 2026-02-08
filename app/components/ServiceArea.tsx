import { MapPin } from "lucide-react";

const areas = [
  "Sacramento",
  "Elk Grove",
  "Rancho Cordova",
  "Citrus Heights",
  "Folsom",
  "Rocklin",
  "Fair Oaks",
  "Roseville",
  "Wilton",
];

export default function ServiceArea() {
  return (
    <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-3xl font-700 text-text sm:text-4xl">
          Serving Sacramento & Surrounding Areas
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 rounded-2xl bg-white px-4 py-2 text-sm font-500 text-text/70 shadow-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {area}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm text-text/50">
          Not sure if I cover your area? Just ask!
        </p>
      </div>
    </section>
  );
}
