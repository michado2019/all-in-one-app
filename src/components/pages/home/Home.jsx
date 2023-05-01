import React from "react";
import "./Home.css";
import HomeHeader from "./homeHeader/HomeHeader";
import { projectData } from "../../ProjectData";
import { LinkOutlined } from "@mui/icons-material";
const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeContents">
        <div className="homeContent1">
          <HomeHeader />
        </div>
        <div className="homeContent2">
          {projectData.map((each, index) => {
            return (
              <div className="homeContent-div" key={each.id}>
                <h2 className="homeContent-div_title">{each.title}</h2>
                <img src={each.img} alt="img" className="homeProject-img" />
                <div className="homeContent-div2">
                  <div className="homeContent-div3">
                    <h3 className="homeIndex">{index + 1}</h3>
                    <div className="homeContent-div4">
                      <ul className="homeContent-div4_grid1">
                        <li>{each.skills_required.skill_1}</li>
                        <li>{each.skills_required.skill_2}</li>
                        <li>{each.skills_required.skill_3}</li>
                        <li>{each.skills_required.skill_4}</li>
                      </ul>
                    </div>
                    <LinkOutlined className="homeContent-link"/>
                  </div>
                  <div className="homeContent-div5">
                    <p className="homeContent-div5_details">{each.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
