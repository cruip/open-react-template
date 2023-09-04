import React from "react";
import data from "./data";
import RenderIcons from "../common/renderIcons";

const Services = () => {
  return (
    <section className="px-6 py-5 md:px-80 md:py-10">
      <h3 className="text-4xl md:text-5xl font-bold capitalize mb-12 text-center">
        Services we can help with
      </h3>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* single item */}
        {data.map((item) => {
          const { id, title, desc, iconType, iconProps } = item;
          return (
            <div
              key={id}
              className="rounded-3xl hover:bg-slate-500 grid grid-cols-1 gap-3 p-4 md:p-8 cursor-pointer"
            >
              <button>
                {RenderIcons({type: iconType, ...iconProps})}
              </button>
              <h5 className="text-2xl font-semibold capitalize mb-2">
                {title}
              </h5>
              <p className="text-xs md:text-sm text-slate-400 leading-snug">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
