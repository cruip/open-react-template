import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
//import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = ({metamask}) => {

  return (
    <>
      <Hero className="illustration-section-01" metamask={metamask}/>
      <FeaturesTiles metamask={metamask}/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" metamask={metamask}/>
      {/*<Testimonial topDivider />*/}
      <Cta split metamask={metamask}/>
    </>
  );
}

export default Home;