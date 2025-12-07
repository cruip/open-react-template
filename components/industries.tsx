export default function Industries() {
  const industries = [
    {
      title: "Oil & Gas",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=80",
      description: "Pipeline inspection, flare stack monitoring, and facility surveys",
    },
    {
      title: "Construction",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      description: "Progress monitoring, site surveys, and volumetric analysis",
    },
    {
      title: "Energy & Utilities",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
      description: "Solar panel inspection, wind turbine monitoring, power line surveys",
    },
    {
      title: "Mining",
      image: "https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=400&q=80",
      description: "Stockpile measurements, pit mapping, and safety monitoring",
    },
    {
      title: "Agriculture",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80",
      description: "Crop health analysis, irrigation planning, and yield estimation",
    },
    {
      title: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
      description: "Property marketing, roof inspections, and land surveys",
    },
    {
      title: "Telecommunications",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      description: "Tower inspections, network planning, and maintenance surveys",
    },
    {
      title: "Transportation",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80",
      description: "Road and rail inspections, traffic monitoring, bridge surveys",
    },
    {
      title: "Defense & Security",
      image: "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=400&q=80",
      description: "Surveillance operations, perimeter security, reconnaissance",
    },
  ];

  return (
    <section id="industries" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#cca989]/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#cca989]/50">
            <span className="inline-flex bg-gradient-to-r from-[#cca989] to-[#9bacbc] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Industries We Serve
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#9bacbc,#cca989,#e8e8e8,#cca989,#9bacbc)] bg-[length:200%_auto] bg-clip-text pb-4 font-tektur text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent">
            Serving Diverse Industries
          </h2>
          <p className="text-base sm:text-lg text-[#9bacbc]/70">
            Our drone solutions are tailored to meet the unique challenges of each industry sector.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="relative h-48 sm:h-56">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a32] via-[#1e2a32]/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-tektur text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-[#cca989] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#9bacbc]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {industry.description}
                </p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#cca989]/50 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
