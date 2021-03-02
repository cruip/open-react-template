import React from "react";

export default function FifthSection() {
  return (
    <section className="section section-padding-xl fl fl-ju-co-sp-ar has-bottom-divider-short">
      <div className="text-container text-align-start">
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          ماذا عن الشرح النظري للدروس ؟
        </h1>
        <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
          تم شرح الدروس نظريا من قبل مدرسينا المتخصصين، باستخدام فيديوهاتالفصول
          الرائعة.
        </p>
        <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
          لا يهم في أي مستوى أنت، يمكنك البدء من الصفر والتقدم بالسرعة التي
          تناسبك. من المبتدئ (أ1) إلى المتخصص (ج2).
        </p>
      </div>
      <div
        className="img-container fc reveal-from-bottom"
        data-reveal-delay="400"
      >
        <img
          src={require("../../../assets/images/Profesoret.png")}
          alt="profesoret"
        />
      </div>
    </section>
  );
}
