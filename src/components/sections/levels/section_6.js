import React from "react";
import Button from "../../elements/Button";

export default function SixthSection() {
  return (
    <section className="section-padding-s" style={{ background: "#25282c" }}>
      <div className="text-align-center">
        <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
          قم بالتسجيل الآن وابدأ تعلم اللغة العربية
        </h1>
        <Button tag="a" color="primary" wideMobile href="#">
          أرغب في تعلم اللغة العربية
        </Button>
      </div>
    </section>
  );
}
