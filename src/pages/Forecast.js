import React from 'react';
import { convertDate2Day, forecastIcon } from '../assets/scripts/main.js';
import '../assets/scripts/main.css';

const Forecast = ({data, forecastinfo}) => (
    <main>
    <h1 className= "text-center mb-5 text-light">
      {data.error ? 'City Not Found' : data.name && forecastinfo.error ? `Forecast Unavailable For ${data.name}` : data.name && forecastinfo.daily ? `Forecast For ${data.name}` : 'Welcome to WeatherCentral'}
    </h1>
    {data.error ? <h2 className="text-center text-light">Forecast Data Unavailable</h2> : forecastinfo.error? null: data.name && forecastinfo.daily ? null : <h2 className="text-center text-light">Start by Searching for a City</h2>}
    {data.error ? null : forecastinfo.error? null: data.name && forecastinfo.daily? (
        <>
            <section>
            <div className="container-lg my-5">
                <div className="row row-cols-sm-2 row-cols-md-3 g-4">
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="forecast-day p-5 text-center border rounded shadow-lg">
                        <h5 className="mb-2">{convertDate2Day(forecastinfo.daily.time[0])}</h5>
                        <img src={forecastIcon(forecastinfo.daily.weather_code[0])} alt="Condition Icon" className="img-fluid mb-2" />
                        <h5 className="mb-0">{forecastinfo.daily.temperature_2m_max[0].toFixed()}&deg;F/<span className="text-muted">{forecastinfo.daily.temperature_2m_min[0].toFixed()}&deg;F</span></h5>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="forecast-day p-5 text-center border rounded shadow-lg">
                        <h5 className="mb-2">{convertDate2Day(forecastinfo.daily.time[1])}</h5>
                        <img src={forecastIcon(forecastinfo.daily.weather_code[1])} alt="Condition Icon" className="img-fluid mb-2" />
                        <h5 className="mb-0">{forecastinfo.daily.temperature_2m_max[1].toFixed()}&deg;F/<span className="text-muted">{forecastinfo.daily.temperature_2m_min[1].toFixed()}&deg;F</span></h5>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="forecast-day p-5 text-center border rounded shadow-sm">
                        <h5 className="mb-2">{convertDate2Day(forecastinfo.daily.time[2])}</h5>
                        <img src={forecastIcon(forecastinfo.daily.weather_code[2])} alt="Condition Icon" className="img-fluid mb-2" />
                        <h5 className="mb-0">{forecastinfo.daily.temperature_2m_max[2].toFixed()}&deg;F/<span className="text-muted">{forecastinfo.daily.temperature_2m_min[2].toFixed()}&deg;F</span></h5>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="forecast-day p-5 text-center border rounded shadow-sm">
                        <h5 className="mb-2">{convertDate2Day(forecastinfo.daily.time[3])}</h5>
                        <img src={forecastIcon(forecastinfo.daily.weather_code[3])} alt="Condition Icon" className="img-fluid mb-2" />
                        <h5 className="mb-0">{forecastinfo.daily.temperature_2m_max[3].toFixed()}&deg;F/<span className="text-muted">{forecastinfo.daily.temperature_2m_min[3].toFixed()}&deg;F</span></h5>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="forecast-day p-5 text-center border rounded shadow-sm">
                        <h5 className="mb-2">{convertDate2Day(forecastinfo.daily.time[4])}</h5>
                        <img src={forecastIcon(forecastinfo.daily.weather_code[4])} alt="Condition Icon" className="img-fluid mb-2" />
                        <h5 className="mb-0">{forecastinfo.daily.temperature_2m_max[4].toFixed()}&deg;F/<span className="text-muted">{forecastinfo.daily.temperature_2m_min[4].toFixed()}&deg;F</span></h5>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="forecast-day p-5 text-center border rounded shadow-sm">
                        <h5 className="mb-2">{convertDate2Day(forecastinfo.daily.time[5])}</h5>
                        <img src={forecastIcon(forecastinfo.daily.weather_code[5])} alt="Condition Icon" className="img-fluid mb-2" />
                        <h5 className="mb-0">{forecastinfo.daily.temperature_2m_max[5].toFixed()}&deg;F/<span className="text-muted">{forecastinfo.daily.temperature_2m_min[5].toFixed()}&deg;F</span></h5>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    ) : null}
    {/* <section>
    <div className="container-lg my-5">
        <div className="row row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col-sm-6 col-md-4 mb-4">
            <div className="p-5 text-center border rounded shadow-lg bg-light">
                <h5 className="mb-2">{convertDate2Day(forecastinfo.daily.time[0])}</h5>
                <img src="icon1.png" alt="Weather Icon" className="img-fluid mb-2" />
                <h5 className="mb-0">{forecastinfo.daily.temperature_2m_max[0].toFixed()}&deg;F/<span className="text-muted">{forecastinfo.daily.temperature_2m_min[0].toFixed()}&deg;F</span></h5>
            </div>
            </div>
            <div className="col-sm-6 col-md-4 mb-4">
            <div className="p-5 text-center border rounded shadow-lg bg-light">
                <h5 className="mb-2">Date 2</h5>
                <img src="icon2.png" alt="Weather Icon" className="img-fluid mb-2" />
                <p className="mb-0">High: 28°C</p>
                <p>Low: 18°C</p>
            </div>
            </div>
            <div className="col-sm-6 col-md-4 mb-4">
            <div className="p-5 text-center border rounded shadow-sm bg-light">
                <h5 className="mb-2">Date 3</h5>
                <img src="icon3.png" alt="Weather Icon" className="img-fluid mb-2" />
                <p className="mb-0">High: 27°C</p>
                <p>Low: 17°C</p>
            </div>
            </div>
            <div className="col-sm-6 col-md-4 mb-4">
            <div className="p-5 text-center border rounded shadow-sm bg-light">
                <h5 className="mb-2">Date 4</h5>
                <img src="icon4.png" alt="Weather Icon" className="img-fluid mb-2" />
                <p className="mb-0">High: 26°C</p>
                <p>Low: 16°C</p>
            </div>
            </div>
            <div className="col-sm-6 col-md-4 mb-4">
            <div className="p-5 text-center border rounded shadow-sm bg-light">
                <h5 className="mb-2">Date 5</h5>
                <img src="icon4.png" alt="Weather Icon" className="img-fluid mb-2" />
                <p className="mb-0">High: 29°C</p>
                <p>Low: 19°C</p>
            </div>
            </div>
            <div className="col-sm-6 col-md-4 mb-4">
            <div className="p-5 text-center border rounded shadow-sm bg-light">
                <h5 className="mb-2">Date 6</h5>
                <img src="icon4.png" alt="Weather Icon" className="img-fluid mb-2" />
                <p className="mb-0">High: 24°C</p>
                <p>Low: 14°C</p>
            </div>
            </div>
        </div>
    </div>
    </section> */}
    </main>
  );
  
  export default Forecast;