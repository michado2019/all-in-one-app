import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SingleAppPage from "../pages/singleAppPage/SingleAppPage";
import WeatherApp from "../pages/apps/weatherApp/WeatherApp";
import { AppSinglePriceGridComponent } from "../pages/apps/singlePriceGridComponent/app/AppSinglePriceGridComponent";
const AppRouter = ({
  display,
  setDisplay,
  homeId,
  setHomeId,
  handleSearchChange,
  currentWeather,
  forecastWeather
}) => {
  return (
    <div className="appRouter">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              display={display}
              setDisplay={setDisplay}
              homeId={homeId}
              setHomeId={setHomeId}
            />
          }
        />
        <Route path="/singleAppPage/:id" element={<SingleAppPage />} />
        <Route
          path="/singleAppPage/:id/weatherApp"
          element={<WeatherApp handleSearchChange={handleSearchChange} currentWeather={currentWeather} forecastWeather={forecastWeather}/>}
        />
        <Route
          path="/singleAppPage/:id/singlePriceGridComponentApp"
          element={<AppSinglePriceGridComponent />}
        />
      </Routes>
    </div>
  );
};
export default AppRouter;