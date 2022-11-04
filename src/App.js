import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(engine);
    await loadTrianglesPreset(engine);
  }, []); 

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  const options = {
  preset: "triangles",
  fpsLimit: 120,
  // background: {
  //   color: {
  //       value: "#571A1A",
  //   },
  // },
  // interactivity: {
  //   events: {
  //       onClick: {
  //           enable: true,
  //           mode: "push",
  //       },
  //       onHover: {
  //           enable: true,
  //           mode: "repulse",
  //       },
  //       resize: true,
  //   },
  //   modes: {
  //       push: {
  //           quantity: 4,
  //       },
  //       repulse: {
  //           distance: 200,
  //           duration: 0.4,
  //       },
  //   },
  // },
  particles: {
    color: {
        value: "#D3C3C3",
    },
    links: {
        color: "#D3C3C3",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
    },
    collisions: {
        enable: true,
    },
    move: {
        direction: "none",
        enable: true,
        outModes: {
            default: "bounce",
        },
        random: false,
        speed: 0.2,
        straight: false,
    },
    number: {
        density: {
            enable: true,
            area: 2000,
        },
        value: 80,
    },
    opacity: {
        value: 0.1,
    },
    shape: {
        type: "circle",
    },
    size: {
        value: {
            min: 1,
            max: 5
        },
    },
},
  };

  // return (
  //     <Particles id="tsparticles" init={particlesInit} option ={options} loaded={particlesLoaded} />     
  // );

  return (
    <div className="App">
      <Particles id="tsparticles" init={particlesInit} options={options} loaded={particlesLoaded} />
    
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          </Switch>
        )}/> 
    
    </div>

  )
}

export default App;