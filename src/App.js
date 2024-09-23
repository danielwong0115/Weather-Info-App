import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Weather from './pages/Weather.js';
import AirQuality from './pages/AirQuality.js';
import Forecast from './pages/Forecast.js';
import { handleSubmit } from './assets/scripts/main.js';
import './assets/scripts/main.css';

function App() {

  const [data, setData] = useState({});
  const [place, setplace] = useState('');
  const [airQuality, setAirQuality] = useState({});
  const [forecast6, setforecast6] = useState({});

  const api_key = 'ENTER YOUR API KEY HERE'; //varies
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=imperial&appid=${api_key}`;

  const backgroundClasses = {
    "01d": "day-background",
    "02d": "day-background",
    "03d": "cloudy-background",
    "04d": "cloudy-background",
    "09d": "rainy-background",
    "10d": "rainy-background",
    "11d": "rainy-background",
    "13d": "snowy-background",
    "50d": "hazy-background",
    "01n": "night-background",
    "02n": "night-background",
    "03n": "cloudy-background",
    "04n": "cloudy-background",
    "09n": "rainy-background",
    "10n": "rainy-background",
    "11n": "rainy-background",
    "13n": "snowy-background",
    "50n": "hazy-background"
  }

  const backgroundClass = data.weather ? backgroundClasses[data.weather[0].icon] : "day-background";

  return (
    // <div className="App">
    // </div>

    <BrowserRouter>
      <div className={`${backgroundClass}`}>
        <Navbar place={place} setplace={setplace} handleSubmit={(e) => handleSubmit(e, url, setData, setAirQuality, setforecast6)} />
        <Routes>
          <Route path="/" element={<Weather data={data} />} />
          <Route path="/air_quality" element={<AirQuality data={data} airinfo={airQuality}/>} />
          <Route path="/forecast" element={<Forecast data={data} forecastinfo={forecast6}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
