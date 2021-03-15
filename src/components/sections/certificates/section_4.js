import React from "react";
import Button from "../../elements/Button";

export default function ForthSection({ t }) {
  return (
    <section className="fl-co-ce section-padding-s text-align-center">
      <div className="container  reveal-from-bottom" data-reveal-delay="200">
        <h1 className="mt-0 mb-32">{t("certificates_section_4_header")}</h1>
        <Button tag="a" color="primary" wideMobile href="#">
          {t("certificates_section_4_button")}
        </Button>
      </div>
    </section>
  );
}
