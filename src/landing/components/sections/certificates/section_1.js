import React from "react";
import Button from "../../elements/Button";

export default function FirstSection({ t }) {
  return (
    <section
      className='section section-padding-m reveal-from-bottom fl-ce'
      data-reveal-delay='200'
    >
      <div className='text-align-start m-64'>
        <h1 className='mt-0 mb-8'>{t("certificates_section_1_header")}</h1>
        <p className='mb-24'>{t("certificates_section_1_content")}</p>
        <div>
          <Button tag='a' color='primary' wideMobile href='/register'>
            {t("certificates_section_1_button")}
          </Button>
        </div>
      </div>
      <div>
        <img
          src={require("../../../assets/images/certificates_1.png").default}
        />
      </div>
    </section>
  );
}
