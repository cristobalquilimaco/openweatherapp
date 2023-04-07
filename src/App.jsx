import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCards from './components/WeatherCards'
import LoadingPage from './components/LoadingPage'
import ErrorFetch from './components/ErrorFetch'



function App() {

  const [latlon, setlatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [inputValue, setInputValue] = useState('')
  const [hasError, setHasError] = useState(false)



  

useEffect(() => {

  const success = pos => {
  
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setlatlon(obj)

  }
  const error = err => {}
  
  navigator.geolocation.getCurrentPosition(success, error)

}, [])


useEffect(() => {

if(latlon){

  const apiKey = '9aa856591b8704730049173d1e52c911'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&q=${inputValue}&lon=${latlon.lon}&appid=${apiKey}`

  axios.get(url)

  .then(res => {
    const celsius = (res.data.main.temp - 273.15).toFixed(1)
    const farenheit = (celsius * 9 / 5 +32).toFixed(1)

    setTemperature({celsius, farenheit})
    setWeather(res.data)
    setHasError(false)
  })
  .catch(err => {
    console.log(err)
    setHasError(true)
  })
}

}, [latlon, inputValue])


const handleSubmit = e =>{
  e.preventDefault()
  setInputValue(e.target.nameCountry.value)
  e.target.nameCountry.value= ''
}




return (
  <div className="App">
    <img className='appimage' src="./backgrounds/background4.jpg" alt="" />
    {weather ? (
      <div>
        <WeatherCards 
          weather={weather}
          temperature={temperature}
        />
        <form className='formInput' onSubmit={handleSubmit}>
          <input id='nameCountry' placeholder='Search city' type="text" required></input>
          <button className='buttonSubmit' >Search</button>
        </form>
      </div>
    ) : (
      <LoadingPage/>
    )}
    {hasError && (
      <p className='alertError'>
        <img className='sun' src="./backgrounds/icons8.gif" alt="" />
        we couldn't find the city
      </p>
    )}
  </div>
)
}

export default App
