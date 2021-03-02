import React from "react";
// import sections
import Hero from "../components/sections/home/section_1";
import FeaturesTiles from "../components/sections/home/section_3";
import TopFeatures from "../components/sections/home/section_2";
import GenericSection from "../components/sections/home/section_4";
import FifthSection from "../components/sections/home/section-5";
import SixthSection from "../components/sections/home/section-6";
import SeventhSection from "../components/sections/home/section-7";
import Home8 from "../components/sections/home/section-8";

const Home = () => {
  return (
    <div className="dir-rtl">
      <Hero className="illustration-section-01" />
      <TopFeatures />
      <FeaturesTiles />
      <GenericSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Home8 />
    </div>
  );
};

export default Home;
