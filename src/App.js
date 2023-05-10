import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/layouts/Sidebar";
import AppRouter from "./components/routes";
import Footer from "./components/layouts/Footer";
import Rightbar from "./components/layouts/Rightbar";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./weatherApi/WeatherApi";
function App() {

  //States
  const [display, setDisplay] = useState(false);
  const [homeId, setHomeId] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  //Handlers
  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")
    //Fetch
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
   Promise.all([currentWeatherFetch, forecastWeatherFetch])
   .then(async(response) => {
      const currentWeatherResponse = await response[0].json()
      const forecastWeatherResponse = await response[1].json()
      setCurrentWeather({city: searchData.label, ...currentWeatherResponse})
      setForecastWeather({city: searchData.label, ...forecastWeatherResponse})
   })
  };
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="appSidebar-router">
        <Sidebar
          display={display}
          setDisplay={setDisplay}
          homeId={homeId}
          setHomeId={setHomeId}
        />
        <AppRouter
          display={display}
          setDisplay={setDisplay}
          homeId={homeId}
          setHomeId={setHomeId}
          handleSearchChange ={handleSearchChange}
          currentWeather={currentWeather}
          forecastWeather={forecastWeather}
        />
        <Rightbar
          homeId={homeId}
          setHomeId={setHomeId}
          setDisplay={setDisplay}
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;