import React from 'react';
import HeaderAuth from '../components/layout/HeaderAuth';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    <HeaderAuth navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  