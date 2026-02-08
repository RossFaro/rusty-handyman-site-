import { Wrench } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Wrench className={`h-6 w-6 ${light ? "text-primary" : "text-accent"}`} />
      <div className="leading-none">
        <span
          className={`font-heading text-xl font-800 tracking-tight ${
            light ? "text-white" : "text-text"
          }`}
        >
          Trusty{" "}
          <span className="text-primary">Rusty</span>
        </span>
      </div>
    </div>
  );
}
