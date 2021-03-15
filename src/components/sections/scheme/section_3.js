import React from "react";

export default function ThirdSection({ t }) {
  return (
    <section className="section-padding-l fl fl-ju-co-sp-be fl-al-it-ce">
      <div className="text-align-start plans-text-responsive">
        <div className="mb-32">
          <h3 className="mt-0 mb-26 reveal-from-bottom" data-reveal-delay="200">
            {t("schema_section_3_item1_header")}
          </h3>
          <div style={{ marginBottom: "64px" }}>
            <p className="reveal-from-bottom" data-reveal-delay="400">
              {t("schema_section_3_item1_content")}
            </p>
          </div>
        </div>
        <div className="mt-32">
          <h3 className="mt-0 mb-26 reveal-from-bottom" data-reveal-delay="200">
            {t("schema_section_3_item2_header")}
          </h3>
          <div>
            <p className="mb-12 reveal-from-bottom" data-reveal-delay="400">
              {t("schema_section_3_item2_content1")}
            </p>
            <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
              {t("schema_section_3_item2_content2")}
            </p>
          </div>
        </div>
      </div>
      <div className="image-disable">
        <img
          src={require("../../../assets/images/plans_arabic_text.png")}
          alt="arabic text"
        />
      </div>
    </section>
  );
}
