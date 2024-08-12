import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ name }) => {
    //States
    const [temperature, setTemperature] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);

    const apiKey = "af036c78616a431fc4a0e68d71ad549f";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;

    useEffect(() => {
        axios
            .get(baseUrl)
            .then((res) => {
                const temp = res.data.main.temp;
                const wind = res.data.wind.speed;
                const icon = res.data.weather[0].icon;

                setTemperature(temp);
                setWindSpeed(wind);
                setWeatherIcon(`http://openweathermap.org/img/wn/${icon}@2x.png`);
            })
            .catch((error) => {
                console.error("Error fetching the weather data:", error);
            });
    }, [name]);

    return (
        <div>
            <h2>Weather in {name}</h2>
            {temperature !== null ? <p>Temperature: {temperature}°C</p> : <p>Loading temperature...</p>}
            {weatherIcon !== null ? <img src={weatherIcon} alt="Weather icon" /> : <p>Loading weather icon...</p>}
            {windSpeed !== null ? <p>Wind Speed: {windSpeed} m/s</p> : <p>Loading wind speed...</p>}
        </div>
    );
};

export default Weather;
