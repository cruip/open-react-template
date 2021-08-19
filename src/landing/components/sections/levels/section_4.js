import React from "react";

export default function ForthSection({ t }) {
  return (
    <>
      <section className='section-padding-l fl-co-ce has-top-divider-short'>
        <div className='container-xl text-align-center'>
          <h1 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
            {t("levels_section_4_header")}
          </h1>
          <p className='mb-32 reveal-from-bottom' data-reveal-delay='400'>
            {t("levels_section_4_content")}
          </p>
        </div>
        <div className='mt-32 reveal-from-bottom' data-reveal-delay='400'>
          <img
            src={
              require("../../../assets/images/Laptop_test_levels.png").default
            }
          />
        </div>
      </section>
    </>
  );
}
