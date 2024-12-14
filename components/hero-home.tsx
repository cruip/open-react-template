"use client"
import { ConnectButton } from "./web3/customConnectBtn";
import { Web3Provider } from "./web3/Web3Provider";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Refereum Nexus
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Where Networks Flourish, and Rewards Flow Infinitely.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <Web3Provider>
                  <ConnectButton/>
                </Web3Provider>

                <Link href="/register" 
                className="btn relative bg-gradient-to-b from-gray-800 to-gray-800/60 
                bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none 
                before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent 
                before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box]
                 before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
                  hover:bg-[length:100%_150%] ml-2">
                register
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
