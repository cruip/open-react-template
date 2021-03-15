import React from "react";
import Button from "../../elements/Button";

export default function SecondSection({ t }) {
  return (
    <section className="section-padding-m" style={{ background: "#25282c" }}>
      <div className="first-section-content container-xl text-align-center">
        <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
          {t("how-works_section_2_header1")}
        </h1>
        <span
          className="mt-0 mb-32 reveal-from-bottom"
          data-reveal-delay="200"
          style={{ fontSize: "30px" }}
        >
          {t("how-works_section_2_header2")}
        </span>
        <div className="container">
          <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
            {t("how-works_section_2_content1")}
          </p>
          <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
            {t("how-works_section_2_content2")}
          </p>
        </div>
      </div>
    </section>
  );
}
