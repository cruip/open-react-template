import React from "react";

export default function ForthSection({ t }) {
  return (
    <section className="section-padding-xs" style={{ background: "#25282c" }}>
      <div className="container-xl text-align-center">
        <h3 className="mt-12 reveal-from-bottom" data-reveal-delay="200">
          {t("schema_section_4_header")}
        </h3>
        <p className="mt-12 mb-12 reveal-from-bottom" data-reveal-delay="400">
          {t("schema_section_4_content")}
        </p>
      </div>
    </section>
  );
}
