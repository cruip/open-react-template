import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => {

const metamask = children && children.props && children.props.metamask ? children.props.metamask : {};

  return (
  <>
    <Header navPosition="right" className="reveal-from-bottom" metamask = {metamask}/>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
)};

export default LayoutDefault;  