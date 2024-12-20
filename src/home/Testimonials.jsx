import React, { useRef, useEffect } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./testimonials-data";

export function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft + clientWidth >= scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(autoScroll, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-50 py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Join thousands of professionals who transformed their careers
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map(testimonial => (
            <div key={testimonial.name} className="snap-center">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
