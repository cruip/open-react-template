import React from "react";
import Image from "../../../elements/Image";
import IntlMessages from "../../../elements/IntlMessages";

const SidebarHeader = () => {
  return (
    <div className='sidebar-header fl fl-al-it-ce'>
      <Image type='icon' image='mainLogo1.svg' alt='icon' width={60} />
      <div style={{ width: 16 }}></div>
      <span>
        <IntlMessages id='arabic-lisan' />
      </span>
    </div>
  );
};

export default SidebarHeader;
