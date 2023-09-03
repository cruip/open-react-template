import React from "react";

const Footer = () => {
  return (
    <section className="px-6 pt-6 pb-3 md:px-40 md:pt-10">
      <div className="flex justify-center items-center flex-col h-auto md:h-[40vh] gap-6">
        <h1 className="text-4xl md:text-7xl font-bold capitalize text-center">
          lorem agency
        </h1>
        <p className="w-full md:w-2/6 text-center text-md">
          Lorem ipsum dolor sit amet consectetu cumque?
        </p>
        <button className="text-lg capitalize rounded-lg bg-purple-600 h-fit w-fit py-2 px-10">
          get started
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10 my-16">
        <button>icons</button>
        <button>icons</button>
        <button>icons</button>
        <button>icons</button>
      </div>
      {/* copyrights */}
      <div className="flex justify-between">
        <p className="text-xs md:text-sm font-light">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="flex gap-5">
          <p className="text-xs md:text-sm font-light">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-xs md:text-sm font-light">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
