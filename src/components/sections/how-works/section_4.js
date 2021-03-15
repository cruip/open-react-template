import React from "react";
import classNames from "classnames";

export default function ForthSection({ t }) {
  return (
    <section className='section-padding-s' style={{ background: "#25282c" }}>
      <div className='container text-align-center'>
        <h2 className='mt-12 reveal-from-bottom' data-reveal-delay='200'>
          {t("how-works_section_4_header")}
        </h2>
        <p className='mt-12 m-0 reveal-from-bottom' data-reveal-delay='400'>
          {t("how-works_section_4_content1")}
        </p>
        <p className='reveal-from-bottom' data-reveal-delay='400'>
          {t("how-works_section_4_content2")}
        </p>
      </div>
    </section>
  );
}
