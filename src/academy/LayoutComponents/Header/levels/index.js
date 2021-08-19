import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { Popover } from "@material-ui/core";
import { Line } from "rc-progress";
import classNames from "classnames";
import IntlMessages from "../../../elements/IntlMessages";
import CertificateContent from "../../../globals/CertificateContent";
import { setLevel } from "../../../reducers/GlobalState";
import { setUnits } from "../../../reducers/MainPage";

const Levels = ({
  level,
  setLevel,
  certificateProgress,
  setUnits,
  direction,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleSelect = (id) => {
    setLevel(id);
    setUnits([]);
    handleClose();
  };

  return (
    <div style={{ width: "60%" }}>
      <div style={{ width: 560 }}>
        <div
          onClick={handleClick}
          style={{ color: "blue", width: "max-content" }}
        >
          <IntlMessages id='course.change-level' />
        </div>
        <Popover
          className={classNames(direction === "rtl" && "text-align-end")}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <div className='p-26 fl-co'>
            <div
              className='mb-12 p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(1);
              }}
            >
              <span>
                <IntlMessages id='certificate-level.beginner' />
              </span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(2);
              }}
            >
              <span>
                <IntlMessages id='certificate-level.lower-intermediate' />
              </span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(3);
              }}
            >
              <span>
                <IntlMessages id='certificate-level.intermediate' />
              </span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(4);
              }}
            >
              <span>
                <IntlMessages id='certificate-level.upper-intermediate' />
              </span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(5);
              }}
            >
              <span>
                <IntlMessages id='certificate-level.advanced' />
              </span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(6);
              }}
            >
              <span>
                <IntlMessages id='certificate-level.bussiness' />
              </span>
            </div>
          </div>
        </Popover>
        <div className='mb-8 fl-ju-co-sp-be'>
          <span>
            <CertificateContent type='title' />
          </span>
          <span className='ml-12'>{certificateProgress}%</span>
        </div>
        <div className='fl-ce'>
          <Line
            percent={certificateProgress}
            strokeWidth='1.2'
            trailWidth='1.2'
            strokeColor='#00c6c2'
          />
        </div>
      </div>
    </div>
  );
};
const mapState = (state) => ({
  level: state.GlobalState.level,
  certificateProgress: state.MainPage.certificateProgress,
  direction: state.GlobalState.direction,
});

const mapDis = (dispatch) => ({
  setLevel: (enable) => dispatch(setLevel(enable)),
  setUnits: (enable) => dispatch(setUnits(enable)),
});

export default connect(mapState, mapDis)(Levels);