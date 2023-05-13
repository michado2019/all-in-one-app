import React from 'react'
import './ForecastWeather.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
const ForecastWeather = ({forecastWeather}) => {
    const DAYS_IN_A_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const currentDay = new Date().getDay()
    const forecastDays = DAYS_IN_A_WEEK.slice(currentDay, DAYS_IN_A_WEEK.length).concat(DAYS_IN_A_WEEK.slice(0, currentDay))
   console.log(forecastWeather)
  return (
    <div className='forecastWeather-wrapper'>
        <Accordion allowZeroExpanded>
         {
            forecastWeather.list.slice(0, 7).map((weather, index) => {
                return(
          <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className="accordionItemButton-div">
                       <div className="forecastItem-btn_div">
                           <img src={`/icons/${weather.weather[0].icon}.png`} alt="img" className="forecastItem-icon" />
                           <h2 className='forecastText' id="forecastText">{forecastDays[index]}</h2>
                       </div>
                       <div className="forecastItem-btn_div">
                         <h2 className='forecastText' id="forecast-description">{weather.weather[0].description}</h2>
                         <h2 className='forecastText' id="forecastText">{weather.main.temp_min}/{weather.main.temp_max}</h2>
                       </div>
                       </div>
                    </AccordionItemButton>
                </AccordionItemHeading> 
                <AccordionItemPanel>
                   <div className="accordionItemPanel-div">
                    <div className="accordionItemPanel-div1">
                    <div className="accordionItemPanel-item">
                       <h2 className='accordionItem-details'>Pressure</h2>
                       <h2>{weather.main.pressure}hPa</h2>
                    </div>
                    <div className="accordionItemPanel-item">
                       <h2 className='accordionItem-details'>Sea level</h2>
                       <h2>{weather.main.sea_level}m</h2>
                    </div>
                    <div className="accordionItemPanel-item">
                       <h2 className='accordionItem-details'>Clouds</h2>
                       <h2>{weather.clouds.all}%</h2>
                    </div>
                    </div>
                    <div className="accordionItemPanel-div2">
                    <div className="accordionItemPanel-item">
                       <h2 className='accordionItem-details'>Humidity</h2>
                       <h2>{weather.main.humidity}%</h2>
                    </div>
                    <div className="accordionItemPanel-item">
                       <h2 className='accordionItem-details'>Feels like</h2>
                       <h2>{Math.round(weather.main.feels_like)}°C</h2>
                    </div>
                    <div className="accordionItemPanel-item">
                       <h2 className='accordionItem-details'>Wind speed</h2>
                       <h2>{weather.wind.speed}m/s</h2>
                    </div>
                    </div>
                    </div>
                </AccordionItemPanel>
          </AccordionItem>
                )
            })
         }
        </Accordion>
    </div>
  )
}

export default ForecastWeather