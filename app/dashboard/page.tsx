"use client"

import Dashboard from "@/components/dashboard";
import { Web3Provider } from "@/components/web3/Web3Provider";

export default function dashboard() {

function getUser(){
  
}

  return (
    <Web3Provider>
      <Dashboard/>
    </Web3Provider>
  );
}
