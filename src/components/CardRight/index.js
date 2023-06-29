import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Chart from "../../components/Chart";
import { WeatherContext } from "../../contexts/WeatherContext";
import { CardRightContainer, GraphWrapper, UserInfoWrapper } from "./style";
import CardsWrapper from "./CardsWrapper";

export default function CardRight() {
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

  return (
    <CardRightContainer>
      <UserInfoWrapper>
        <Box className="user-content">
          <Typography className="text-name">Welcome back Isabella!</Typography>
          <Typography className="text-info">
            Check out today's weather information
          </Typography>
        </Box>

        <Box className="profile-info">
          <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
          <AccountBoxIcon fontSize="large" sx={{ cursor: "pointer" }} />
        </Box>
      </UserInfoWrapper>

      <GraphWrapper>
        <Box>
          <Typography className="text-next-hours">Upcoming hours</Typography>
        </Box>

        <Box className="text-temp-chart">
          <Typography>
            {fahrenheit === false ? `${tempC}ºC` : `${tempF}ºF`}
          </Typography>
          <Typography>
            {fahrenheit === false ? `${tempC1}ºC` : `${tempF1}ºF`}
          </Typography>
          <Typography>
            {fahrenheit === false ? `${tempC2}ºC` : `${tempF2}ºF`}
          </Typography>
          <Typography>
            {fahrenheit === false ? `${tempC3}ºC` : `${tempF3}ºF`}
          </Typography>
          <Typography>
            {fahrenheit === false ? `${tempC4}ºC` : `${tempF4}ºF`}
          </Typography>
          <Typography>
            {fahrenheit === false ? `${tempC5}ºC` : `${tempF5}ºF`}
          </Typography>
          <Typography>
            {fahrenheit === false ? `${tempC6}ºC` : `${tempF6}ºF`}
          </Typography>
          <Typography>
            {fahrenheit === false ? `${tempC7}ºC` : `${tempF7}ºF`}
          </Typography>
        </Box>
        <Chart />
      </GraphWrapper>

      <Typography className="text-details">
        More details of today's weather
      </Typography>

      <CardsWrapper />
    </CardRightContainer>
  );
}
