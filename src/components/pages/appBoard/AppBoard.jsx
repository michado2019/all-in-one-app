import React from "react";
import "./AppBoard.css";
import { fProjectData } from "../../ProjectData";
import { Link } from "react-router-dom";
const AppBoard = ({ display, setDisplay, setHomeId, homeId }) => {
  //Handlers
  const handleDisplay = (id) => {
    setDisplay(true);
    setHomeId(id);
  };
  return (
    <div className="appBoard-wrapper">
      <div className="appBoard-contents">
        <div className="appBoard-content">
          {fProjectData.map((each) => {
            return (
              <div
                className="appBoard-div"
                key={each.id}
                onMouseLeave={() => setDisplay(false)}
              >
                <h2 className="appBoard-div_title">{each.title}</h2>
                <Link
                  to={`singleAppPage/${each.id}`}
                  className="appBoard-link"
                  style={{
                    border: homeId === each.id ? "3px solid #266e2c" : "",
                    borderRadius: "3px",
                    padding: "4px",
                    transition: "all 0.1s",
                  }}
                >
                  <img
                    src={each.img}
                    alt="img"
                    className="appBoard-img"
                    onClick={() => handleDisplay(each.id)}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AppBoard;
