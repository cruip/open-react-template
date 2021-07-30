import React from "react";
import Button from "../../elements/Button";

export default function SecondSection({ t }) {
  return (
    <section className="section-padding-xs" style={{ background: "#25282c" }}>
      <div className="container-xl text-align-center">
        <p className="mb-12 reveal-from-bottom" data-reveal-delay="400">
          {t("schema_section_2_content")}
        </p>
        <h3 className="mt-12 mb-0 reveal-from-bottom" data-reveal-delay="200">
          {t("schema_section_2_header_s")}
        </h3>
      </div>
    </section>
  );
}
