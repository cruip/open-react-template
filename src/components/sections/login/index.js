import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Check from "react-bootstrap/FormCheck";

export default function LoginPage({ t }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="section section-padding-m fl-ce">
      <div className="container-xs m-32 text-align-start">
        <div className="fl-co fl-ju-co-en mb-64">
          <h3 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            {t("forms_text_header_signin")}
          </h3>
          <div className="container">
            <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
              {t("forms_text_content")}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#25282c",
          padding: "2.3em",
          maxWidth: "450px",
          width: "100%",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" className="fl-co mb-24">
            <Form.Control
              autoFocus
              placeholder={t("login_email")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" className="fl-co mb-12">
            <Form.Control
              placeholder={t("login_password")}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mb-16 text-align-start">
            <span style={{ fontSize: ".7em", color: "#61b3ff" }}>
              {t("login_forgot_pass")}
            </span>
          </div>
          <Button
            block
            type="submit"
            className="login-btn"
            disabled={!validateForm()}
          >
            {t("login_login")}
          </Button>
        </Form>
      </div>
    </section>
  );
}
