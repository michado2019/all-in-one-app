import React from 'react'
import './ForecastWeather.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
const ForecastWeather = ({forecastWeather}) => {
    const DAYS_IN_A_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const currentDay = new Date().getDay()
    const forecastDays = DAYS_IN_A_WEEK.slice(currentDay, DAYS_IN_A_WEEK.length).concat(DAYS_IN_A_WEEK.slice(0, currentDay))
   console.log(currentDay)
   console.log(forecastDays)
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
                           <h2 className='forecastText' id="forecastText">{DAYS_IN_A_WEEK[index]}</h2>
                       </div>
                       <div className="forecastItem-btn_div">
                         <h2 className='forecastText' id="forecast-description">{weather.weather[0].description}</h2>
                         <h2 className='forecastText' id="forecastText">{weather.main.temp_min}/{weather.main.temp_max}</h2>
                       </div>
                       </div>
                    </AccordionItemButton>
                </AccordionItemHeading> 
                <AccordionItemPanel>
                   Hello Hello
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