import React from "react";
import Button from "../../elements/Button";

export default function ForthSection({ t }) {
  return (
    <section className='section section-padding-l has-bottom-divider-short fl fl-ju-co-sp-be'>
      <div className='container-xs container-flex'>
        <div className='text-align-start'>
          <h1 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
            {t("efficacy_section_4_header")}
          </h1>
          <p className='mb-32 reveal-from-bottom' data-reveal-delay='400'>
            {t("efficacy_section_4_content")}
          </p>
          <div className='container ce'>
            <Button
              tag='a'
              wideMobile
              href='#'
              className='button-primary-border'
              style={{ fontFamily: "Tajawal Light" }}
            >
              {t("efficacy_section_4_button")}
            </Button>
          </div>
        </div>
      </div>
      <div className='m-32'>
        <img src={require("../../../assets/images/efficacy_lab.png").default} />
      </div>
    </section>
  );
}
