import React from 'react';
import { aqiMessage } from '../assets/scripts/main.js';

const AirQuality = ({data, airinfo}) => (
    <main>
    <h1 className= "text-center mb-5 text-light">
      {data.error ? 'City Not Found' : data.name && airinfo.error ? `Air Quality Unavailable For ${data.name}` : data.name && airinfo.current ? `Air Quality For ${data.name}` : 'Welcome to WeatherCentral'}
    </h1>
    <section>
      {data.error ? null : airinfo.error? null: airinfo.current ? <h2 className="text-center text-light">Current AQI</h2> : <h2 className="text-center text-light">Start by Searching for a City</h2>}
      {data.error ? null : airinfo.current ? <h1 className="display-1 text-center fw-bold mb-2 text-light">{airinfo.current.us_aqi}</h1> : null}
      {data.error ? null : airinfo.current ? <h2 className="text-center fw-bold text-light">{aqiMessage(airinfo.current.us_aqi)}</h2> : null}
      <div className="container-lg my-4">
        <div className="p-4 bg-light rounded-3 shadow-lg">
          <div className="row text-center">
            <h3 className="mb-5">Polutant Levels</h3>
            <div className="col-md-4 mb-3">
              <h4>PM<sub>10</sub></h4>
              {data.error ? <p>---</p> : airinfo.current ? <p>{airinfo.current.pm10} &micro;g/m<sup>3</sup></p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4>PM<sub>2.5</sub></h4>
              {data.error ? <p>---</p> : airinfo.current ? <p>{airinfo.current.pm2_5} &micro;g/m<sup>3</sup></p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4>Carbon Monoxide</h4>
              {data.error ? <p>---</p> : airinfo.current ? <p>{airinfo.current.carbon_monoxide} &micro;g/m<sup>3</sup></p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4>Nitrogen Dioxide</h4>
              {data.error ? <p>---</p> : airinfo.current ? <p>{airinfo.current.nitrogen_dioxide} &micro;g/m<sup>3</sup></p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4>Sulphur Dioxide</h4>
              {data.error ? <p>---</p> : airinfo.current ? <p>{airinfo.current.sulphur_dioxide} &micro;g/m<sup>3</sup></p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4>Ozone</h4>
              {data.error ? <p>---</p> : airinfo.current ? <p>{airinfo.current.ozone} &micro;g/m<sup>3</sup></p> : <p>---</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
  
  export default AirQuality;