import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import IntlMessages from "../../elements/IntlMessages";

const CertificateContent = ({ type, level }) => {
  const certificates_content = [
    {
      content_id: "course.certificate-level.beginner",
      title_id: "certificate-level.beginner",
      level: 1,
    },
    {
      content_id: "course.certificate-level.lower-intermediate",
      title_id: "certificate-level.lower-intermediate",
      level: 2,
    },
    {
      content_id: "course.certificate-level.beginner",
      title_id: "certificate-level.intermediate",
      level: 3,
    },
    {
      content_id: "course.certificate-level.intermediate",
      title_id: "certificate-level.upper-intermediate",
      level: 4,
    },
    {
      content_id: "course.certificate-level.advanced",
      title_id: "certificate-level.advanced",
      level: 5,
    },
    {
      content_id: "course.certificate-level.bussiness",
      title_id: "certificate-level.bussiness",
      level: 6,
    },
  ];

  const [currentContent, setCurrentContent] = useState(() =>
    Object.assign(
      {},
      ...certificates_content.filter((item) => item.level === level)
    )
  );

  useEffect(() => {
    setCurrentContent(
      Object.assign(
        {},
        ...certificates_content.filter((item) => item.level === level)
      )
    );
  }, [level]);

  return type === "title" ? (
    <IntlMessages id={currentContent.title_id} />
  ) : (
    <IntlMessages id={currentContent.content_id} />
  );
};

const mapState = (state) => ({
  level: state.GlobalState.level,
});

export default connect(mapState)(CertificateContent);
