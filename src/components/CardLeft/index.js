import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import SunriseImg from "../../assets/icons/sunrise.png";
import SunsetImg from "../../assets/icons/sunset.png";
import { WeatherContext } from "../../contexts/WeatherContext";
import {
  CardLeftContainer,
  CityInfoWrapper,
  Dot,
  IconsWrapper,
  MarkerDot,
  SwitchButton,
  TempWrapper,
} from "./style";

export default function CardLeft() {
  const {
    fahrenheit,
    setFahrenheit,
    nameCity,
    sunrise,
    sunset,
    tempC,
    tempF,
    condition,
    today,
    day,
  } = useContext(WeatherContext);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[today.getMonth()];

  const changeTempUnity = () => {
    setFahrenheit(!fahrenheit);
  };

  return (
    <CardLeftContainer>
      <IconsWrapper>
        <Box className="icon-add-bg">
          <AddOutlinedIcon style={{ color: "#5c9ce5" }} />
        </Box>

        <Box className="dot-wrapper">
          <MarkerDot />
          <Dot />
          <Dot />
        </Box>

        <Box className="switch-wrapper">
          <Typography className="text-temp">ºC</Typography>
          <SwitchButton onChange={changeTempUnity} />
          <Typography className="text-temp">ºF</Typography>
        </Box>
      </IconsWrapper>

      <CityInfoWrapper>
        <Box className="name-city-wrapper">
          <Box className="name-city-content">
            <NearMeOutlinedIcon fontSize="small" />
            <Typography className="name-city-text">{nameCity}, USA</Typography>
          </Box>

          <Typography className="date-text">
            Today {day} {month}
          </Typography>
        </Box>

        <Box className="sun-info-wrapper">
          <Box className="sun-content">
            <img src={SunriseImg} alt="Sunrise icon." />
            <Typography>{sunrise}</Typography>
          </Box>

          <Box className="sun-content">
            <img src={SunsetImg} alt="Sunset icon." />
            <Typography>{sunset}</Typography>
          </Box>
        </Box>
      </CityInfoWrapper>

      <TempWrapper>
        <Typography className="temp-text">
          {fahrenheit === false ? `${tempC}ºC` : `${tempF}ºF`}
        </Typography>
        <Typography className="condition-text">{condition}</Typography>
      </TempWrapper>
    </CardLeftContainer>
  );
}
