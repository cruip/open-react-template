import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CertificateContent from "../../../globals/CertificateContent";
import IntlMessages from "../../../elements/IntlMessages";
import Image from "../../../elements/Image";

const UnitsSection = ({ units, userName }) => {
  return (
    <>
      <div className='card mb-12 p-16 pb-32' style={{ width: "100%" }}>
        <span className='mb-8'>
          <IntlMessages id={"course.welcome"} /> {userName}!
        </span>
        <p>
          <CertificateContent type='content' />
        </p>
      </div>
      <div className='fl-co'>
        {units &&
          units.map(({ title, unit, cover, content, completed, progress }) => (
            <div className='fl lesson-container' key={unit}>
              <div className='lesson-container-icon'>
                {completed && (
                  <Image
                    type='icon'
                    image='checked_icon.svg'
                    alt='icon container'
                    style={{ height: "100%" }}
                  />
                )}
              </div>
              <div style={{ borderLeft: ".14rem solid #e8e8e8" }}>
                <div className='lesson-spacer'>
                  <a href={`/unit/${unit}`}>
                    <div
                      className='card fl-ro fl-ju-co- p-20'
                      style={{ height: "100%" }}
                    >
                      <div className='lesson-img'>
                        <img
                          // type='cover'
                          src={cover}
                          alt='lesson cover'
                          style={{ height: "100%" }}
                        />
                      </div>
                      <div style={{ width: 20 }}></div>
                      <div className='lesson-content'>
                        <div>
                          <span
                            style={{
                              color: "#919394",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            UNIT {unit}
                          </span>
                        </div>
                        <div className='mb-2'>
                          <span style={{ color: "black" }}>{content}</span>
                        </div>
                        <div className='lesson-content-section-1 mb-3'>
                          <div className='fl fl-al-it-ce fl-ju-co-sp-be'>
                            <span>{title}</span>
                            <div
                              className='text-align-end'
                              style={{ width: "36%", height: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div className='fl mb-12'>
                          {progress &&
                            progress.map((exercise, index) => (
                              <div className='fl-ce' key={index}>
                                {exercise.blocked ? (
                                  <Image
                                    type='icon'
                                    style={{ marginBottom: 2 }}
                                    image='padlock_icon.svg'
                                    width={18}
                                  />
                                ) : (
                                  <Image
                                    type='icon'
                                    className='mr-8'
                                    image={
                                      exercise.finished
                                        ? "checked_icon.svg"
                                        : "unchecked_icon.svg"
                                    }
                                    width={18}
                                  />
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const mapState = (state) => ({
  units: state.MainPage.units,
  userName: state.DataGenerator.userName,
});

export default connect(mapState)(UnitsSection);
