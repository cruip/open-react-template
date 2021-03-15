import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

export default function RegisterPage({ t }) {
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
        <div className="fl-co fl-ju-co-en">
          <h3 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            {t("forms_text_header_signup")}
          </h3>
          <div className="container">
            <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
              {t("forms_text_content")}
            </p>
          </div>
        </div>
      </div>
      <div
        // className="container-xxs"
        style={{
          background: "#25282c",
          padding: "2.3em",
          maxWidth: "450px",
          width: "100%",
        }}
      >
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Row className="form-item">
                <Col className="mb-24">
                  <Form.Control size="m" placeholder={t("register_name")} />
                </Col>
                <Col className="mb-24">
                  <Form.Control
                    size="m"
                    placeholder={t("register_last_name")}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group size="m" controlId="email" className="mb-24">
              <Form.Control
                type="email"
                size="m"
                placeholder={t("register_email")}
              />
            </Form.Group>
            <Form.Group size="m" controlId="password" className="mb-24">
              <Form.Control
                size="m"
                type="password"
                value={password}
                placeholder={t("register_password")}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </Form.Group>
            {/* <Form.Group size="m" controlId="password" className="mb-24">
              <Form.Control
                size="m"
                type="password"
                value={password}
                placeholder={"Confirm Password"}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </Form.Group> */}
            <Button
              block
              size="m"
              type="submit"
              className="login-btn"
              disabled={!validateForm()}
            >
              {t("register_register")}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
