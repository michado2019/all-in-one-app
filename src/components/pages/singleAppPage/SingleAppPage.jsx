import React from "react";
import "./SingleAppPage.css";
import { useParams, Link } from "react-router-dom";
import { fProjectData } from "../../ProjectData";
import HomeHeader from "../home/homeHeader/HomeHeader";
const SingleAppPage = () => {
  //state
  const [display, setDisplay] = React.useState(false);
  //useParams
  const { id } = useParams();
  return (
    <div className="singleAppPage-wrapper">
      <div className="singleAppPage-contents">
        {fProjectData
          .filter((each) => each.id == id)
          .map((each) => {
            return (
              <div key={each.id}>
                <HomeHeader />
                <div className="singleAppPage-content">
                  <Link
                    to={`/singleAppPage/${each.id}/${each.path}`}
                  >
                    {" "}
                    <p className="singleAppPage-content_link">Check the app here</p>{" "}
                  </Link>
                  <p
                    className="singleAppPage-skill_display"
                    onClick={() => setDisplay((prev) => !prev)}
                  >
                    Skills required
                  </p>{" "}
                  <div
                    className="singleAppPage-content2"
                    style={{ display: display ? "block" : "none" }}
                  >
                    <div className="singleAppPage-content3">
                      <p className="singleAppPage-info">
                        {each.skills_required.skill_1}
                      </p>
                      <p className="singleAppPage-info">
                        {each.skills_required.skill_2}
                      </p>
                      <p className="singleAppPage-info">
                        {each.skills_required.skill_3}
                      </p>
                      <p className="singleAppPage-info">
                        {each.skills_required.skill_4}
                      </p>
                    </div>
                  </div>
                  <div className="singleAppPage-content4">
                    <div className="singleAppPage-content5">
                      <img
                        src={each.img}
                        alt="img"
                        className="singleAppPage-content5_img"
                      />
                      <p className="singleAppPage-content5_details">
                        {each.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default SingleAppPage;
