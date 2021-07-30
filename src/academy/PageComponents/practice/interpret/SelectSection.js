import React, { useContext } from "react";
import ImgButton from "../../../elements/ImgButton";
import Image from "../../../elements/Image";
import { SelectedActorContext } from "./InterpretContext";

const SelectSection = () => {
  const [, setSelectedActor] = useContext(SelectedActorContext);
  return (
    <div className='fl-co-ce p-32'>
      <Image
        image='interpret_icon_black.svg'
        type='icon'
        alt='interpret icon'
        width={100}
      />
      <div className='fl-co-ce' style={{ width: "40%" }}>
        <h2 style={{ color: "black" }}>Who are you going to play?</h2>
        <p className='txt-al-ce' style={{ color: "grey" }}>
          You'll read their text out loud and will act out a real conversation.
          Then, you'll be able to listen to yourself afterwards.
        </p>
      </div>
      <div className='fl mt-20'>
        <Image
          className='m-16'
          style={{ borderRadius: 17, cursor: "pointer" }}
          onClick={() => {
            setSelectedActor(1);
          }}
          type='custom'
          alt='...'
          image='avatars/avatar3.jpg'
          width={100}
        />
        <Image
          className='m-16'
          style={{ borderRadius: 17, cursor: "pointer" }}
          onClick={() => {
            setSelectedActor(2);
          }}
          type='custom'
          alt='...'
          image='avatars/avatar4.jpg'
          width={100}
        />
      </div>
    </div>
  );
};

export default SelectSection;
