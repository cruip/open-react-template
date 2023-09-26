import React from "react";

const Regime = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-18 md:gap-32 px-6 md:px-40 py-5 md:py-20">
      <div className="relative w-full sm:w-[40%]">
      <div className="absolute left-0 w-full h-full rounded-full bg-[#188486c9] blur-[290px]">
        
        </div>
        <img className="z-10 relative" src="/static/images/landing/blog_stockmarket.png" />
      </div>
      <div className="w-full sm:w-[40%] order-1 md:order-2">
        <h3 className="text-white w-full md:w-3/4 text-3xl font-bold leading-snug mb-6 capitalize">
          Regime Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed w-full mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          nostrum amet possimus ratione! Aliquid suscipit doloremque quia veniam
          dolore vero sapiente commodi, perspiciatis expedita possimus sunt. A,
          odio. Repellat, iure veritatis. Laudantium hic voluptatem quibusdam
          necessitatibus aut, iure voluptate aliquam
        </p>
        <p className="text-sm text-slate-400 leading-relaxed w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          adipisci quibusdam labore magnam totam, quisquam nesciunt officiis
          consequatur dolor molestias qui voluptatum necessitatibus obcaecati
          praesentium
        </p>
      </div>
    </section>
  );
};

export default Regime;
