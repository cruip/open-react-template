import React from "react";

export default function ThirdSection() {
  return (
    <section className="section container-flex" style={{ height: "48em" }}>
      <div style={{ width: "50%", height: "20em" }}></div>
      <div className="container-xs container-flex" style={{ textAlign: "end" }}>
        <div className="third-section-content">
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            ماهو المحتوى المجاني الذي تحصل عليهمع دورة اللسان العربي؟
          </h1>
          <div className="container mb-32" style={{ textAlign: "end" }}>
            <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
              يمكنك التعلم وفقًا لما يناسبك من السرعة وذلك حسب وقتك وهمتك ومن أي
              جهاز تريده (هاتف محمول أو جهاز لوحي أو حاسوب شخصي). عند الاشتراك،
              ستكتشف كيف تعمل طريقتنا وتبدأ في رؤية النتائج الأولى. مع جلسة
              دراسية مجانيةواحدة؟ ستتضح لك قوة الفكرة وهيبة اللغة العربية. تم
              تصميم وحدات دورة اللسان العربي لتوفر لك مزيدا من التعلم العملي في
              .كل جلسة
            </p>
          </div>
          <div className="third-section-content mt-32">
            <h1
              className="mt-0 mb-32 reveal-from-bottom"
              data-reveal-delay="200"
            >
              ابدأ الآن، قم بالتسجيل المجاني بالمنصة واحصل علىأول وحدة كاملة لكل
              مستوى
            </h1>
            <div className="container" style={{ textAlign: "end" }}>
              <p className="mb-22 reveal-from-bottom" data-reveal-delay="400">
                - تم تنظيم الدورة في 6 مستويات، من المبتدئ (أ1) إلى الأعمال
                (ج2).
              </p>
              <p
                className="m-0 mb-12 reveal-from-bottom"
                data-reveal-delay="400"
              >
                - 144 درسًا بالفيديو حول القواعد النحوية يشرح فيها مدرسو اللسان
                العربي القواعد بطريقة عملية وممتعة للغاية باللغة العربية مع
                ترجمة بلغتك..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
