"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    position: "Operations Director",
    company: "Gulf Energy Solutions",
    content:
      "SRAB's drone inspection services have revolutionized our pipeline monitoring. We've reduced inspection costs by 60% while significantly improving safety for our field teams.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    position: "Project Manager",
    company: "Construct Pro International",
    content:
      "The accuracy of their aerial surveys is remarkable. Their 3D mapping helped us identify site issues before they became costly problems. Highly recommended for any construction project.",
    rating: 5,
  },
  {
    name: "Mohammed Hassan",
    position: "Facility Manager",
    company: "Smart City Developments",
    content:
      "From facade inspections to thermal imaging, SRAB delivers comprehensive data that helps us maintain our properties proactively. Their team is professional and responsive.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 md:py-24 bg-linear-to-b from-charcoal-blue via-[#1e2a32] to-charcoal-blue">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-warm-sand/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-warm-sand/50">
            <span className="inline-flex bg-linear-to-r from-warm-sand to-cadet-blue bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="animate-gradient bg-[linear-gradient(to_right,#9bacbc,#cca989,#e8e8e8,#cca989,#9bacbc)] bg-size-[200%_auto] bg-clip-text pb-4 font-tektur text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-cadet-blue/70">
            Trusted by industry leaders across the region for reliable drone solutions.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          {/* Quote icon */}
          <div className="absolute -top-4 left-8 text-warm-sand/20">
            <svg className="w-16 h-16 sm:w-24 sm:h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial content */}
          <div className="bg-linear-to-br from-[#1e2a32] to-charcoal-blue rounded-2xl p-6 sm:p-10 border border-[#3a4a55]/50">
            <div className="min-h-[200px] sm:min-h-[180px]">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-warm-sand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl text-cadet-blue leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-warm-sand to-cadet-blue flex items-center justify-center text-[#1e2a32] font-bold text-lg">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-tektur font-semibold text-cadet-blue">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-cadet-blue/60">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-warm-sand w-8"
                    : "bg-[#3a4a55] hover:bg-cadet-blue/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows - desktop */}
          <button
            onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-[#1e2a32] border border-[#3a4a55] text-cadet-blue hover:text-warm-sand hover:border-warm-sand transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-[#1e2a32] border border-[#3a4a55] text-cadet-blue hover:text-warm-sand hover:border-warm-sand transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
