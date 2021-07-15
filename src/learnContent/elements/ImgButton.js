import React from "react";
import classNames from "classnames";
import Image from "../elements/Image";

function ImgButton({ icon, alt, style, className, onClick, boxShadow, width }) {
  return (
    <button
      onClick={() => onClick()}
      className={classNames(
        "img-button",
        boxShadow && "button-box-shadow",
        className
      )}
      style={style}
    >
      <Image
        type='icon'
        image={icon}
        alt={alt ? alt : "button with image"}
        style={{ width: width || "100%" }}
      />
    </button>
  );
}

export default ImgButton;
