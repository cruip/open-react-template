import React from "react";
import Button from "../../elements/Button";

export default function SecondSection({ t }) {
  return (
    <section className="section-padding-m" style={{ background: "#25282c" }}>
      <div className="text-align-center">
        <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
          {t("certificates_section_2_header")}
        </h1>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
            {t("certificates_section_2_content")}
          </p>
        </div>
      </div>
    </section>
  );
}
