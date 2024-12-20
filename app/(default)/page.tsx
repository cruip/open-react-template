"use client"

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import { Web3Provider } from "@/components/web3/Web3Provider";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Web3Provider>
      <Hero />
      </Web3Provider>     
      <Workflows />
      <Features />
    </>
  );
}
