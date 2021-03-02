import React from "react";
import classNames from "classnames";

export default function FifthSection() {
  return (
    <>
      <section className="section-padding-l fl-co-ce has-top-divider-short">
        <div className="container-xl text-align-center">
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            كيف تتمكن من الحصول على شهادة لإظهار مستواك؟
          </h1>
          <p
            className="mb-32 reveal-from-bottom"
            data-reveal-delay="400"
            style={{ textAlign: "center" }}
          >
            نحن ندرك أهمية حصولك على شهادة تثبت مستواك في اللغة العربيةوكي تحصل
            عليها عليك إكمال الاختبارات النهائية لتقييم تقدمك في ذلك المستوى
            الذي تعلمته بعد إنهاء جميع دروسه الـ24، وفي كل مرة تكمل فيها أحد
            المستويات وتجتاز الاختبارات بنجاح، ستحصل على شهادة علمية من اللسان
            العربي وبعدها يمكنك مشاركة شهادتك على LinkedInلتعزيز ملفك الشخصي
            ولتظهر لمتابعيك أن لديك الكفاءة والقدرة على التحدث باللغة العربية.
            تعد دورة اللسان العربي خطوة جيدة نحو تحقيق هدفك المتمثل في التعلم
            واعتماد مستواك في اللغة العربية من خلال مؤسسة تعليمية جادة. قم
            بإجراء اختبار المستوى المجاني وابدأ التعلم، حتى تكون جزءً من الشبكة
            العالمية للطلاب الذين يتعلمون اللغة العربية من خلال طريقتنا الفعالة
            والمبتكرة.
          </p>
        </div>
        <div className="mt-32 reveal-from-bottom" data-reveal-delay="400">
          <img
            src={require("../../../assets/images/Laptopi_certificate_levels.png")}
            alt="certificate"
          />
        </div>
      </section>
    </>
  );
}
