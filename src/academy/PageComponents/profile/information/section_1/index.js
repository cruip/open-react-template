import React from "react";

const Section_1 = () => {
  return (
    <div className='card-full fl fl-al-it-ce text-align-start'>
      <div>
        <img
          src={require("../../../../assets/images/protection.png").default}
          alt='protection icon'
          width={105}
        />
      </div>
      <div style={{ width: 24 }}></div>
      <div>
        <h1 className='mb-8' style={{ color: "black" }}>
          Personal Information
        </h1>
        <p className='m-0'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Section_1;
