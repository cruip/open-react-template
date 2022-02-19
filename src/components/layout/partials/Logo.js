import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require("./../../../assets/images/AmbarLogo.svg")}
            alt="Logo"
            width={49}
            height={48}
            style={{
              borderTopLeftRadius: "14px",
              borderBottomLeftRadius: "14px",
            }}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
