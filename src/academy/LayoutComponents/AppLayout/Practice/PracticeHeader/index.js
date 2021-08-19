import React, { useContext, useEffect, useState } from "react";
import { Line } from "rc-progress";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import Image from "../../../../elements/Image";
import IntlMessages from "../../../../elements/IntlMessages";
// import {
//   DataToProgressContext,
//   DescripeContext,
//   ProgressBarContext,
//   TitleContext,
// } from "../context";

const PracticeHeader = ({
  titleTextID,
  descriptionTextID,
  progress,
  locale,
}) => {
  const backImageStyles = {
    ltr: { transform: "translateY(-50%)", left: "-70px" },
    rtl: { transform: "translateY(-50%) rotate(180deg)", right: "-70px" },
  };

  const [unitID, setUnitID] = useState("");
  const [currentImageStyle, setCurrentImageStyle] = useState();
  const history = useHistory();

  useEffect(() => {
    setUnitID(window.location.pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    setCurrentImageStyle({ ...backImageStyles[locale.direction] });
  }, [locale]);

  return (
    <section className='fl fl-ce p-32'>
      <div style={{ width: "43em" }}>
        <div className='fl fl-co text-align-start'>
          <div style={{ position: "relative" }}>
            <Image
              onClick={() => {
                history.push("/unit/" + unitID);
              }}
              type='icon'
              image='left_icon.svg'
              alt='arrow icon'
              width={30}
              style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                ...currentImageStyle,
              }}
            />

            <h3 style={{ margin: 0, color: "black" }}>
              <IntlMessages id={titleTextID} />
            </h3>
          </div>
          <p className='mb-16' style={{ color: "grey" }}>
            <IntlMessages id={descriptionTextID} />
          </p>
          {progress && (
            <Line
              style={
                locale.direction === "rtl"
                  ? { transform: "rotate(180deg)" }
                  : null
              }
              percent={progress}
              strokeWidth='1.4'
              trailWidth='1.4'
              strokeColor='#00c6c2'
            />
          )}
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => ({
  locale: state.GlobalState.locale,
});

export default connect(mapState)(PracticeHeader);
