import React from "react";
import "./Home.css";
import HomeHeader from "./homeHeader/HomeHeader";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeContents">
        <div className="homeContent1">
          <HomeHeader />
        </div>
        <div className="homeContent">
          Home
        </div>
      </div>
    </div>
  );
};
export default Home;
