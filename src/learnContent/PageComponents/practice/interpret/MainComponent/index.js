import React, { useContext, useState } from "react";
import classNames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";

import { DataToShowContext, SelectedActorContext } from "../InterpretContext";

import Image from "../../../../elements/Image";

const MainComponent = () => {
  const [dataToShow] = useContext(DataToShowContext);
  const [selectedActor] = useContext(SelectedActorContext);

  return (
    <section
      className='fl-co-ce pt-32'
      style={{ maxHeight: "57vh", minHeight: "57vh" }}
    >
      <div
        className='fl fl-co'
        style={{ width: 960, overflowX: "hidden", scrollbarWidth: "none" }}
      >
        <div className='app-inner-content-layout--main order-3 order-lg-2 card-box'>
          <PerfectScrollbar>
            <div className='chat-wrapper p-3'>
              {dataToShow.map(({ id, actorID, actorName, text }, ind) => (
                <div
                  key={id + ind}
                  className={classNames(
                    "chat-item",
                    selectedActor === actorID && "chat-item-reverse",
                    "p-2 mb-2"
                  )}
                >
                  <div
                    className={classNames(
                      "align-box-row",
                      selectedActor === actorID && "flex-row-reverse"
                    )}
                  >
                    <div className='avatar-icon-wrapper avatar-icon-lg align-self-start'>
                      <div className='avatar-icon rounded-circle shadow-none'>
                        <Image
                          type='custom'
                          alt='...'
                          image='avatars/avatar3.jpg'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='chat-box bg-gray-400 text-second'>
                        <p>{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
