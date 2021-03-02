import React from "react";
import Button from "../../elements/Button";

export default function SecondSection() {
  return (
    <section className="section section-page1-2 container-flex">
      <div className="container-xl container-flex">
        <div className="first-section-content">
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            تقدمك مع اللّسان العربي مُجاز بشهادة علمية
          </h1>
          <div className="container" style={{ textAlign: "center" }}>
            <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
              تمنحك دورة اللسان العربي مسارًا قويا للتّعلم من خلال 144 وحدة
              تعليميةضمن 6 مستويات مترابطة ومتدرجة، ستجري اختبارًاقصيرًا لتقييم
              تقدمك في نهاية كل وحدة. إذا نجحت في هذه الاختبارات، فستحصل على
              شهادة علمية من اللسان العربي عند الانتهاء من كل مستوى. يمكنك
              مشاركتها على LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
