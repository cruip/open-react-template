import Image from "next/image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-menda text-4xl font-medium text-transparent md:text-5xl max-w-5xl mx-auto"
              data-aos="fade-up"
            >
              Empowering Your Business with
              Cutting-Edge Digital Solutions
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-[#E8FFF8]/65 font-normal"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in web and mobile development, systems integration and digital marketing to help businesses thrive in today’s fast-paced digital world.
              </p>
            </div>

            <div className="max-w-[1440px] w-full" data-aos="fade-up">
              <Image
                src={'/images/Illustration.png'}
                width={1623}
                height={538}
                layout="responsive"
                alt="Features"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group mb-4 bg-gradient-to-t from-forest-600 to-forest-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 w-auto rounded-full px-16 mt-8"
                href="https://calendly.com/saad-b-javaid22/consultation"
                target="_blank"
              >
                <span className="relative inline-flex items-center">
                  Schedule an Appointment {" "}
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
