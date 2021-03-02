import React from "react";
import Button from "../../elements/Button";

export default function ThirdSection() {
  return (
    <>
      <section className="section container-flex" style={{ height: "20em" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            هذه هي شهادات اللسان العربي التي يمكنك الحصول عليها
          </h1>
        </div>
      </section>
      <section className="section container-flex" style={{ height: "20em" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            قم بالتسجيل الآن وابدأ تعلم اللغة العربية
          </h1>
          <Button tag="a" color="primary" wideMobile href="#">
            أرغب في تعلم اللغة العربية
          </Button>
        </div>
      </section>
    </>
  );
}
