export const metadata = {
  title: "Keith Nickas - Software Engineer",
  description:
    "A personal website showcasing professional, and, personal works developed by Keith Nickas.",
};
import Image from "next/image";

import Contact from "@/components/contact";
import ResumeHighlights from "@/components/resume-highlights";
import ResumeComponent from "@/components/resume";
import Slider from "@/components/slider";
import spotlightImage from "@/public/images/gap/spotlight-image.webp";
import deemFlightResults from "@/public/images/deem/deem_flight-results.webp";

export default function Resume() {
  return (
    <>
      <Slider
        name="gap"
        config={{
          count: 2,
          useBoxShadow: true,
          duration: "0s",
          disableAnimation: true,
        }}
      >
        <div className="slide px-4">
          <a href="code/deem/flight-results">
            <Image
              src={deemFlightResults}
              alt="Deem Flight Results Prototype"
            />
          </a>
        </div>
        <div className="slide px-4">
          <a href="code/gap/spotlight-image/">
            <Image
              src={spotlightImage}
              alt="Athleta, Spotlight Image CMS component"
            />
          </a>
        </div>
        {/* <div className="slide px-4">
          <div className="bg-gray-400 w-20 text-black h-full w-full">Block</div>
        </div> */}
      </Slider>
      <ResumeComponent />
      <ResumeHighlights />
      <Contact />
    </>
  );
}
