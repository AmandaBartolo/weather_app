import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { WeatherContext } from "../../contexts/WeatherContext";

export default function Chart() {
  const today = new Date();
  const hours = today.getHours();

  const {
    fahrenheit,
    tempC,
    tempC1,
    tempC2,
    tempC3,
    tempC4,
    tempC5,
    tempC6,
    tempC7,
    tempF,
    tempF1,
    tempF2,
    tempF3,
    tempF4,
    tempF5,
    tempF6,
    tempF7,
  } = useContext(WeatherContext);

  const data = [
    {
      time: `${hours}`,
      temp: `${fahrenheit === false ? `${tempC}` : `${tempF}`}`,
    },
    {
      time: `${hours + 1}:00`,
      temp: `${fahrenheit === false ? `${tempC1}` : `${tempF1}`}`,
    },
    {
      time: `${hours + 2}:00`,
      temp: `${fahrenheit === false ? `${tempC2}` : `${tempF2}`}`,
    },
    {
      time: `${hours + 3}:00`,
      temp: `${fahrenheit === false ? `${tempC3}` : `${tempF3}`}`,
    },
    {
      time: `${hours + 4}:00`,
      temp: `${fahrenheit === false ? `${tempC4}` : `${tempF4}`}`,
    },
    {
      time: `${hours + 5}:00`,
      temp: `${fahrenheit === false ? `${tempC5}` : `${tempF5}`}`,
    },
    {
      time: `${hours + 6}:00`,
      temp: `${fahrenheit === false ? `${tempC6}` : `${tempF6}`}`,
    },
    {
      time: `${hours + 7}:00`,
      temp: `${fahrenheit === false ? `${tempC7}` : `${tempF7}`}`,
    },
  ];

  return (
    <ResponsiveContainer width="94%" height="60%">
      <AreaChart data={data}>
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="time" />
        <Area type="monotone" dataKey="temp" stroke="#5c9ce5" fill="#5c9ce5" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
