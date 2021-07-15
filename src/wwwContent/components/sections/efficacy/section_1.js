import React from "react";
import Button from "../../elements/Button";

export default function FirstSection({ t }) {
  return (
    <section className='section-padding-l efficacy-background pt-'>
      <div
        className='text-align-start'
        style={{ maxWidth: "800px", marginTop: "150px" }}
      >
        <h1 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
          {t("efficacy_section_1_header")}
        </h1>
        <div>
          <Button tag='a' color='primary' wideMobile href='/register'>
            {t("efficacy_section_1_button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
