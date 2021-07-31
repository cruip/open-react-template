import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Image from "../../elements/Image";

import SignupPopup from "../../globals/SignupPopup";

import { fetchUnitData } from "../../reducers/UnitData";

const Unit = (props) => {
  const {
    fetchUnitData,
    unitContent,
    unitTitle,
    unitData,
    extraActivityData,
    attachedExercise,
    history,
    location,
  } = props;

  const [unitID, setUnitID] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unitOnURL = window.location.pathname.split("/")[2];
    setUnitID(unitOnURL);
    // fetchUnitData();
  }, []);

  return (
    <>
      {open && (
        <SignupPopup
          close={() => {
            setOpen(false);
            document.body.style.overflow = "";
          }}
        />
      )}
      <section
        className='pt-64'
        style={{ color: "whitesmoke", overflow: "hidden" }}
      >
        <div className='fl-co-ce'>
          <div className='fl'>
            <div style={{ position: "absolute", left: 40 }}>
              <a href='/'>
                <Image type='icon' image='left-white_icon.svg' alt='Go back' />
              </a>
            </div>
            <h2 className='m-8 txt-al-ce' style={{ color: "whitesmoke" }}>
              {unitTitle}
            </h2>
          </div>
          <div>
            <p className='txt-al-ce'> {unitContent}</p>
          </div>
        </div>
      </section>
      <div
        className='fl fl-co fl-al-it-ce'
        style={{
          width: "max-content",
          margin: "auto",
          padding: "50px 0 100px 0",
        }}
      >
        <div className='mb-32'>
          {unitData.map(
            ({ link, title, content, icon, finished, blocked }, index) => (
              <div
                key={"unit " + index + 1}
                className='mb-32'
                style={{ opacity: (blocked && 0.6) || 1 }}
                onClick={() => {
                  if (!blocked) {
                    history.push(`/unit/${unitID}/practice` + link);
                  } else {
                    setOpen(true);
                    document.body.style.overflow = "hidden";
                  }
                }}
              >
                <div className='card-transparent fl fl-al-it-ce fl-ju-co-sp-be practise-card-item'>
                  <div className='fl fl-al-it-ce'>
                    <Image
                      className='mr-24'
                      type='icon'
                      image={icon}
                      width={57}
                    />
                    <div>
                      <span style={{ fontSize: 23 }}>{title}</span>
                      <p className='m-0' style={{ fontSize: 16 }}>
                        {content}
                      </p>
                    </div>
                  </div>
                  <div>
                    {blocked ? (
                      <Image type='icon' image='padlock_icon.svg' width={25} />
                    ) : (
                      <Image
                        type='icon'
                        image={
                          finished ? "checked_icon.svg" : "unchecked_icon.svg"
                        }
                        width={25}
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div
          className='pt-32 fl-co-ce'
          style={{ borderTop: "dashed 1px white" }}
        >
          <div
            className='p-12'
            style={{ color: "white", width: "80%", textAlign: "center" }}
          >
            <p>
              Was this unit a bit too short for you? Here, have a few more
              minutes of fun.
            </p>
          </div>
          {extraActivityData.map(
            ({ title, content, icon, id, link, finished }) => (
              <div key={id}>
                <a href={`/unit/1/extra${link}`}>
                  <div className='mb-32 mt-32'>
                    <div
                      className='card-transparent fl fl-al-it-ce fl-ju-co-sp-be practise-card-item'
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className='fl-ce'
                        style={{
                          position: "absolute",
                          width: 120,
                          height: 24,
                          background: "#344048",
                          top: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                          fontSize: 12,
                        }}
                      >
                        <span>EXTRA ACTIVITY</span>
                      </div>
                      <div className='fl fl-al-it-ce'>
                        <Image
                          className='mr-24'
                          type='icon'
                          image={icon}
                          width={57}
                        />
                        <div>
                          <span style={{ fontSize: 23 }}>{title}</span>
                          <p className='m-0' style={{ fontSize: 16 }}>
                            {content}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Image
                          type='icon'
                          image={
                            finished ? "checked_icon.svg" : "unchecked_icon.svg"
                          }
                          width={25}
                        />
                      </div>
                    </div>
                  </div>{" "}
                </a>
              </div>
            )
          )}
          <div>
            <div className='mb-32 mt-32'>
              <a href={attachedExercise} download>
                <div
                  className='card-transparent fl fl-al-it-ce fl-ju-co-sp-be practise-card-item'
                  style={{ cursor: "pointer", height: 150 }}
                >
                  <div
                    className='fl-ce'
                    style={{
                      position: "absolute",
                      width: 120,
                      height: 24,
                      background: "#344048",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      fontSize: 12,
                    }}
                  >
                    <span>DOWNLOAD</span>
                  </div>
                  <div className='fl fl-al-it-ce'>
                    <Image
                      className='mr-24'
                      type='icon'
                      image='pdf-download_icon.svg'
                      width={57}
                    />
                    <div>
                      <span style={{ fontSize: 23 }}>Attached Exercise</span>
                      <p className='m-0' style={{ fontSize: 16 }}>
                        Writing
                      </p>
                    </div>
                  </div>
                  <div>
                    <Image
                      type='icon'
                      image={false ? "checked_icon.svg" : "unchecked_icon.svg"}
                      width={25}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = (state) => ({
  unitData: state.UnitData.unitData,
  unitContent: state.UnitData.unitContent,
  unitTitle: state.UnitData.unitTitle,
  extraActivityData: state.UnitData.extraActivityData,
  attachedExercise: state.UnitData.attachedExercise,
});

export default connect(mapState, { fetchUnitData })(Unit);
