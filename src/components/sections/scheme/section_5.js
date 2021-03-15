import React from "react";
import Button from "../../elements/Button";

export default function FifthSection({ t }) {
  return (
    <section className="section-padding-m">
      <div className="container text-align-start">
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          {t("schema_section_5_header")}
        </h1>
        <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
          {t("schema_section_5_content")}
        </p>
      </div>
    </section>
  );
}
