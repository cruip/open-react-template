import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../containers/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Email: ${email}\n Senha: ${password}`)
  }

  return (
    <>
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <img
          style={{ width: '100px', margin: '10px 0 40px'}}
          src={require('./../assets/images/mufasa.png')}
          alt="Logo"
        />
        <FormGroup controlId="email" bsSize="large">
          <FormControl
            autoFocus
            type="email"
            placeholder="Email do Usuário"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            value={password}
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
      </div>
    </>
  );
}