import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { Line } from "rc-progress";
import Image from "../../../elements/Image";
import IntlMessages from "../../../elements/IntlMessages";
import CertificateContent from "../../../globals/CertificateContent";

const CertificateSection = (props) => {
  const [checked, setChecked] = useState(false);

  const { certificateProgress } = props;

  return (
    <div className='fl lesson-container'>
      <div className='lesson-container-icon'>
        {checked && (
          <Image
            type='icon'
            image='checked_icon.svg'
            alt='icon container'
            style={{ height: "100%" }}
          />
        )}
      </div>
      <div style={{ borderLeft: ".14rem solid transparent" }}>
        <div className='lesson-spacer'>
          <div className='card fl-ro fl-ju-co-en p-20' style={{ height: 200 }}>
            <div className='lesson-img fl-ce'>
              <Image
                type='certificate'
                image='1.png'
                style={{ width: "80%" }}
              />
            </div>
            <div style={{ width: 20 }}></div>
            <div className='lesson-content fl-co-ce'>
              <div>
                <div className='fl fl-al-it-ce fl-ju-co-sp-be has-bottom-divider'>
                  <h5 className='mb-12' style={{ color: "black" }}>
                    <CertificateContent type='title' />
                  </h5>
                </div>
                <div className='mt-12'>
                  <span>
                    <IntlMessages id='course.level-certificate-text' />
                  </span>
                  <p className='mb-0'>
                    <IntlMessages id='course.progress-text' />
                  </p>
                  <div className='fl-ce'>
                    <Line
                      percent={certificateProgress}
                      strokeWidth='1.4'
                      trailWidth='1.4'
                      strokeColor='#00c6c2'
                    />
                    <span className='ml-12'>{certificateProgress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  locale: state.GlobalState.locale,
  level: state.GlobalState.level,

  nrUnits: state.MainPage.nrUnits,
  units: state.MainPage.units,
  certificateProgress: state.MainPage.certificateProgress,
});

export default connect(mapState)(CertificateSection);
