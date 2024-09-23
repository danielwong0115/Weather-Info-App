async function getinfo(url, setData) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            setData({"error": true});
            return;
            // throw new Error('Network response was not ok');
        }
        const jsonresponse = await response.json();
        setData(jsonresponse);
        console.log(jsonresponse);
        return jsonresponse;
        } 
    catch (error) {
        // console.error('Problem with the fetch operation:', error);
        setData({"error": true});
    }
}

async function getAirInfo(lat, lon, setAirQuality) {
    const airurl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone`;
    try{
        const response = await fetch(airurl);
        if (!response.ok) {
            setAirQuality({"error": true});
            return;
            // throw new Error('Network for aqi response was not ok');
        }
        const jsonresponse2 = await response.json();
        setAirQuality(jsonresponse2);
    }
    catch (error){
        // console.error('Error fetching air quality data:', error);
        setAirQuality({"error": true});
    }
}

async function getForecastInfo(lat, lon, setforecast6) {
    const forecasturl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto`;
    try{
        const response = await fetch(forecasturl);
        if (!response.ok) {
            setforecast6({"error": true});
            return;
            // throw new Error('Network for aqi response was not ok');
        }
        const jsonresponse3 = await response.json();
        setforecast6(jsonresponse3);
        console.log(jsonresponse3);
    }
    catch (error){
        // console.error('Error fetching forecast data:', error);
        setforecast6({"error": true});
    }
}
  
export async function handleSubmit (e, url, setData, setAirQuality, setforecast6) {
    e.preventDefault();
    const weatherData = await getinfo(url, setData);
    if (weatherData && weatherData.coord) {
        getAirInfo(weatherData.coord.lat, weatherData.coord.lon, setAirQuality);
        getForecastInfo(weatherData.coord.lat, weatherData.coord.lon, setforecast6);
    }
}

export function convertUnixTime(unixtime, offset) {
    const date = new Date(unixtime * 1000);

    const utcOffset = date.getTimezoneOffset() * 60000;
    const localTime = new Date(date.getTime() + utcOffset + (offset * 1000));
    
    const converted_time = localTime.toLocaleTimeString("en-US", {
        hour: 'numeric',
        minute: 'numeric',
    });
    
    return converted_time;
}

export function convertDate2Day(apidate) {
    const date = new Date(apidate);

    const utcOffset = date.getTimezoneOffset() * 60000;
    const converted_date = new Date(date.getTime() + utcOffset);

    const formatted_date = converted_date.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'});
    return formatted_date;
}

export function aqiMessage(aqi) {
    if (aqi < 51) {
        return "Good";
    } else if (aqi >= 51 && aqi < 101) {
        return "Moderate";
    } else if (aqi >= 101 && aqi < 151) {
        return "Unhealthy for Sensitive Groups";
    } else if (aqi >= 151 && aqi < 201) {
        return "Unhealthy";
    } else if (aqi >= 201 && aqi < 301) {
        return "Very Unhealthy";
    } else {
        return "Hazardous";
    }
}

export function forecastIcon(condition_code) {
    if (condition_code === 0 || condition_code === 1) {
        return 'https://openweathermap.org/img/wn/01d@2x.png';
    } else if (condition_code === 2) {
        return 'https://openweathermap.org/img/wn/02d@2x.png';
    } else if (condition_code === 3) {
        return 'https://openweathermap.org/img/wn/03d@2x.png';
    } else if (condition_code === 45 || condition_code === 48) {
        return 'https://openweathermap.org/img/wn/50d@2x.png';
    } else if (condition_code >= 51 && condition_code < 61) {
        return 'https://openweathermap.org/img/wn/09d@2x.png';
    } else if (condition_code >= 61 && condition_code < 66) {
        return 'https://openweathermap.org/img/wn/10d@2x.png';
    } else if (condition_code >= 66 && condition_code < 80) {
        return 'https://openweathermap.org/img/wn/13d@2x.png';
    } else if (condition_code >= 80 && condition_code < 85) {
        return 'https://openweathermap.org/img/wn/09d@2x.png';;
    } else if (condition_code >= 85 && condition_code < 95) {
        return 'https://openweathermap.org/img/wn/13d@2x.png';
    } else {
        return 'https://openweathermap.org/img/wn/11d@2x.png';
    }
}