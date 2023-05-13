import React from "react";
import "./Sidebar.css";
import AppBoard from "../pages/appBoard/AppBoard";
const Sidebar = ({display, setDisplay, setHomeId, homeId}) => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarWrapper-contents">
      </div>
      <div className="sidebarWrapper-content-2">
        <AppBoard display={display} setDisplay={setDisplay} setHomeId={setHomeId} homeId={homeId}/>
      </div>
    </div>
  );
};
export default Sidebar;