import React, { useState } from "react";
import "./Home.css";
import HomeHeader from "./homeHeader/HomeHeader";
import projectsData from "./homeData/HomeData";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  LineAxis,
  LineAxisOutlined,
} from "@mui/icons-material";
import { Link, useSearchParams } from "react-router-dom";
import HomeTopPart from "./HomeTopPart";
const Home = ({ setDisplay, setHomeId }) => {
  // States
  const [search, setSearch] = useSearchParams();

  const [projectDisplay, setProjectDisplay] = useState(false);
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);

  /*Pagination */
  const perPage = 4;
  const pages = Math.ceil(projectsData.length / perPage);
  const skip = page * perPage - perPage;

  //Handlers
  const handleProjectDisplay = (id) => {
    setProjectDisplay((prev) => !prev);
    setId(id);
  };

  const handleDisplay = (id2) => {
    setDisplay(true);
    setHomeId(id2);
  };
  const handleNameSearch = (e) => {
    e.preventDefault();
    let projectFilter = e.target.value;
    if (projectFilter) {
      setSearch({ projectFilter: projectFilter, y: "t" });
    } else {
      setSearch({});
    }
  };
 
  return (
    <div className="homeWrapper">
      <div className="homeContents">
        <div className="homeContent1">
          <HomeHeader />
        </div>
        <div className="homeContent">
          <HomeTopPart handleNameSearch={handleNameSearch}/>
          <div className="homeContent2">
            <div className="homeContent2-1">
              <h2 className="homeContent2-titles">Internal projects</h2>
              <Link to="/singleAppPage/1" className="homeContent2-link">
                <LineAxis
                  className="homeContent2-link"
                  onClick={() => handleDisplay(1)}
                />
              </Link>
              <div className="homeContent2-arrow_flex">
                <ArrowBackIosNew
                  id="arrows"
                  style={{
                    backgroundColor: page <= 1 ? "#a9a6a6" : "",
                    display: page <= 1 ? "none" : "block",
                  }}
                  disabled={page <= 1}
                  onClick={() => setPage((prev) => prev - 1)}
                />
                <ArrowForwardIos
                  className="arrows"
                  style={{
                    backgroundColor: page >= pages ? "#a9a6a6" : "",
                    display: page >= pages ? "none" : "block",
                  }}
                  disabled={page >= pages}
                  aria-disabled={page >= pages}
                  onClick={() => setPage((prev) => prev + 1)}
                />
              </div>
            </div>
            <div className="homeContent2-2">
              <h2 className="homeContent2-titles">External projects</h2>
              <div className="homeContent2-2_contents">
                {projectsData
                  .filter((project) => {
                    let projectFilter = search.get("projectFilter");
                    if (!projectFilter) return true;
                    let projectName = project.projectName.toUpperCase();
                    return projectName.includes(projectFilter.toUpperCase());
                  })
                  .slice(skip, skip + perPage)
                  .map((project) => {
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
                        <div
                          onMouseOver={() => handleProjectDisplay(project.id)}
                          className="homeContent2-2_contentFlex"
                        >
                          <li className="homeContent2-2_content_titles">
                            {project.projectName}
                          </li>
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
