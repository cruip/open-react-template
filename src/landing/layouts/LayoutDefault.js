import React, { useContext } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import UnderContruction from "./UnderConstruction";
import { repeat } from "lodash";
import { TFunction } from "../utils/Store";

const LayoutDefault = ({ children }) => {
  const t = useContext(TFunction);

  return (
    <>
      <Header navPosition='right' className='reveal-from-bottom' />
      <UnderContruction t={t} />
      <main className='site-content'>
        <img
          src={require("../assets/images/layout.png").default}
          alt='layout'
          style={{
            position: "fixed",
            zIndex: "-1",
            top: "0",
            right: "0",
            opacity: "0.4",
            height: "100vh",
          }}
        />
        {children}
      </main>
      <Footer t={t} />
    </>
  );
};

export default LayoutDefault;
