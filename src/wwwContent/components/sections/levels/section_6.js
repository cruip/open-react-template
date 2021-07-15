import React from "react";
import Button from "../../elements/Button";

export default function SixthSection({ t }) {
  return (
    <section className='section-padding-s' style={{ background: "#25282c" }}>
      <div
        className='text-align-center reveal-from-bottom'
        data-reveal-delay='200'
      >
        <h1 className='mt-0 mb-32 '>{t("levels_section_6_header")}</h1>
        <Button tag='a' color='primary' wideMobile href='/register'>
          {t("levels_section_6_button")}
        </Button>
      </div>
    </section>
  );
}
