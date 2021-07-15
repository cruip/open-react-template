import React, { useContext } from "react";

import { TFunction } from "../utils/Store";

import RegisterPage from "../components/sections/register";

export default function Register() {
  const t = useContext(TFunction);
  return (
    <>
      <RegisterPage t={t} />
    </>
  );
}
