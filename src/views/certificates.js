import React, { useContext } from "react";
import { TFunction } from "../utils/Store";

import FistSection from "../components/sections/certificates/section_1";
import SecondSection from "../components/sections/certificates/section_2";
import ThirdSection from "../components/sections/certificates/section_3";
import ForthSection from "../components/sections/certificates/section_4";

export default function Certificates() {
  const t = useContext(TFunction);
  return (
    <>
      <FistSection t={t} />
      <SecondSection t={t} />
      <ThirdSection t={t} />
      <ForthSection t={t} />
    </>
  );
}
