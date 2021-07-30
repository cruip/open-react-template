import React from "react";
import Button from "../../elements/Button";

export default function FifthSection({ t }) {
  return (
    <section className='section-padding-s text-align-center'>
      <div className='fl-co-ce reveal-from-bottom' data-reveal-delay='200'>
        <h1 className='mt-0 mb-32'>{t("how-works_section_5_header")}</h1>
        <Button tag='a' color='primary' wideMobile href='/register'>
          {t("how-works_section_5_button")}
        </Button>
      </div>
    </section>
  );
}
