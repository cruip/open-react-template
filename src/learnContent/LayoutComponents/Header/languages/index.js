import React, { useContext, useState } from "react";
import { connect } from "react-redux";

import { IconButton, Popover, useTheme } from "@material-ui/core";
import Image from "../../../elements/Image";
import { setLocale } from "../../../reducers/GlobalState";
import { setLoading } from "../../../../appReducers/GlobalAppState";

const Languages = ({ setLocale, setLoading }) => {
  // const [, updateLocale] = useContext(CurrentLanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <IconButton size='small' onClick={handleClick}>
        <Image type='flag' image='arabic.png' />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div style={{ width: "200px" }}>
          <div
            className='has-bottom-divider'
            style={{ padding: "15px 20px", fontWeight: "bolder" }}
          >
            Language
          </div>
          <div className='fl' style={{ padding: "10px 20px" }}>
            <span className='mr-16'>
              <Image type='flag' image='arabic.png' />
            </span>
            <span
              onClick={() => {
                setLocale({
                  languageId: "arabic",
                  locale: "ar",
                  name: "Arabic",
                });
                setLoading(true);
              }}
            >
              Arabic
            </span>
          </div>
          <div className='fl' style={{ padding: "10px 20px" }}>
            <span className='mr-16'>
              <Image type='flag' image='english.png' />
            </span>
            <span
              onClick={() => {
                setLocale({
                  languageId: "english",
                  locale: "en",
                  name: "English",
                });
                setLoading(true);
              }}
            >
              English
            </span>
          </div>
        </div>
      </Popover>
    </>
  );
};

const mapState = (state) => ({
  nrUnits: state.GlobalState.nrUnits,
});

export default connect(mapState, { setLocale, setLoading })(Languages);
