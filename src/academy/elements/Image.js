import React, { useState } from "react";

const Image = ({
  type,
  image,
  className,
  width,
  height,
  style,
  onClick,
  src,
}) => {
  const getSrc = () => {
    switch (type) {
      case "icon":
        return require(`../assets/images/icons/${image}`);

      case "cover":
        return require(`../assets/images/covers/${image}`);

      case "certificate":
        return require(`../assets/images/certificates/${image}`);

      case "flag":
        return require(`../assets/images/flags/${image}`);

      case "custom":
        return require(`../assets/images/${image}`);

      default:
        return image;
    }
  };

  return (
    <img
      className={className}
      onClick={onClick}
      src={getSrc()}
      style={style}
      width={width}
      height={height}
      alt='icon'
    />
  );
};

export default Image;
