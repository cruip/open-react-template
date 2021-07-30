import React from "react";

export default function Home8({ t }) {
  return (
    <section className='section section-padding-l fl-ce '>
      <div className='text-align-start'>
        <h1 className='mt-0 mb-2 reveal-from-bottom' data-reveal-delay='200'>
          {t("home_section_8_header")}
        </h1>
        <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
          {t("home_section_8_content")}
        </p>
      </div>
      <div
        className='fl-ce reveal-from-bottom m-32'
        data-reveal-delay='400'
        style={{ width: "70%", height: "100%" }}
      >
        <img src={require("../../../assets/images/Tablet.png")} alt='tableti' />
      </div>
    </section>
  );
}
