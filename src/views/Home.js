import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import OurProjects from "../components/sections/OurProjects";
import ContactForm from "../components/sections/ContactForm";
import Accreditations from "../components/sections/Accreditations";
import { FullScreenWrapper } from "./styles";
import { useMediaQuery } from "../hooks/MediaHook";
import OurServices from "../components/sections/OurServices";

const Home = () => {
  const isMobile = useMediaQuery();
  return (
    <>
      <FullScreenWrapper>
        <Hero className="illustration-section-01" />
        <div style={{ marginTop: isMobile ? "-1em" : "2em" }}>
          <Accreditations />
        </div>
      </FullScreenWrapper>
      <OurServices className="illustration-section-03" />
      <OurProjects topDivider />
      <ContactForm split />
    </>
  );
};

export default Home;
