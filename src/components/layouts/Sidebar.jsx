import React from "react";
import "./Sidebar.css";
import { HomeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AppBoard from "../pages/appBoard/AppBoard";
const Sidebar = ({display, setDisplay, setHomeId, homeId}) => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarWrapper-contents">
        <div className="sidebarWrapper-content-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND_EFKh9c47XeItrUh8GvR7TUaD1N66E3tw&usqp=CAU"
            alt="img"
            className="sidebarLogo"
          />
        </div>
      </div>
      <div className="sidebarWrapper-content-2">
        <Link to="/">
          <HomeOutlined className="sidebarHome-icon" />
        </Link>
        <AppBoard display={display} setDisplay={setDisplay} setHomeId={setHomeId} homeId={homeId}/>
      </div>
    </div>
  );
};
export default Sidebar;