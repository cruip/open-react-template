import React from "react";
import data from "./data";

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
          const { id, title, desc } = item;
          return (
            <div
              key={id}
              className="rounded-3xl hover:bg-slate-500 grid grid-cols-1 gap-3 p-4 md:p-8 cursor-pointer"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
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
