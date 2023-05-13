import React from "react";
import "./Header.css";
import { Cancel, HomeOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { fProjectData } from "../ProjectData";
const Header = ({ setDisplay, display }) => {
  //Custom navbar link
  const CustomNavbarLink = ({ to, ...props }) => {
    let activeStyle = {
      color: "red",
      transition: "all 0.3s",
      conditon: true,
    };
    return (
      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : { textDecoration: "none" }
        }
        to={to}
        end
        {...props}
      />
    );
  };
  return (
    <div className="header-wrapper">
      <ul className="header-contents">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND_EFKh9c47XeItrUh8GvR7TUaD1N66E3tw&usqp=CAU"
          alt="img"
          className="logo"
        />
        <li className="headerLink-list">
          <CustomNavbarLink to="/" className="home-icon">
            <HomeOutlined />
          </CustomNavbarLink>
        </li>
        <h2
          className="home-icon"
          id="projects"
          onClick={() => setDisplay((prev) => !prev)}
        >
          Apps
        </h2>
        <li
          className="headerLink-list"
          id="projectTitle"
          style={{
            marginLeft: display ? "" : "-1000px",
            transition: "all 0.5s",
          }}
        >
          <Cancel
            className="headerCancel"
            onClick={() => setDisplay((prev) => !prev)}
          />
          {fProjectData.map((each) => {
            return (
              <div>
                <CustomNavbarLink
                  to={`/singleAppPage/${each.id}`}
                  className="home-icon"
                  onClick={() => setDisplay((prev) => !prev)}
                  id="project"
                >
                  {each.title}
                </CustomNavbarLink>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
export default Header;
