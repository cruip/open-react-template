"use client";

import { useState } from "react";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b3943]/80 via-[#2b3943]/70 to-[#2b3943]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-20 md:py-32 lg:py-40">
          {/* Section header */}
          <div className="text-center">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#9bacbc,#cca989,#e8e8e8,#cca989,#9bacbc)] bg-[length:200%_auto] bg-clip-text pb-5 font-tektur text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
              data-aos="fade-up"
            >
              Safe, Accurate Inspections<br className="hidden sm:block" /> in the Harshest Environments
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-base sm:text-lg md:text-xl text-[#9bacbc]/90"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                SRAB delivers advanced drone solutions for surveying, inspection,
                and monitoring. From aerial mapping to thermal imaging, we help you
                reduce costs, improve safety, and make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group w-full sm:w-auto bg-gradient-to-t from-[#1e2a32] to-[#2b3943] text-[#cca989] shadow-[inset_0px_1px_0px_0px_rgba(155,172,188,0.16)] hover:from-[#2b3943] hover:to-[#3a4a55] transition-all duration-300"
                  href="#services"
                >
                  <span className="relative inline-flex items-center">
                    Explore Services
                    <span className="ml-1 tracking-normal text-[#cca989]/50 transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </a>
                <a
                  className="btn relative w-full sm:w-auto bg-[#cca989] text-[#1e2a32] font-semibold hover:bg-[#d4b89a] transition-all duration-300"
                  href="#contact"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-[#cca989]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
