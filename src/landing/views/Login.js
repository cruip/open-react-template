import React, { useContext } from "react";
import { TFunction } from "../utils/Store";
import LoginPage from "../components/sections/login";

export default function Login() {
  const t = useContext(TFunction);
  return (
    <>
      <LoginPage t={t} />
    </>
  );
}
