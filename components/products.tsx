export default function Products() {
  const products = [
    {
      name: "Survey Drone Pro",
      model: "SRAB-S1",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
      specs: ["45 min flight time", "RTK GPS", "20MP camera", "5km range"],
      description: "Professional surveying and mapping drone with centimeter-level accuracy for construction and engineering projects.",
    },
    {
      name: "Inspection VTOL",
      model: "SRAB-I2",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80",
      specs: ["60 min flight time", "Thermal + RGB", "AI detection", "10km range"],
      description: "Vertical takeoff inspection drone with dual sensors for infrastructure monitoring and thermal analysis.",
    },
  ];

  return (
    <section id="products" className="relative py-16 md:py-24 bg-gradient-to-b from-[#2b3943] via-[#1e2a32] to-[#2b3943]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#cca989]/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#cca989]/50">
            <span className="inline-flex bg-gradient-to-r from-[#cca989] to-[#9bacbc] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Our Products
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#9bacbc,#cca989,#e8e8e8,#cca989,#9bacbc)] bg-[length:200%_auto] bg-clip-text pb-4 font-tektur text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent">
            Advanced Drone Systems
          </h2>
          <p className="text-base sm:text-lg text-[#9bacbc]/70">
            Purpose-built drones designed and optimized for professional applications.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#1e2a32] to-[#2b3943] rounded-2xl overflow-hidden border border-[#3a4a55]/50 hover:border-[#cca989]/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a32] to-transparent" />
                <div className="absolute top-4 left-4 bg-[#cca989] text-[#1e2a32] px-3 py-1 rounded-full text-sm font-semibold">
                  {product.model}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-tektur text-xl sm:text-2xl font-semibold text-[#9bacbc] mb-2 group-hover:text-[#cca989] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-[#9bacbc]/60 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#3a4a55]/50 text-[#9bacbc] px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#cca989] font-medium hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
