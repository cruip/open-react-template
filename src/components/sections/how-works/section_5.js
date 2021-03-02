import React from "react";
import Button from "../../elements/Button";

export default function FifthSection() {
  return (
    <section className="section-padding-s text-align-center">
      <div className="fl-co-ce">
        <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
          قم بالتسيجل وابدأ تعلم اللغة العربية
        </h1>
        <Button tag="a" color="primary" wideMobile href="#">
          حقيقة أريد تعلم العربية
        </Button>
      </div>
    </section>
  );
}
