

const WeatherCards = ({ weather, temperature }) => {

console.log(weather)

  return (
         <div className="card">
    <h1>Weather App</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <section>
        <header>⛅</header>
        <article>
            <h3>"{weather?.weather[0].description}"</h3>
            <ul>
                <li><span>Wind Speed</span>{weather?.wind.speed}Meter/sec</li>
                <li><span>Clouds</span>{weather?.clouds.all}%</li>
                <li><span>Pressure</span>{weather?.main.pressure}Hpa</li>
            </ul>

            <button className="button">Change to</button>
        </article>
    </section>
    <footer>
      <h4>{temperature?.celsius}</h4>
    </footer>
    </div>
   
  )
}

export default WeatherCards