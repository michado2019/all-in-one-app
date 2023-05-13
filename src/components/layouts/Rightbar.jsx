import React from "react";
import "./Rightbar.css";
import { fProjectData, bProjectData } from "../ProjectData";
import { ArrowRight, SearchOutlined } from "@mui/icons-material";
import { useSearchParams, Link } from "react-router-dom";
const Rightbar = ({ homeId, setDisplay, setHomeId }) => {
  //State
  const [searchParams, setSearchParams] = useSearchParams();

  //Handlers

  const handleDisplay = (id) => {
    setDisplay(true);
    setHomeId(id);
  };
  const handleTitleSearch = (e) => {
    e.preventDefault();
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter: filter, y: "true" });
    } else {
      setSearchParams({});
    }
  };
  return (
    <div className="rightBar-wrapper">
      <div className="rightBar-contents">
        <div className="rightBar-content1">
          <h2 className="rightBar-content1_title">FApps</h2>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="rightBar-content1_search"
              onChange={handleTitleSearch}
            />
            <SearchOutlined className="searchIcon" />
          </form>
          {fProjectData
            .filter((each) => {
              if (searchParams.get("filter")) {
                return each.title
                  .toLowerCase()
                  .includes(searchParams.get("filter").toLowerCase());
              }
              return each;
            })
            .map((each, index) => {
              return (
                <div
                  className="rightBar-content1_titleDiv"
                  key={each.id}
                  style={{ marginLeft: homeId === each.id ? "-8px" : "" }}
                >
                  <div
                    style={{ display: homeId === each.id ? "block" : "none" }}
                  >
                    <ArrowRight className="rightBar-content1_titleArrow" />
                  </div>
                  <ul
                    className="rightBar-content1_indexArrow"
                    onClick={() => handleDisplay(each.id)}
                  >
                    <Link
                      to={`singleAppPage/${each.id}`}
                      className="rightBar-content1_link"
                    >
                      <h4
                        className="rightBar-content1_index"
                        style={{
                          display: homeId === each.id ? "none" : "block",
                        }}
                      >
                        {index + 1}
                      </h4>
                      <li className="rightBar-content1_titleTitle">
                        {each.title}
                      </li>
                    </Link>
                  </ul>
                </div>
              );
            })}
        </div>
        <div
          className="rightBar-content1"
          style={{ display: bProjectData.length === 0 ? "none" : "block" }}
        >
          <h2>BApps</h2>
        </div>
      </div>
    </div>
  );
};
export default Rightbar;
