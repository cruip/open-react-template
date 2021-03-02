import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="section section-padding-m fl-ce reverse">
      <div
        style={{
          background: "#25282c",
          padding: "2.3em",
        }}
      >
        <div className="form register" dir="rtl">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="m" controlId="email" className="form-item">
              <Row>
                <Col>
                  <Form.Control size="m" placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control size="m" placeholder="Last name" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group size="m" controlId="email" className="form-item">
              <Form.Control type="email" size="m" placeholder="Email" />
            </Form.Group>
            <Form.Group size="m" controlId="password" className="form-item">
              <Form.Control
                size="m"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </Form.Group>
            <Button
              block
              size="m"
              type="submit"
              className="login-btn"
              disabled={!validateForm()}
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
      <div className="container-xs ml-24 text-align-end">
        <div className="third-section-content">
          <h3 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            الدخول إلى دورة اللغة العربيةعن بعد
          </h3>
          <div className="container" style={{ textAlign: "end" }}>
            <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
              الوصول إلى دورة اللغة الإنجليزيةالعربية الخاصة بك عبر الإنترنت من
              أجل معايشة حقيقة للغة العربية الفصحى 144 وحدة دراسية ضمن 6 مستويات
              تعليمية. تحدث العربية الفصحىكأنك حفيد الأصمعي
            </p>
          </div>
        </div>
      </div>
    </section>

    // <div
    //   className="flex-column-center"
    //   style={{
    //     width: "100%",
    //     height: "87vh",
    //     position: "fixed",
    //   }}
    // >
    //   <div className="f" style={{ width: "60%", height: "55%" }}>
    //     <div className="fc" style={{ width: "100%", height: "100%" }}>
    //       {/* <section className="section container-flex"> */}

    //       <div
    //         style={{
    //           background: "#25282c",
    //           padding: "2.3em",
    //         }}
    //       >
    //         <div className="Login" style={{ height: "17em", width: "18em" }}>
    //           <Form onSubmit={handleSubmit} style={{ maxWidth: "100%" }}>
    //             <div
    //               className="f"
    //               style={{
    //                 flexDirection: "column",
    //                 justifyContent: "space-between",
    //                 height: "77%",
    //               }}
    //             >
    //               <Form.Group size="m" controlId="email" className="form-item">
    //                 <Row>
    //                   <Col>
    //                     <Form.Control size="m" placeholder="First name" />
    //                   </Col>
    //                   <Col>
    //                     <Form.Control size="m" placeholder="Last name" />
    //                   </Col>
    //                 </Row>
    //               </Form.Group>
    //               <Form.Group size="m" controlId="email" className="form-item">
    //                 <Form.Control type="email" size="m" placeholder="Email" />
    //               </Form.Group>
    //               <Form.Group
    //                 size="m"
    //                 controlId="password"
    //                 className="form-item"
    //               >
    //                 <Form.Control
    //                   size="m"
    //                   type="password"
    //                   value={password}
    //                   placeholder="Password"
    //                   onChange={(e) => setPassword(e.target.value)}
    //                 />
    //               </Form.Group>
    //             </div>
    //             <Button
    //               block
    //               size="m"
    //               type="submit"
    //               className="login-btn"
    //               disabled={!validateForm()}
    //             >
    //               Register
    //             </Button>
    //           </Form>
    //         </div>
    //       </div>
    //     </div>
    //     <div style={{ width: "60%", height: "100%" }}>
    //       <section className="section container-flex">
    //         <div
    //           className="container-xs container-flex"
    //           style={{ textAlign: "end" }}
    //         >
    //           <div className="third-section-content">
    //             <h3
    //               className="mt-0 mb-32 reveal-from-bottom"
    //               data-reveal-delay="200"
    //             >
    //               الدخول إلى دورة اللغة العربيةعن بعد
    //             </h3>
    //             <div className="container" style={{ textAlign: "end" }}>
    //               <p
    //                 className="m-0 mb-12 reveal-from-bottom"
    //                 data-reveal-delay="400"
    //               >
    //                 الوصول إلى دورة اللغة الإنجليزيةالعربية الخاصة بك عبر
    //                 الإنترنت من أجل معايشة حقيقة للغة العربية الفصحى 144 وحدة
    //                 دراسية ضمن 6 مستويات تعليمية. تحدث العربية الفصحىكأنك حفيد
    //                 الأصمعي
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </div>
  );
}
