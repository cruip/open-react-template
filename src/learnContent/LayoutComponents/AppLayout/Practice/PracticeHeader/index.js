import React, { useContext, useEffect, useState } from "react";
import { Line } from "rc-progress";
import { useRouter } from "next/router";
import Image from "../../../../elements/Image";
// import {
//   DataToProgressContext,
//   DescripeContext,
//   ProgressBarContext,
//   TitleContext,
// } from "../context";

const PracticeHeader = ({ title, description, progress }) => {
  // Current unit from global context

  // const [progressBar] = useContext(ProgressBarContext);
  // const [dataToProgress] = useContext(DataToProgressContext);

  const [unitID, setUnitID] = useState("");

  useEffect(() => {
    setUnitID(window.location.pathname.split("/")[2]);
  }, []);

  return (
    <section className='fl fl-ce p-32'>
      <div style={{ width: "43em" }}>
        <div className='fl fl-co'>
          <div style={{ position: "relative" }}>
            <a href={"/unit/" + unitID}>
              <Image
                type='icon'
                image='left_icon.svg'
                alt='arrow icon'
                width={30}
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "-70px",
                }}
              />
            </a>
            <h3 style={{ margin: 0, color: "black" }}>{title}</h3>
          </div>
          <p className='mb-16' style={{ color: "grey" }}>
            {description}
          </p>
          {progress && (
            <Line
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

export default PracticeHeader;
