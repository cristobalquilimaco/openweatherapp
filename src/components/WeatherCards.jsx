import React, { useState } from "react"

const WeatherCards = ({ weather, temperature }) => {

  const [temCelsius, setTemCelsius] = useState(true)


  const changeTemperature = () => {setTemCelsius(!temCelsius)}

console.log(weather)

  return (
         <div className="card">
    <h1>Weather App</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <section>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        <article>
            <h3>"{weather?.weather[0].description}"</h3>
            <ul>
                <li><span>Wind Speed</span>{weather?.wind.speed}Meter/sec</li>
                <li><span>Clouds</span>{weather?.clouds.all}%</li>
                <li><span>Pressure</span>{weather?.main.pressure}hPa</li>
            </ul>
              <h4>
              {
                temCelsius
                ? `${temperature?.celsius}°C`
                : `${temperature?.farenheit}°F`
              }
              </h4>


            <button onClick={changeTemperature}>Change to {temCelsius ? "°F" : "°C"}</button>
        </article>
    </section>
    </div>
   
  )
}

export default WeatherCards