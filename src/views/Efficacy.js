import React, { useContext } from "react";
import { TFunction } from "../utils/Store";

import FistSection from "../components/sections/efficacy/section_1";
import SecondSection from "../components/sections/efficacy/section_2";
import ThirdSection from "../components/sections/efficacy/section_3";
import ForthSection from "../components/sections/efficacy/section_4";
import FifthSection from "../components/sections/efficacy/section_5";
import SixthSection from "../components/sections/efficacy/section_6";

export default function Efficacy() {
  const t = useContext(TFunction);
  return (
    <>
      <FistSection t={t} />
      <SecondSection t={t} />
      <ThirdSection t={t} />
      <ForthSection t={t} />
      <FifthSection t={t} />
      <SixthSection t={t} />
    </>
  );
}
