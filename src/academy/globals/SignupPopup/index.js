import React from "react";
import Image from "../../elements/Image";
import Button from "../../elements/Button";

const SignupPopup = ({ close }) => {
  return (
    <div
      className='fl-ce'
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: 50932,
        overflow: "hidden",
        background: "#000000a3",
      }}
    >
      <div className='p-32' style={{ background: "white", borderRadius: 17 }}>
        <div className='fl fl-ju-co-en'>
          <Image
            onClick={() => close()}
            style={{ cursor: "pointer" }}
            className='p-12'
            type='icon'
            image='cancel_icon.svg'
            alt='cancel icon'
            width={43}
          />
        </div>
        <div
          className='mt-32 mb-32 ml-64 mr-64 fl-co-ce'
          style={{ maxWidth: 420 }}
        >
          <div className='mb-24'>
            <h2 className='text-center' style={{ color: "black" }}>
              Blocked activity
            </h2>
            <p className='text-center'>
              You need a Premium subscription to do this activity and practise
              your speaking and pronunciation. Practising these skills is so
              important for being able to communicate in English!
            </p>
          </div>
          <div className='mb-24'>
            <Button style={{ borderRadius: 50, background: "orange" }}>
              Sign up
            </Button>
          </div>
          <div>
            <a href='' style={{ color: "black", textDecoration: "underline" }}>
              Keep using the Basic plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
