import React from "react";
import classNames from "classnames";

export default function FifthSection({ t }) {
  return (
    <>
      <section className='section-padding-l fl-co-ce has-top-divider-short'>
        <div className='container-xl text-align-center'>
          <h1 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
            {t("levels_section_5_header")}
          </h1>
          <p
            className='mb-32 reveal-from-bottom'
            data-reveal-delay='400'
            style={{ textAlign: "center" }}
          >
            {t("levels_section_5_content1")}
          </p>
          <p
            className='mb-32 reveal-from-bottom'
            data-reveal-delay='400'
            style={{ textAlign: "center" }}
          >
            {t("levels_section_5_content2")}
          </p>
        </div>
        <div className='mt-32 reveal-from-bottom' data-reveal-delay='400'>
          <img
            src={
              require("../../../assets/images/Laptopi_certificate_levels.png")
                .default
            }
            alt='certificate'
          />
        </div>
      </section>
    </>
  );
}
