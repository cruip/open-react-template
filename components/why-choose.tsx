export default function WhyChoose() {
  const reasons = [
    {
      number: "01",
      title: "Industry-Leading Expertise",
      description: "Our team brings decades of combined experience in aviation, engineering, and data analytics to every project.",
    },
    {
      number: "02",
      title: "Advanced Drone Technology",
      description: "We utilize the latest drone platforms and sensors, ensuring superior data quality and operational efficiency.",
    },
    {
      number: "03",
      title: "Compliance & Certification",
      description: "Fully certified operations with all necessary permits, insurance, and safety protocols for peace of mind.",
    },
    {
      number: "04",
      title: "Tailored Solutions",
      description: "Custom-designed service packages that address your specific industry challenges and operational requirements.",
    },
    {
      number: "05",
      title: "Data-Driven Results",
      description: "Actionable insights delivered through comprehensive reports, 3D models, and analytics dashboards.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#2b3943] via-[#1e2a32] to-[#2b3943]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
                alt="SRAB Drone Operations"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a32] via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-[#cca989] text-[#1e2a32] px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold font-tektur">10+</div>
              <div className="text-xs sm:text-sm font-medium">Years Experience</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#cca989]/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#cca989]/50">
              <span className="inline-flex bg-gradient-to-r from-[#cca989] to-[#9bacbc] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#9bacbc,#cca989,#e8e8e8,#cca989,#9bacbc)] bg-[length:200%_auto] bg-clip-text pb-6 font-tektur text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent">
              Why Choose SRAB?
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#cca989] to-[#9bacbc] flex items-center justify-center text-[#1e2a32] font-bold font-tektur text-sm sm:text-base">
                    {reason.number}
                  </div>
                  <div>
                    <h3 className="font-tektur text-base sm:text-lg font-semibold text-[#9bacbc] mb-1 group-hover:text-[#cca989] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[#9bacbc]/60 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
