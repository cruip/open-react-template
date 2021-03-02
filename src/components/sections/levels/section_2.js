import React from "react";

export default function SecondSection() {
  return (
    <section className="section-padding-s" style={{ background: "#24272b" }}>
      <div className="container container-flex">
        <div className="first-section-content">
          <h4
            className="mt-0 mb-32 reveal-from-bottom "
            data-reveal-delay="200"
            style={{ textAlign: "center", fontWeight: "lighter" }}
          >
            اكتشف ما ستتعلمه في كل مستوى من المستويات الستة، وكيفية التحقق من
            مستواك في اللغة العربية مجانًا من خلال اختبارنا، وكيفية الحصول على
            شهادة اعتماد رسمية من اللسان العربي.
          </h4>
          <h4
            className="m-0 reveal-from-bottom "
            data-reveal-delay="400"
            style={{
              textAlign: "center",
              fontWeight: "lighter",
              width: "80%",
            }}
          >
            بمجرد اجتياز اختبار المستوى المجاني ومعرفة مستواك، ندعوك لتجربة
            الدورة التدريبية مجانًا لمدة 7 أيام لبدء العمل على تحقيق هدفك من
            تعلم اللغة العربية.
          </h4>
        </div>
      </div>
    </section>
  );
}
