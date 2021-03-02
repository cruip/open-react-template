import React from "react";
import Button from "../../elements/Button";

export default function FifthSection() {
  return (
    <section
      className="section home-section-4 container-flex"
      style={{ height: "35em" }}
    >
      <div className="container-xs" style={{ textAlign: "end" }}>
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          كيف تتعلم العربية مجانًا
        </h1>
        <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
          استفد من كل فرصة تتاح لك لممارسة اللغة العربية. استمع إلى المحادثات
          باللغة العربية وحاول أن تفهم أو تقلد المذيعين والقراء المفضلين لديك.
          شاهد الأفلام والمسلسلات العربية في نسختها الفصيحة، حتى إذا كنت بحاجة
          إلى ترجمة. اقرأ المقالات المكتوبة باللغة العربية والتي تهمك. هل تريد
          تجربة قراءة الأخبار؟ الإنترنت مليء بالموارد التي يمكنك الاستفادة منها.
          هم أحرار أيضًا.
        </p>
      </div>
      <div
        className="container-xs"
        style={{ width: "60%", height: "100%", margin: 0 }}
      ></div>
    </section>
  );
}
