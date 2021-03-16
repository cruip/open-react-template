import React from "react";

export default function Decorator() {
  return (
    <section
      className='section-padding-xs reveal-from-bottom fl-ce'
      data-reveal-delay='200'
    >
      <img
        src={require("../assets/images/decorator.png")}
        alt='decorator'
        style={{ margin: "auto" }}
      />
    </section>
  );
}
