"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRCode() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 bg-[#1e2a32] border border-[#3a4a55] rounded-2xl">
        <div className="p-3 bg-white rounded-xl">
          <QRCodeSVG
            value="https://www.srab-sa.com"
            size={150}
            bgColor="#ffffff"
            fgColor="#1e2a32"
            level="H"
          />
        </div>
        <p className="mt-3 text-sm text-[#9bacbc]/70 text-center font-medium">
          Scan to visit srab-sa.com
        </p>
      </div>
    </div>
  );
}
