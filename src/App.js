import React, { useRef, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
if(process.env.REACT_APP_GA_CODE) {
  ReactGA.initialize(process.env.REACT_APP_GA_CODE);
}
const trackPage = page => {
  if(process.env.REACT_APP_GA_CODE){
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
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

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <LayoutDefault>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
        </LayoutDefault>
      )} />
  );
}

export default App;