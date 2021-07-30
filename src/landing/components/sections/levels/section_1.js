import React from "react";
import Button from "../../elements/Button";

export default function FirstSection({ t }) {
  return (
    <section className='section section-padding-m fl-ce'>
      <div className='ml-32 mb-12 levels-container text-align-start'>
        <div style={{ width: "max-content" }}>
          <h1 className='mt-0 mb-8 reveal-from-bottom' data-reveal-delay='200'>
            {t("levels_section_1_header1")}
          </h1>
          <span
            className='mt-0 reveal-from-bottom text-align-center'
            data-reveal-delay='200'
            style={{ fontSize: "30px", width: "100%", display: "block" }}
          >
            {t("levels_section_1_header2")}
          </span>
        </div>
        <div className='mb-24 mt-16'>
          <p className='m-0 mt-32 reveal-from-bottom' data-reveal-delay='400'>
            {t("levels_section_1_content")}
          </p>
        </div>
        <div className='fl fl-ju-co-st'>
          <Button tag='a' color='primary' wideMobile href='/register'>
            {t("levels_section_1_button")}
          </Button>
        </div>
      </div>
      <div
        className='has-top-divider reveal-from-bottom'
        data-reveal-delay='400'
      >
        <img
          src={require("../../../assets/images/baner_levels.png")}
          alt='banner'
        />
      </div>
    </section>
  );
}
