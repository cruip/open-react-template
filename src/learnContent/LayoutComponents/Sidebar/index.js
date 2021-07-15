import React from "react";
import SidebarHeader from "./sidebarHeader";
import SidebarMenu from "./sidebarMenu";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className='side-bar'>
        <div className='sidebar-content'>
          <SidebarHeader />
          <SidebarMenu />
        </div>
      </div>
      {children}
    </>
  );
};
// export const SidebarProfile = page =>

export default Sidebar;
