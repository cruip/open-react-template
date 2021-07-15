import React, { useContext } from "react";
import MainComponent from "./MainComponent";
import SelectSection from "./SelectSection";
import ActionComponent from "./ActionComponent";
import { SelectedActorContext } from "./InterpretContext";

const PracticeSection = () => {
  const [selectedActor] = useContext(SelectedActorContext);

  console.log(selectedActor);

  return (
    <div style={{ height: "70%" }}>
      {selectedActor === false ? (
        <SelectSection />
      ) : (
        <div className='fl fl-co fl-ju-co-sp-be' style={{ flex: "1" }}>
          <MainComponent />
          <ActionComponent />
        </div>
      )}
    </div>
  );
};

export default PracticeSection;
