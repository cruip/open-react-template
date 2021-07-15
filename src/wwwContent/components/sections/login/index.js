import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

import Form from "react-bootstrap/Form";
import Button from "../../elements/Button";
import Cookies from "universal-cookie";
import Check from "react-bootstrap/FormCheck";

import config from "../../../../app.config.json";

import { setAuth } from "../../../../appReducers/GlobalAppState";

const LoginPage = ({ t, setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMSG, setErrorMSG] = useState("");
  const [validated, setValidated] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const cookies = new Cookies();

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (email === "" || password === "") return setValidated(true);
    setButtonLoading(true);
  }

  useEffect(() => {
    if (buttonLoading) {
      const data = {
        email,
        password,
      };
      axios
        .post(config.api_url + "actions/user/login", data, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success) {
            cookies.set("user.id", res.data.user_id, {
              domain: config.app_domain,
            });

            window.location.href = config.redirect_url;
            return;
          }
          setButtonLoading(false);
          setValidated(true);
        })
        .catch((e) => {
          setButtonLoading(false);
          if (e.response.status === 401) {
            return setValidated(true);
          } else {
            console.log(e);
          }
        });
    }
  }, [buttonLoading]);

  return (
    <section className='section section-padding-m fl-ce'>
      <div className='container-xs m-32 text-align-start'>
        <div className='fl-co fl-ju-co-en mb-64'>
          <h3 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
            {t("forms_text_header_signin")}
          </h3>
          <div className='container'>
            <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
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
          <Form.Group controlId='email' className='fl-co mb-24'>
            <Form.Control
              autoFocus
              placeholder={t("login_email")}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={validated}
            />
          </Form.Group>
          <Form.Group controlId='password' className='fl-co mb-12'>
            <Form.Control
              required
              placeholder={t("login_password")}
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={validated}
            />

            <Form.Control.Feedback type='invalid'>
              Wrong Email or Password!
            </Form.Control.Feedback>
          </Form.Group>
          <div className='mb-24 text-align-start'>
            <span style={{ fontSize: ".7em", color: "#61b3ff" }}>
              {t("login_forgot_pass")}
            </span>
          </div>
          <Button
            type='submit'
            className='button-primary'
            wide
            loading={buttonLoading}
          >
            {t("login_login")}
          </Button>
        </Form>
      </div>
    </section>
  );
};
export default connect(null, { setAuth })(LoginPage);
