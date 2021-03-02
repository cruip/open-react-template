import React from "react";
import Button from "../../elements/Button";

export default function FirstSection() {
  return (
    <section className="section-padding-s">
      <div className="fl-co-ce">
        <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
          كيف يعمل اللّسان العربي
        </h1>
        <Button tag="a" color="primary" wideMobile href="#">
          أرغب في تعلم اللغة العربية
        </Button>
      </div>
    </section>
  );
}
