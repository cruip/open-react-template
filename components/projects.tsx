"use client";

import { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Solar Farm Inspection",
      category: "Energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      description: "Comprehensive thermal inspection of a 50MW solar installation, identifying 127 defective panels and improving overall efficiency by 12%.",
      stats: { area: "200 acres", time: "3 days", savings: "$150K" },
    },
    {
      title: "Pipeline Monitoring",
      category: "Oil & Gas",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
      description: "Regular aerial monitoring of 500km pipeline network, detecting 23 potential leak points before they became critical issues.",
      stats: { area: "500 km", time: "Weekly", savings: "$2M" },
    },
    {
      title: "Construction Progress",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      description: "Monthly aerial surveys tracking construction progress of a major commercial development, enabling real-time project management.",
      stats: { area: "15 acres", time: "12 months", savings: "On-time delivery" },
    },
  ];

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#cca989]/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#cca989]/50">
            <span className="inline-flex bg-gradient-to-r from-[#cca989] to-[#9bacbc] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Our Projects
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#9bacbc,#cca989,#e8e8e8,#cca989,#9bacbc)] bg-[length:200%_auto] bg-clip-text pb-4 font-tektur text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent">
            Featured Case Studies
          </h2>
          <p className="text-base sm:text-lg text-[#9bacbc]/70">
            Discover how our drone solutions have delivered measurable results for clients across industries.
          </p>
        </div>

        {/* Projects carousel */}
        <div className="relative" data-aos="fade-up">
          {/* Main project display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a32] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#cca989] text-[#1e2a32] px-3 py-1 rounded-full text-sm font-semibold">
                {projects[activeIndex].category}
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-tektur text-2xl sm:text-3xl font-semibold text-[#9bacbc] mb-4">
                {projects[activeIndex].title}
              </h3>
              <p className="text-[#9bacbc]/70 mb-6 leading-relaxed">
                {projects[activeIndex].description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-[#1e2a32]/50 rounded-lg">
                  <div className="text-[#cca989] font-bold text-lg">{projects[activeIndex].stats.area}</div>
                  <div className="text-xs text-[#9bacbc]/60">Coverage</div>
                </div>
                <div className="text-center p-3 bg-[#1e2a32]/50 rounded-lg">
                  <div className="text-[#cca989] font-bold text-lg">{projects[activeIndex].stats.time}</div>
                  <div className="text-xs text-[#9bacbc]/60">Duration</div>
                </div>
                <div className="text-center p-3 bg-[#1e2a32]/50 rounded-lg">
                  <div className="text-[#cca989] font-bold text-lg">{projects[activeIndex].stats.savings}</div>
                  <div className="text-xs text-[#9bacbc]/60">Value</div>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center text-[#cca989] font-medium hover:underline"
              >
                View full case study
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#cca989] w-8"
                    : "bg-[#3a4a55] hover:bg-[#9bacbc]/50"
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-[#1e2a32] border border-[#3a4a55] text-[#9bacbc] hover:text-[#cca989] hover:border-[#cca989] transition-colors"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-[#1e2a32] border border-[#3a4a55] text-[#9bacbc] hover:text-[#cca989] hover:border-[#cca989] transition-colors"
            aria-label="Next project"
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
