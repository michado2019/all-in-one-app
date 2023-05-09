import React, { useState } from "react";
import "./WeatherApp.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../../../weatherApi/WeatherApi";
import CurrentWeather from "./app/CurrentWeather";

const WeatherApp = ({ handleSearchChange, currentWeather, forecastWeather }) => {
  //States
  const [search, setSearch] = useState(null);

  //Handlers
  const handleChange = (searchData) => {
    setSearch(searchData);
    handleSearchChange(searchData);
  };
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="weatherApp-wrapper">
      <div className="weatherApp-contents">
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          className="weatherApp-search"
          onChange={handleChange}
          loadOptions={loadOptions}
        />
        {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      </div>
    </div>
  );
};
export default WeatherApp;
