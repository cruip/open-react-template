import React from "react";
import SliderComponent from "../../../elements/Slider";

const data = [
  {
    id: 1,
    title: "Name of Class 1 ",
    starting: "2021-05-03T12:00:00+02:00",
    type: "Class 1",
    level: "level 1",
    duration: "40 min",
    content: {
      title: "descryption of session",
    },
  },
  {
    id: 2,
    title: "Name of Class 2",
    starting: "2021-05-03T12:00:00+02:00",
    type: "Class 2",
    level: "level 2",
    duration: "40 min",
    content: {
      title: "descryption of session",
    },
  },
  {
    id: 3,
    title: "Name of Class 3",
    starting: "2021-05-03T12:00:00+02:00",
    type: "Class 3",
    level: "level 3",
    duration: "40 min",
    content: {
      type: "unit",
      title: "descryption of session",
    },
  },
  {
    id: 4,
    title: "Name of Class 4",
    starting: "2021-05-03T12:00:00+02:00",
    type: "Class 4",
    level: "level 4",
    duration: "40 min",
    content: {
      type: "unit",
      title: "descryption of session asddasdasd",
    },
  },
];

const TodaySessions = () => {
  return (
    <section className='pb-24'>
      <h3>Todays Sessions</h3>
      <div>
        <SliderComponent>
          {data.map(({ title, type, level, duration, content }) => (
            <div className='fl-co card txt-al-st' style={{ height: "100%" }}>
              <div style={{ background: "lightBlue", minHeight: 200 }}>
                image here ..
              </div>
              <div>
                <div
                  className='ml-32 mt-12 has-bottom-divider'
                  style={{ height: 100 }}
                >
                  <span>
                    {type} - {level}
                  </span>
                  <h4 className='m-0'>{title}</h4>
                </div>
              </div>
              <div>
                <div className='ml-32 mt-12' style={{ minHeight: 100 }}>
                  <span style={{ fontSize: 16 }}>
                    Preperation before the session :
                  </span>
                  <h6 className='m-0'>{content.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
    </section>
  );
};

export default TodaySessions;
