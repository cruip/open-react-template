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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          cumque! Quam iste doloribus enim aliquam!
        </p>
        <button className="text-lg capitalize rounded-lg bg-purple-600 h-fit w-fit py-2 px-10">
          lets talk
        </button>
      </div>
    </section>
  );
};

export default Hero;
