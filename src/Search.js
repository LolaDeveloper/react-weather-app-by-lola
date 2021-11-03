import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, cityName] = useState("");
  const [message, showMessage] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, SetWind] = useState(null);
  const [icon, setIcon] = useState(" ");

  function searchWeather(response) {
    showMessage(<div> {city} </div>);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    SetWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function getWeatherData(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=224e79ec9be151ffbe6eb3b4e7ab3ada&units=metric`;
    axios.get(url).then(searchWeather);
  }
  function updateCity(event) {
    cityName(event.target.value);
  }
  let form = (
    <form className="mb-3" onSubmit={getWeatherData}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            onChange={updateCity}
            className="form-control shadow-sm"
            placeholder="Type a city..."
            autoFocus={true}
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
  if (temperature) {
    return (
      <div className="container">
        {form}
        <strong>{message}</strong>
        <ul>
          <li>Temperature: {Math.round(temperature)} °C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img src={icon} alt=" " />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div> {form}</div>;
  }
}
