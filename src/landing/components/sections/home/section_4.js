import React from "react";

const GenericSection = ({ t }) => {
  return (
    <section
      className='section section-padding-s fl-ce reveal-from-bottom has-bottom-divider-short'
      data-reveal-delay='400'
    >
      <div className='img-manage'>
        <img
          src={require("../../../assets/images/Smartphoni.png").default}
          alt='phone'
        />
      </div>

      <div className='m-64 text-align-start'>
        <h1 className='mt-0 mb-2 reveal-from-bottom' data-reveal-delay='200'>
          {t("home_section_4_header")}
        </h1>
        <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
          {t("home_section_4_content")}
        </p>
      </div>
    </section>
  );
};

export default GenericSection;
