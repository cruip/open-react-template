import React from 'react';

// sections
import Hero from '../components/sections/pages/home/Hero';
import FeaturesTiles from '../components/sections/pages/home/FeaturesTiles';
import FeaturesSplit from '../components/sections/pages/home/FeaturesSplit';
import Testimonial from '../components/sections/pages/home/Testimonial';
import Cta from '../components/sections/pages/home/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;