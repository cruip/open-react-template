import React from "react";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <section className="h-[70vw] sm:h-screen w-screen relative">
      <div className="absolute translate-x-1/2 sm:translate-x-2/4 sm:translate-y-2/4 w-[50vw] h-[70vw] sm:h-[50vh] rounded-full blur-[290px] bg-teal-600 flex-shrink-0 flex"></div>
      <div className="absolute top-0 h-[70vw] w-screen sm:h-screen px-6 md:px-40 flex justify-center items-center z-[2]">
        <img
          className="absolute top-0 xs:translate-x-0 translate-y-0 z-[2] w-2/3 sm:w-1/2"
          src="/static/images/landing/hero.png"
        />
        <p className="sm:text-[19rem] text-7xl font-semibold z-[3]">C</p>
        <p className="sm:text-[19rem] text-7xl font-semibold z-[3]">h</p>
        <p className="sm:text-[19rem] text-7xl font-semibold z-[3]">a</p>
        <p className="sm:text-[19rem] text-7xl font-semibold z-[3]">n</p>
        <p className="sm:text-[19rem] text-7xl font-semibold z-[3]">c</p>
        <p className="sm:text-[19rem] text-7xl font-semibold">e</p>
        <p className="sm:text-[19rem] text-7xl font-semibold">u</p>
        <p className="sm:text-[19rem] text-7xl font-semibold">x</p>
        {/* <p className="text-[10rem] font-semibold">Agency</p> */}
        <img
          className="absolute translate-x-2/4 translate-y-0 left-0 top-0 w-[50vw] h-[70vw] sm:h-screen"
          src="/static/images/landing/hero-lines.png"
        />
      </div>
    </section>
  );
};

export default Hero;
