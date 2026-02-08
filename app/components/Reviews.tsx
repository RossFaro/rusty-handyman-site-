import { Star } from "lucide-react";
import ThumbWidget from "./ThumbWidget";

const reviews = [
  {
    text: "Wow! What an amazing young man. Rusty is very thorough and will do the job right. He's a total professional and is a great human being. You can trust that If you hire him, you will be pleased with the results! Rusty installed a very fancy doggie door for me! Both doggie and I are happy. Highly recommend Rusty for any of your handyman jobs!",
    name: "Carri C.",
    job: "Doggie Door Installation",
  },
  {
    text: "Rusty is amazing! He did a great job with my service request. He even went over and above to accommodate my additional request to fix something with the service by returning back later in the day, which he did not have to do. Very professional and kind man. Thank you Rusty!",
    name: "Ramesh G.",
    job: "Assembly / General Repair",
  },
  {
    text: "Rusty did great work here in my home. He fixed a leaky shower head, garage disposal, water filter, and figured out why backyard light wasn't working. I'm very pleased. I'll be contacting him again. Thank you Rusty!",
    name: "L. A.",
    job: "Plumbing, Electrical, General Repairs",
  },
  {
    text: "I am very happy with the repair of my gate done by Rustam. He was punctual, professional, and personable. Besides that, he is a genuinely good person. I would not hesitate to hire Rusty for another job in the future.",
    name: "Alan J.",
    job: "Gate Repair",
  },
  {
    text: "Rusty respond back within mins to my request for three curtains rods to be install. His pricing is very reasonable. He arrived with well prepared tools, friendly, courteous, professional, knowledgeable and skillful. He completed the job within time frame estimated. I am very satisfied with his handyman skills and knowledge that I highly recommend him and will hire him again for my next future projects.",
    name: "Shirley C.",
    job: "Curtain Rods Installation",
  },
  {
    text: "Rusty put together a home gym for me and it turned out great. He was professional, punctual, and a very friendly person. I would highly recommend him for anything that you need done!",
    name: "Dustin M.",
    job: "Fitness Equipment Assembly",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-secondary px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-700 text-text sm:text-4xl">
          What My Customers Say
        </h2>
        <p className="mt-3 text-center text-text/60">
          Exceptional 5.0{" "}
          <Star className="inline h-4 w-4 fill-amber-400 text-amber-400" /> on
          Thumbtack &middot; 15+ Reviews
        </p>

        {/* Thumbtack Live Widget */}
        <div className="mt-10 flex justify-center">
          <ThumbWidget />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text/70">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-secondary pt-4">
                <p className="font-600 text-text">{review.name}</p>
                <p className="text-xs text-text/50">{review.job}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center">
          <a
            href="https://www.thumbtack.com/ca/sacramento/handyman/rusty-handyman-services/service/482531884235366411"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-600 text-primary hover:underline"
          >
            See all reviews on Thumbtack &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
