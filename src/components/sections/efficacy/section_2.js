import React from "react";

export default function SecondSection({ t }) {
  return (
    <section className="section-padding-xs" style={{ background: "#25282c" }}>
      <div className="section container-xl fl fl-ju-co-sp-be">
        <div className="item-mb">
          <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            {t("efficacy_section_2_item3")}
          </h3>
        </div>
        <div className="item-mb">
          <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            {t("efficacy_section_2_item2")}
          </h3>
        </div>
        <div>
          <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            {t("efficacy_section_2_item1")}
          </h3>
        </div>
      </div>
    </section>
  );
}
