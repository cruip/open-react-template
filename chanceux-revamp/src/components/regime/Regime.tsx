import React from "react";
import Image from "next/image";

const Regime = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-40 py-5 md:py-20">
      <div className="w-full h-[200px] md:h-[400px] relative order-2 md:order-1">
        <Image
          src="https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png"
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="w-full md:w-3/4 text-3xl font-bold leading-snug mb-6 capitalize">
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
