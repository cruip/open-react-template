"use client"

import React, { useRef } from "react";

export function AnimatedBackground() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div
      style={{
        zIndex: -1,
        bottom: 0,
        position: "fixed",
        width: "100%",
        filter: "opacity(0.2)",
      }}
    >
      <lottie-player
        ref={ref}
        src="https://lottie.host/b5e8b3cc-cbb1-454a-9bda-22d9c3a0e1ed/AlaqrbvWJB.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "50%" }}
        direction="1"
        mode="normal"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
