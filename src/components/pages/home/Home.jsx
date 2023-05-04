import React, { useState } from "react";
import "./Home.css";
import HomeHeader from "./homeHeader/HomeHeader";
import projectsData from "./homeData/HomeData";
import { LineAxis, LineAxisOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Home = ({ setDisplay, setHomeId }) => {
  const [projectDisplay, setProjectDisplay] = useState(false);
  const [id, setId] = useState("");

  const handleProjectDisplay = (id) => {
    setProjectDisplay((prev) => !prev);
    setId(id);
  };
  //Handlers
  const handleDisplay = (id2) => {
    setDisplay(true);
    setHomeId(id2);
  };
  return (
    <div className="homeWrapper">
      <div className="homeContents">
        <div className="homeContent1">
          <HomeHeader />
        </div>
        <div className="homeContent">
          <div className="homeContent1">Hello</div>
          <div className="homeContent2">
            <div className="homeContent2-1">
              <h2 className="homeContent2-titles">Internal projects</h2>
              <Link to="/singleAppPage/1" className="homeContent2-link">
                <LineAxis
                  className="homeContent2-link"
                  onClick={() => handleDisplay(1)}
                />
              </Link>
            </div>
            <div className="homeContent2-2">
              <h2 className="homeContent2-titles">External projects</h2>
              <div className="homeContent2-2_contents">
                {projectsData.map((project) => {
                  return (
                    <div
                      className="homeContent2-2_content"
                      onMouseLeave={handleProjectDisplay}
                      style={{
                        marginRight: project.id === id ? "-20px" : "0",
                        transition: "all 0.3s",
                      }}
                      key={project.id}
                    >
                      <div onMouseOver={() => handleProjectDisplay(project.id)}>
                        <h3 className="homeContent2-2_content_titles">
                          {project.projectName}
                        </h3>
                        <a
                          href={project.app_link}
                          alt="img"
                          className="homeContent2-2_content_link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LineAxisOutlined />
                        </a>
                      </div>
                      <p
                        className="homeContent2-2_content_details"
                        style={{
                          display: project.id === id ? "block" : "none",
                        }}
                      >
                        {project.details}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
