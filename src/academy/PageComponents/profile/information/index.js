import React, { useEffect } from "react";
import { connect } from "react-redux";
import Section_1 from "./section_1";
import Section_2 from "./section_2";

import { fetchProfileData } from "../../../reducers/Profile";

const InformationWrapp = ({ fetchProfileData }) => {
  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className='p-32'>
      <Section_1 />
      <Section_2 />
    </div>
  );
};

export default connect(null, { fetchProfileData })(InformationWrapp);
