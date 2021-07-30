import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { Popover } from "@material-ui/core";
import { Line } from "rc-progress";
import CertificateContent from "../../../globals/CertificateContent";
import { setLevel } from "../../../reducers/GlobalState";
import { setUnits } from "../../../reducers/MainPage";

const Levels = ({ level, setLevel, certificateProgress, setUnits }) => {
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
          Change level
        </div>
        <Popover
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
          <div className='p-16 fl-co'>
            <div
              className='mb-12 p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(1);
              }}
            >
              <span>A1. Beginner</span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(2);
              }}
            >
              <span>A2. Lower Intermediate</span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(3);
              }}
            >
              <span>B1. Intermediate</span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(4);
              }}
            >
              <span>B2. Upper Intermediate</span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(5);
              }}
            >
              <span>B2-C1. Advanced</span>
            </div>
            <div
              className='mb-12  p-0'
              style={{ padding: "10px 20px", cursor: "pointer" }}
              onClick={() => {
                handleSelect(6);
              }}
            >
              <span>C1. Business</span>
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
});

const mapDis = (dispatch) => ({
  setLevel: (enable) => dispatch(setLevel(enable)),
  setUnits: (enable) => dispatch(setUnits(enable)),
});

export default connect(mapState, mapDis)(Levels);
