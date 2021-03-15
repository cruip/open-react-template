import React from "react";
import Button from "../../elements/Button";

export default function SeventhSections({ t }) {
  return (
    <section className="section-padding-xs">
      <div
        className="fl-co-ce text-align-center reveal-from-bottom"
        data-reveal-delay="200"
      >
        <h1 className="mt-0 mb-32">{t("schema_section_7_header")}</h1>
        <div className="reveal-from-bottom">
          <Button tag="a" color="primary" wideMobile href="#">
            {t("schema_section_7_button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
