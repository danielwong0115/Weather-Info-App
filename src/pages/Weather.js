import React from 'react';
import { convertUnixTime } from '../assets/scripts/main.js';
import humidityIcon from '../assets/images/humidity_2.png';
import windIcon from '../assets/images/wind_1.png';
import visibilityIcon from '../assets/images/visibility_1.png';
import pressureIcon from '../assets/images/pressure_1.png';
import sunriseIcon from '../assets/images/sunrise_2.png';
import sunsetIcon from '../assets/images/sunset_1.png';

const Weather = ({data}) => (
    <main>
    <h1 className= "text-center mb-5 text-light">
      {data.error ? 'City Not Found' : data.name ? `Weather For ${data.name}` : 'Welcome to WeatherCentral'}
    </h1>
    <section>
      {data.error ? null : data.main && data.weather ? (
        <>
          <section>
            <div className="container-lg my-5">
                <div className="row justify-content-center g-0">
                <div className="col-lg-2 text-center">
                    <h1 className="display-1 text-center fw-bold mb-2 text-light">{data.main.temp.toFixed()}&deg;F</h1>
                    <h4 className= "text-center text-light">Feels Like {data.main.feels_like.toFixed()}&deg;F</h4>
                </div>
                <div className="col-lg-2 text-center">
                    <img className="img-fluid mx-auto d-block rounded" src= {`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Current Condition Icon" />
                    <h2 className="text-center mb-2 text-light">{data.weather[0].main}</h2>
                </div>
                </div>
            </div>
          </section>
        </>
      ) : <h2 className="text-center text-light">Start by Searching for a City</h2>}
      {/* <section>
        <div class="container-lg my-5">
            <div class="row justify-content-center g-0">
            <div class="col-lg-3 text-center">
                <h1 className="display-1 text-center fw-bold mb-2">60&deg;F</h1>
                <h4 className= "text-center">Feels Like 60&deg;F</h4>
            </div>
            <div class="col-lg-3 text-center">
                <img class="img-fluid mx-auto d-block rounded" src= "https://openweathermap.org/img/wn/10d@2x.png" alt="Pic of traditional crane" />
                <h2 className="text-center mb-2">Clouds</h2>
            </div>
            </div>
        </div>
      </section> */}
      {/* {data.error ? null : data.main ? <h1 className="display-1 text-center fw-bold mb-2">{data.main.temp.toFixed()}&deg;F</h1> : <h2 className="text-center">Start by Searching for a City</h2>}
      {data.error ? null : data.weather ? <h2 className="text-center mb-2">{data.weather[0].main}</h2> : null}
      {data.error ? null : data.main ? <h4 className= "text-center">Feels Like {data.main.feels_like.toFixed()}&deg;F</h4> : null} */}
      <section className="container-lg my-5">
        <div className="p-4 bg-light rounded-3 shadow-lg">
          <div className="row text-center">
            <h3 className="mb-5">Current Conditions</h3>
            <div className="col-md-4 mb-3">
              <h4><img src={humidityIcon} alt="Humidity Icon" />Humidity</h4>
              {data.main ? <p>{data.main.humidity}%</p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4><img src={windIcon} alt="Wind Icon" />Wind</h4>
              {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4><img src={visibilityIcon} alt="Visibility Icon" />Visibility</h4>
              {data.visibility ? <p>{data.visibility}m</p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4><img src={pressureIcon} alt="Pressure Icon" />Pressure</h4>
              {data.main ? <p>{data.main.pressure}hPa</p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4><img src={sunriseIcon} alt="Sunrise Icon" />Sunrise</h4>
              {data.sys && data.timezone? <p>{convertUnixTime(data.sys.sunrise, data.timezone)}</p> : <p>---</p>}
            </div>
            <div className="col-md-4 mb-3">
              <h4><img src={sunsetIcon} alt="Sunset Icon" />Sunset</h4>
              {data.sys && data.timezone ? <p>{convertUnixTime(data.sys.sunset, data.timezone)}</p> : <p>---</p>}
            </div>
          </div>
        </div>
      </section>
    </section>
    </main>
  );
  
  export default Weather;