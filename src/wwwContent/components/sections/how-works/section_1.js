import React from "react";
import Button from "../../elements/Button";

export default function FirstSection({ t }) {
  return (
    <section className='section-padding-s'>
      <div className='fl-co-ce'>
        <h1 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
          {t("how-works_section_1_header")}
        </h1>
        <Button tag='a' color='primary' wideMobile href='/register'>
          {t("how-works_section_1_button")}
        </Button>
      </div>
    </section>
  );
}
