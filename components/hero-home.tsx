import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Ethical HCK
            </h1>
            <div className=" max-w-3xl">
              <h5
                className="mb-8 text-xl text-indigo-200/65 pt-8"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                The Ethical HCK Community, a student-led initiative under the
                Herald DevCorps at Herald College Kathmandu, was founded on
                September 9, 2021. Our mission is to educate and empower
                individuals in the field of ethical hacking. We are dedicated to
                enhancing cybersecurity awareness and resilience through a range
                of targeted training sessions, workshops, and educational
                programs. By providing practical knowledge and fostering a
                collaborative environment, we aim to prepare our members to
                effectively address and mitigate cybersecurity challenges in
                today’s digital world.
              </h5>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-start">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://www.instagram.com/devcorps.ethicalhck/"
                    target="_blank"
                  >
                    <span className="relative inline-flex items-center">
                      Contact Us
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
