import React from "react";
import data from "./data";
import RenderIcons from "../common/renderIcons";
import ArrowRight from "@/icons/arrowRight";
import Link from "next/link";

const Services = () => {
  return (
    <section className="px-6 py-5 sm:px-52 sm:py-10">
      <h3 className="text-white text-4xl sm:text-5xl font-bold capitalize mb-12 text-center">
        Services we can help with
      </h3>
      {/*  */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
        {data.map((item) => {
          const { id, title, desc, iconType, iconProps } = item;
          return (
            <div
              key={`service-${id}`}
              className="rounded-3xl bg-[#8ce2e333] p-8 w-full sm:w-[30%]"
            >
              <div className="p-4 bg-gradient-to-r from-indigo-800 to-indigo-400 w-fit rounded-lg mb-12">
                {RenderIcons({type: iconType, ...iconProps})}
              </div>
              <h5 className="text-white text-2xl font-bold capitalize mb-2">
                {title}
              </h5>
              <p className="text-xs sm:text-sm text-white leading-snug mb-2">{desc}</p>
              <Link className="flex items-center gap-2 text-white" href="">Know More <ArrowRight className="fill-white" /></Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
