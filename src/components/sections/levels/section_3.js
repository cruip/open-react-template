import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function ThirdSection() {
  const [accordion0, setAccordion0] = useState(true);
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);
  const [accordion6, setAccordion6] = useState(false);
  const [current, setCurrent] = useState("Accordion0");

  const reset = (current) => {
    current === "Accordion0" && setAccordion0(false);
    current === "Accordion1" && setAccordion1(false);
    current === "Accordion2" && setAccordion2(false);
    current === "Accordion3" && setAccordion3(false);
    current === "Accordion4" && setAccordion4(false);
    current === "Accordion5" && setAccordion5(false);
    current === "Accordion6" && setAccordion6(false);
  };

  return (
    <section className="section-padding-l">
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card className="reveal-from-bottom" data-reveal-delay="100">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                setAccordion0(!accordion0);
                setCurrent("Accordion0");
                current !== "Accordion0" && reset(current);
              }}
            >
              {accordion0 ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
              ما هو المستوى المبتدئأ 1 ؟
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                هذا المستوى هو الخطوة الأولى لكل شخص يأمل في تعلم اللغة العربية.
                إنه مصَمَّم لأولئك الذين لم يدرسوا اللغة مطلقًا أو الذين لديهم
                فهم أساسي لها فقط. في هذا المستوى، ستتعلم استخدام التعبيرات
                الأساسية وطرح الأسئلة. ستتعلم أيضًا مفردات جديدة والأرقام
                والحروف والفعل المطلوب. في نهاية هذا المستوى، ستشعر بمزيد من
                الثقة بشأن قدراتك التواصلية في اللغة العربية وستكون متحمسًا أكثر
                لمواصلة التّقدم في تعلمك باستخدام اللسان العربي يتوافق هذا
                المستوى مع المستوى A1 من الإطار الأوروبي المرجعي العام للغات
                (CEFR).
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="reveal-from-bottom" data-reveal-delay="200">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                setAccordion1(!accordion1);
                setCurrent("Accordion1");
                current !== "Accordion1" && reset(current);
              }}
            >
              {accordion1 ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
              ما هو المستوى المنطلقأ 2 ؟
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                لك أن تتخيل أنك قادر على العيش دون صعوبة كبيرة في بلد يتحدث
                العربية؟ سيسمح لك هذا المستوى بتجاوز المستوى الأساسي. ستستمر في
                تعلم مفردات جديدة واكتساب المهارات النحوية التي ستساعدك على
                التواصل في المواقف اليومية المختلفة. ستتعلم أيضًا التواصل بجمل
                بسيطة، باستخدام التعبيرات العربية الفصيحة في أزمنة الحاضر
                والمستقبل يتوافق هذا المستوى مع المستوى A2 من الإطار الأوروبي
                المرجعي العام للغات (CEFR).
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="reveal-from-bottom" data-reveal-delay="300">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                setAccordion2(!accordion2);
                setCurrent("Accordion2");
                current !== "Accordion2" && reset(current);
              }}
            >
              {accordion2 ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
              ما هو المستوى المتوسِّط ب 1 ؟
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                إذا كنت متمرسًا بالفعل في اللغة العربية، فإن هذا المستوى سيسمح
                لك بتقوية قدرتك على وصف الأشياء والمواقف في الأزمنة الشرطية
                والماضية، وتطوير مهاراتك الكتابية، وتعزيز قدراتك. ستكتسب المزيد
                من الثقة والطلاقة في اللغة العربية وستشعر أنه يمكنك التواصل
                شفهيًا بسهولة أكبر. يتوافق هذا المستوى مع المستوى B1 من الإطار
                الأوروبي المرجعي العام للغات (CEFR).
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="reveal-from-bottom" data-reveal-delay="400">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="3"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                setAccordion3(!accordion3);
                setCurrent("Accordion3");
                current !== "Accordion3" && reset(current);
              }}
            >
              {accordion3 ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
              ما هو المستوىالمتمكِّن ب 2 ؟
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                هذا المستوى مصمم للطلاب الذين لديهم بالفعل مستوى عالٍ من اللغة
                العربية، يرتفع بك إلى ما فوق المتوسط وذلك يعني أنتفهمبوضوحالنصوص
                المعقدة. ستكون قادرًا على التعبير عن نفسك بشكل صحيح في جميع
                أشكال الفعل الماضي وستتقن استخدامك للأحوال وحروف الجر وبعض
                الظواهر النحوية الأخرى ستستمر أيضًا في زيادة مفرداتك وتقوية
                قدرتك على إنتاج كلامٍ مرنٍ بطريقةٍ مرتجلة. يتوافق هذا المستوى مع
                المستوى B2 من الإطار الأوروبي المرجعي العام للغات (CEFR).
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="reveal-from-bottom" data-reveal-delay="500">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="4"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                setAccordion4(!accordion4);
                setCurrent("Accordion4");
                current !== "Accordion4" && reset(current);
              }}
            >
              {accordion4 ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
              ما هو المستوى المتقدمج 1 ؟
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                هذا المستوى مصمم لطلابنا الأكثر خبرة وممارسة للغة العربية، في
                المستوى المتقدم ستستمر في تعلم الكلمات والتعابير الجديدة باللغة
                العربية وتحسين مهاراتك في تحليل وفهم النصوص المنظمة والمتماسكة.
                بالإضافة إلى ذلك، سنعمل على تحسين استخدامك للظروف والصفات
                والضمائر. وفي النهاية، ستكون قادرًا على التواصل مع الناطقين
                الأصليين بسلاسة ومهارة. سوف تتعلم أيضا الاستخدام الصحيح
                للتعبيرات غير الشخصية، وكيفية استخدام أسماء الأفعال، وأحوال
                الأفعال في اللغة العربية. يتوافق هذا المستوى مع المستوى C1 من
                الإطار الأوروبي المرجعي العام للغات (CEFR).
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="reveal-from-bottom" data-reveal-delay="600">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="5"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                setAccordion5(!accordion5);
                setCurrent("Accordion5");
                current !== "Accordion5" && reset(current);
              }}
            >
              {accordion5 ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
              ما هو مستوى الأعمال ؟
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                لا شك أن اللغة العربية هي لغة أعمال بامتياز، لذلك تم تصميم مستوى
                الأعمال للطلاب ذوي المستوى المتقدم في اللغة العربية الذين يرغبون
                في إتقانها واكتساب مفردات جديدة تتعلق بعالم الأعمال والشركات.
                هنا سوف تتعلم الطريقة الصحيحة لاستخدام زمن المستقبل بأشكاله
                المختلفة، والضمائر المتصلة والمنفصلة، والفعل المبني للمجهول،
                والصيغ الشرطية، والكلام المباشر وصيغ الأمر، والأفعال المختلفة.
                يتوافق هذا المستوى مع المستوى C2 من الإطار الأوروبي المرجعي
                العام للغات (CEFR).
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  );
}
