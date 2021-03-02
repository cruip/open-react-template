import React from "react";
import Button from "../../elements/Button";

export default function ForthSection() {
  return (
    <>
      <section className="section-padding-l has-bottom-divider-short fc">
        <div style={{ width: "30%", height: "20em" }}></div>
        <div className="container-xs container-flex">
          <div className="third-section-content" style={{ textAlign: "end" }}>
            <h1
              className="mt-0 mb-32 reveal-from-bottom"
              data-reveal-delay="200"
            >
              مختبر اللغة
            </h1>
            <p className="mb-32 reveal-from-bottom" data-reveal-delay="400">
              معمل اللغة لدينا هو مختبر ومركز أبحاث يجمع بين اللغويين والخبراء
              في التكنولوجيا والتّعلم الرقمي. هدفنا هو تحسين تعليم اللغة العربية
              من أجل ضمان دورة لغوية جذابة وفعالة تتكيف باستمرار مع واقع
              المتعلمين ورغباتهم
            </p>
            <div className="container ce">
              <Button
                tag="a"
                wideMobile
                href="#"
                className="button-primary-border"
              >
                اقرأالمزيد
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
