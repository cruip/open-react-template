import React, { useContext } from "react";
import { TFunction } from "../utils/Store";

// Sections
import FirstSection from "../components/sections/how-works/section_1";
import SecondSection from "../components/sections/how-works/section_2";
import ThirdSection from "../components/sections/how-works/section_3";
import ForthSection from "../components/sections/how-works/section_4";
import FifthSection from "../components/sections/how-works/section_5";

export default function HowItWork() {
  const t = useContext(TFunction);
  return (
    <>
      <FirstSection t={t} />
      <SecondSection t={t} />
      <ThirdSection t={t} />
      <ForthSection t={t} />
      <FifthSection t={t} />
    </>
  );
}
