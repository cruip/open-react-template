"use client";

import { ReactNode } from "react";

export default function PageBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Global ambient background — low-intensity gradient on every page */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Main ambient glow */}
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 opacity-25 blur-[120px] dark:opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--color-royal) 0%, var(--color-gold) 40%, transparent 70%)",
          }}
        />
        {/* Subtle secondary glow */}
        <div
          className="absolute -right-40 top-[300px] h-[400px] w-[400px] opacity-10 blur-[100px] dark:opacity-5"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      {children}
    </div>
  );
}