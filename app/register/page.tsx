"use client"

import Register from "@/components/register";
import { Web3Provider } from "@/components/web3/Web3Provider"

function RegisterPage(){

  return(
  <Web3Provider>
      <Register/>
  </Web3Provider>)
}
export default RegisterPage;