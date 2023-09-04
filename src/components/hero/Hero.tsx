import React from "react";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <section className="h-screen w-screen">
      <Navbar />
      <div className="px-6 md:px-40 flex justify-center items-center flex-col h-[90vh] md:h-[75vh] gap-6">
        <h1 className="text-5xl md:text-7xl mb-3 font-bold capitalize text-center">
          chanceux agency
        </h1>
        <p className="w-full md:w-2/6 text-center text-md">
        DevOps, QA, Testing, SEO, E-commerce, App development, and UI/UX design
        </p>
        <button className="text-lg capitalize rounded-lg bg-purple-700 font-medium text-white h-fit w-fit py-3 px-10">
        Get started
        </button>
      </div>
    </section>
  );
};

export default Hero;
