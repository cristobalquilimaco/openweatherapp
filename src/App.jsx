import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCards from './components/WeatherCards'

function App() {

  const [latlon, setlatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [inputValue, setInputValue] = useState('')

  

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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
  axios.get(url)

  .then(res => {
    const celsius = (res.data.main.temp - 273.15).toFixed(1)
    const farenheit = (celsius * 9 / 5 +32).toFixed(1)

    setTemperature({celsius, farenheit})
    setWeather(res.data)
  })
  .catch(err => console.log(err))

}

}, [latlon, inputValue])


const handleSubmit = e =>{
  e.preventDefault()
  setInputValue(e.target.nameCountry.value)
}

console.log(handleSubmit);


console.log(weather);




  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input id='nameCountry' type="text" />
      <button>Search</button>
    </form>
    <WeatherCards 
    weather={weather}
    temperature={temperature}
    />
    </div>
  )
}

export default App
