import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { repeat } from "lodash";

const LayoutDefault = ({ children }) => (
  <>
    {/* <div
      style={{
        display: "grid",
        gridTemplateRows: "auto ".repeat(15),
        gridRowGap: "6%",
        height: "100%",
        position: "absolute",
        width: "100%",
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutDefault;
