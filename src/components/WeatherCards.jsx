import React, { useState } from "react"



const WeatherCards = ({ weather, temperature}) => {

  const [temCelsius, setTemCelsius] = useState(true)
  



  const changeTemperature = () => {
    setTemCelsius(!temCelsius)
  }



  return (
         <div className="card">
    <h1>Weather App</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <section className="cardInfo">
      
        <img className="icons" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        <article className="informationApp">
            <h3>"{weather?.weather[0].description}"</h3>
            <ul>
                <li>Wind Speed <b>{weather?.wind.speed}Meter/sec</b></li>
                <li>Clouds<b>{weather?.clouds.all} %</b></li>
                <li>Pressure<b>{weather?.main.pressure} hPa</b></li>
            </ul>
            
        </article>
        
        
    </section>
    <div className="pieinfo">
        <h4>
              {
                temCelsius
                ? `${temperature?.celsius}°C`
                : `${temperature?.farenheit}°F`
              }
              </h4>
        <button className="btnChangeTem"  onClick={changeTemperature}>Change to {temCelsius ? "°F" : "°C"}</button>
        </div>
    </div>
   
  )
}

export default WeatherCards