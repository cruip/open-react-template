"use client";

import Logo from "./logo";
import {Web3Provider } from "../web3/Web3Provider"
import { ConnectButton } from "../web3/customConnectBtn";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Web3Provider>
                <ConnectButton/>
              </Web3Provider>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
