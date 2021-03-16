import React, { useContext } from "react";
import { TFunction } from "../utils/Store";

import FistSection from "../components/sections/scheme/section_1";
import SecondSection from "../components/sections/scheme/section_2";
import ThirdSection from "../components/sections/scheme/section_3";
import ForthSection from "../components/sections/scheme/section_4";
import FifthSection from "../components/sections/scheme/section_5";
import SixthSection from "../components/sections/scheme/section_6";
import SeventhSection from "../components/sections/scheme/section_7";

import Decorator from "../layouts/decorator";

export default function Plans() {
  const t = useContext(TFunction);
  return (
    <>
      <FistSection t={t} />
      <SecondSection t={t} />
      <ThirdSection t={t} />
      <ForthSection t={t} />
      <FifthSection t={t} />
      <Decorator />
      <SixthSection t={t} />
      <SeventhSection t={t} />
    </>
  );
}
