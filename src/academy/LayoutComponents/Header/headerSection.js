import React from "react";
import Levels from "./levels";
import Languages from "./languages";

export default function HeaderSection() {
  return (
    <>
      <div className='site-header fl fl-al-it-ce fl-ju-co-sp-be'>
        <div></div>
        <Levels />
        <div>
          <Languages />
        </div>
      </div>
    </>
  );
}
