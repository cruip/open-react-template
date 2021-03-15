import React from "react";

export default function ThirdSection({ t }) {
  return (
    <section className="section-padding-s has-bottom-divider-short fl-ce">
      <div className="container-xs text-align-center">
        <p className="mb-32 reveal-from-bottom" data-reveal-delay="400">
          {t("efficacy_section_3_content")}
        </p>
      </div>
    </section>
  );
}
