import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ThumbWidget() {
  return (
    <div className="w-full max-w-lg rounded-3xl border border-secondary bg-white p-6 shadow-sm">
      {/* Thumbtack logo */}
      <div className="flex items-center justify-between">
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
          alt="Thumbtack"
          width={120}
          height={24}
          unoptimized
        />
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-600 text-green-700">
          Latest Review
        </span>
      </div>

      {/* Review content */}
      <div className="mt-5 flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-700 text-primary">
          T
        </div>
        <div className="min-w-0">
          <p className="font-600 text-text">Tom C.</p>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-xs text-text/40">15 reviews</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-text/70">
            &ldquo;Rusty did a great job he was on time and communicated well.
            Would hire him again.&rdquo;
          </p>
        </div>
      </div>

      {/* Link */}
      <a
        href="https://www.thumbtack.com/ca/sacramento/handyman/rusty-handyman-services/service/482531884235366411"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-secondary py-2.5 text-sm font-600 text-primary transition-colors hover:bg-secondary"
      >
        See all reviews on Thumbtack
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
