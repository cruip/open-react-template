import React from "react";
import Button from "../../elements/Button";

export default function FirstSection({ t }) {
  return (
    <section
      className='section section-padding-l reveal-from-bottom fl-ce'
      data-reveal-delay='200'
    >
      <div className='text-align-start m-64'>
        <h1 className='mt-0 mb-2'>{t("schema_section_1_header")}</h1>
        <p className='m-0'>{t("schema_section_1_content")}</p>
        <div className='mt-24'>
          <Button tag='a' color='primary' wideMobile href='#'>
            {t("schema_section_1_button")}
          </Button>
        </div>
      </div>
      <div>
        <img src={require("../../../assets/images/plan_1.png")} />
      </div>
    </section>
  );
}
