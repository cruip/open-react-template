import React, { useContext } from "react";

import { TFunction } from "../utils/Store";

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
  const t = useContext(TFunction);
  return (
    <>
      <Hero className="illustration-section-01" t={t} />
      <TopFeatures t={t} />
      <FeaturesTiles t={t} />
      <GenericSection t={t} />
      <FifthSection t={t} />
      <SixthSection t={t} />
      <SeventhSection t={t} />
      <Home8 t={t} />
    </>
  );
};

export default Home;