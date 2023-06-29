import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext("");

export const WeatherStorage = ({ children }) => {
  const [data, setData] = useState("");
  const [fahrenheit, setFahrenheit] = useState(false);
  const today = new Date();
  const hours = today.getHours();
  const day = today.getDay();

  const urlApi = `http://api.weatherapi.com/v1/forecast.json?key=0088a89746d54e01b43183015232906&q=new-york`;

  useEffect(() => {
    const getDataWeather = () => {
      axios.get(urlApi).then((response) => {
        setData(response.data);
      });
    };
    getDataWeather();
  }, [urlApi]);

  const nameCity = data?.location?.name;
  const sunrise = data?.forecast?.forecastday[0]?.astro?.sunrise;
  const sunset = data?.forecast?.forecastday[0]?.astro?.sunset;
  const tempC = data?.current?.temp_c;
  const tempF = data?.current?.temp_f;
  const condition = data?.current?.condition.text;
  const humidity = data?.current?.humidity;
  const wind = data?.current?.wind_kph;
  const precipitation = data?.current?.precip_mm;
  const precipitationCm = precipitation / 10;
  const uv = data?.current?.uv;
  const feelsLikeC = data?.current?.feelslike_c;
  const feelsLikeF = data?.current?.feelslike_f;
  const chanceOfRain =
    data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain;
  const tempC1 = data?.forecast?.forecastday[0]?.hour[hours + 1]?.temp_c;
  const tempC2 = data?.forecast?.forecastday[0]?.hour[hours + 2]?.temp_c;
  const tempC3 = data?.forecast?.forecastday[0]?.hour[hours + 3]?.temp_c;
  const tempC4 = data?.forecast?.forecastday[0]?.hour[hours + 4]?.temp_c;
  const tempC5 = data?.forecast?.forecastday[0]?.hour[hours + 5]?.temp_c;
  const tempC6 = data?.forecast?.forecastday[0]?.hour[hours + 6]?.temp_c;
  const tempC7 = data?.forecast?.forecastday[0]?.hour[hours + 7]?.temp_c;

  const tempF1 = data?.forecast?.forecastday[0]?.hour[hours + 1]?.temp_f;
  const tempF2 = data?.forecast?.forecastday[0]?.hour[hours + 2]?.temp_f;
  const tempF3 = data?.forecast?.forecastday[0]?.hour[hours + 3]?.temp_f;
  const tempF4 = data?.forecast?.forecastday[0]?.hour[hours + 4]?.temp_f;
  const tempF5 = data?.forecast?.forecastday[0]?.hour[hours + 5]?.temp_f;
  const tempF6 = data?.forecast?.forecastday[0]?.hour[hours + 6]?.temp_f;
  const tempF7 = data?.forecast?.forecastday[0]?.hour[hours + 7]?.temp_f;

  let value = {
    fahrenheit,
    setFahrenheit,
    nameCity,
    sunrise,
    sunset,
    tempC,
    tempF,
    condition,
    humidity,
    wind,
    precipitation,
    precipitationCm,
    uv,
    feelsLikeC,
    feelsLikeF,
    chanceOfRain,
    tempC1,
    tempC2,
    tempC3,
    tempC4,
    tempC5,
    tempC6,
    tempC7,
    tempF1,
    tempF2,
    tempF3,
    tempF4,
    tempF5,
    tempF6,
    tempF7,
    today,
    day,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
