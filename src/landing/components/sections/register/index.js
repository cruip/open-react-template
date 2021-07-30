import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

import Button from "../../elements/Button";
import { Col, Row } from "react-bootstrap";

import config from "../../../../app.config.json";

export default function RegisterPage({ t }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (name === "" || surname === "" || email === "" || password === "")
      return setValidated(true);
    setButtonLoading(true);
  }

  useEffect(() => {
    if (buttonLoading) {
      const data = {
        name,
        surname,
        email,
        password,
        language: "en",
      };
      axios
        .post(config.api_url + "actions/user/register", data)
        .then((res) => {
          res.data === "success" && history.push("/login");
        })
        .catch((e) => console.log(e));
    }
  }, [buttonLoading]);

  return (
    <section className='section section-padding-m fl-ce'>
      <div className='container-xs m-32 text-align-start'>
        <div className='fl-co fl-ju-co-en'>
          <h3 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
            {t("forms_text_header_signup")}
          </h3>
          <div className='container'>
            <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
              {t("forms_text_content")}
            </p>
          </div>
        </div>
      </div>
      <div
        // className="container-xxs"
        style={{
          background: "#25282c",
          padding: "2.8em 2.3em",
          maxWidth: "520px",
          width: "100%",
        }}
      >
        <div>
          <Form
            noValidate
            validated={validated}
            autoComplete='off'
            onSubmit={handleSubmit}
          >
            <Row>
              <Form.Group as={Col} className='mb-32' controlId='name'>
                <Form.Control
                  required
                  size='m'
                  placeholder={t("register_name")}
                  value={name}
                  autoComplete='off'
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} className='mb-32' controlId='surname'>
                <Form.Control
                  required
                  size='m'
                  value={surname}
                  autoComplete='off'
                  onChange={(e) => setSurName(e.target.value)}
                  placeholder={t("register_last_name")}
                />
              </Form.Group>
            </Row>

            <Form.Group controlId='email' className='mb-32'>
              <Form.Control
                required
                type='email'
                size='m'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("register_email")}
              />
            </Form.Group>

            <Form.Group controlId='password' className='mb-24'>
              <Form.Control
                required
                size='m'
                type='password'
                value={password}
                autoComplete='new-password'
                placeholder={t("register_password")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Check
              required
              label='Agree to terms and conditions'
              feedback='You must agree before submitting.'
              style={{ marginBottom: "24px" }}
            />

            <Button
              type='submit'
              className='button-primary'
              wide
              loading={buttonLoading}
            >
              {t("register_register")}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
