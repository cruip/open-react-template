import React from "react";
import Image from "../../../elements/Image";

const SidebarHeader = () => {
  return (
    <div className='sidebar-header fl fl-al-it-ce'>
      <Image
        className='mr-16'
        type='icon'
        image='mainLogo1.svg'
        alt='icon'
        width={60}
      />
      <span>Arabic Lisan</span>
    </div>
  );
};

export default SidebarHeader;
