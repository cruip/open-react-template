import React from "react";

export default function Decorator({ t }) {
  return (
    <section className='section-padding-l text-align-center fl-co-ce  has-bottom-divider-short'>
      <div>
        <span className='coming-soon fl-ce mb-8'>
          <span className='line mr-16  ml-16'></span> {t("coming_soon_header")}
          <span className='line ml-16 mr-16'></span>
        </span>
        <p className='text-center'>{t("coming_soon_content")}</p>
      </div>
      <span style={{ fontSize: "25px", color: "#68b2b1", fontWeight: "bold" }}>
        {t("coming_soon_coming-soon")}
      </span>
      <div style={{ marginTop: "40px" }}>
        <div className='loading-bar'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
