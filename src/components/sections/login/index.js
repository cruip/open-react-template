import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Check from "react-bootstrap/FormCheck";

export default function LoginPage() {
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
        <div className="form" dir="rtl">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="form-item fl-co">
              <Form.Label style={{ textAlign: "start" }}>
                أدخل بريدك الالكتروني أولا
              </Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" className="form-item fl-co">
              <Form.Label style={{ textAlign: "start" }}>
                كلمة المرور
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontSize: ".7em", color: "#61b3ff" }}>
                Forgot Password ?
              </span>
            </div>
            <Button
              block
              type="submit"
              className="login-btn"
              disabled={!validateForm()}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
      <div className="container-xs ml-24 text-align-end">
        <div className="third-section-content">
          <h3 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            الدخول إلى دورة اللغة العربيةعن بعد
          </h3>
          <div className="container">
            <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
              الوصول إلى دورة اللغة الإنجليزيةالعربية الخاصة بك عبر الإنترنت من
              أجل معايشة حقيقة للغة العربية الفصحى 144 وحدة دراسية ضمن 6 مستويات
              تعليمية. تحدث العربية الفصحىكأنك حفيد الأصمعي
            </p>
          </div>
        </div>
      </div>
    </section>
    // <div className="flex-column-center" style={{}}>
    //   <div className="f" style={{ width: "60%", height: "55%" }}>
    //     <div className="fc" style={{ width: "100%", height: "100%" }}>
    /* <section className="section container-flex"> */

    /* <div
            style={{
              background: "#25282c",
              padding: "2.3em",
            }}
          >
            <div className="Login" dir="rtl">
              <Form onSubmit={handleSubmit}>
                <div
                  className="f"
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "60%",
                  }}
                >
                  <Form.Group controlId="email" className="form-item">
                    <Form.Label style={{ textAlign: "start" }}>
                      أدخل بريدك الالكتروني أولا
                    </Form.Label>
                    <Form.Control
                      autoFocus
                      size="sm"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password" className="form-item">
                    <Form.Label style={{ textAlign: "start" }}>
                      كلمة المرور
                    </Form.Label>
                    <Form.Control
                      size="sm"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div style={{ alignSelf: "flex-start" }}>
                  <span style={{ fontSize: ".7em", color: "#61b3ff" }}>
                    Forgot Password ?
                  </span>
                </div>
                <Button
                  block
                  size="sm"
                  type="submit"
                  className="login-btn"
                  disabled={!validateForm()}
                >
                  Login
                </Button>
              </Form>
            </div>
          </div> */

    /* </div>
        <div style={{ width: "60%", height: "100%" }}>
          <section className="section container-flex">
            <div
              className="container-xs container-flex"
              style={{ textAlign: "end" }}
            >
              <div className="third-section-content">
                <h3
                  className="mt-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  الدخول إلى دورة اللغة العربيةعن بعد
                </h3>
                <div className="container" style={{ textAlign: "end" }}>
                  <p
                    className="m-0 mb-12 reveal-from-bottom"
                    data-reveal-delay="400"
                  >
                    الوصول إلى دورة اللغة الإنجليزيةالعربية الخاصة بك عبر
                    الإنترنت من أجل معايشة حقيقة للغة العربية الفصحى 144 وحدة
                    دراسية ضمن 6 مستويات تعليمية. تحدث العربية الفصحىكأنك حفيد
                    الأصمعي
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div> */
  );
}
