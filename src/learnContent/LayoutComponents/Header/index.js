import React from "react";
import HeaderSection from "./headerSection";

export default function HeaderLayout({ children }) {
  return (
    <>
      <HeaderSection />
      {children}
    </>
  );
}
