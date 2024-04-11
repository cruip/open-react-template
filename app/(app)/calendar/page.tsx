"use client";

import React from "react";
import Calendly from "@/components/calendly";

export default function Calendar() {
  return (
    <div className="bg-white">
      <Calendly eventName="onboarding" />
    </div>
  );
}
