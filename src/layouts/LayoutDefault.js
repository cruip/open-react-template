import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { repeat } from "lodash";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition='right' className='reveal-from-bottom' />
    <main className='site-content'>
      <img
        src={require("../assets/images/layout.png")}
        alt='layout'
        style={{
          position: "fixed",
          zIndex: "-1",
          top: "0",
          right: "0",
          opacity: "0.4",
        }}
      />
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;
