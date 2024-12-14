"use client"
import { ConnectKitButton } from "connectkit";

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, truncatedAddress, ensName, chain }) => {
        return (
          <button onClick={show} className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[10px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
            {isConnected ? truncatedAddress : "connect"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};