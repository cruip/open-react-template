import React from "react";

const LiveSessions = () => {
  return (
    <section className='pb-24'>
      <div>
        <h3>Classes Live</h3>
      </div>
      <div className='fl card' style={{ width: "100%", height: 220 }}>
        <div style={{ flex: 1, background: "lightBlue" }}>1</div>
        <div style={{ flex: 1 }}>
          <div className='ml-32 mt-12'>
            <span>Class - type</span>
            <h4 className='m-0'>Name of class</h4>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div className='ml-32 mt-12'>
            <span style={{ fontSize: 16 }}>
              Preperation before the session :
            </span>
            <h6 className='m-0'>Descrype session</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSessions;
