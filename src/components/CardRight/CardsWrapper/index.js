import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import HumidityImg from "../../../assets/icons/humidity.png";
import WindImg from "../../../assets/icons/wind.png";
import PrecipitationImg from "../../../assets/icons/precipitation.png";
import UVImg from "../../../assets/icons/UV.png";
import FeelsLikeImg from "../../../assets/icons/feels-like.png";
import ChanceOfRainImg from "../../../assets/icons/chance-of-rain.png";
import { WeatherContext } from "../../../contexts/WeatherContext";
import { CardsContainer, ConditionGraph, MarkerRate } from "./style";
import Card from "../Card";

export default function CardsWrapper() {
  const {
    fahrenheit,
    humidity,
    wind,
    precipitation,
    precipitationCm,
    uv,
    feelsLikeC,
    feelsLikeF,
    chanceOfRain,
  } = useContext(WeatherContext);

  return (
    <CardsContainer>
      <Card
        nameCondition="Humidity"
        conditionImg={HumidityImg}
        resultCondition={`${humidity}%`}
      >
        <ConditionGraph>
          <Box>
            <Typography className="rate-text">good</Typography>
            <MarkerRate
              style={{
                backgroundColor: humidity < 50 ? "#aaaaaa" : "#5c9ce5",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">normal</Typography>
            <MarkerRate
              style={{
                backgroundColor: humidity > 50 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">bad</Typography>
            <MarkerRate
              style={{
                backgroundColor: humidity >= 80 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>
        </ConditionGraph>
      </Card>

      <Card
        nameCondition="Wind"
        conditionImg={WindImg}
        resultCondition={`${wind}km/h`}
      >
        <ConditionGraph>
          <Box>
            <Typography className="rate-text">0-5</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: wind > 0 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">6-10</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: wind >= 6 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">11-20</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: wind >= 11 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">21-30</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: wind >= 21 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">31-40</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: wind >= 31 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>
        </ConditionGraph>
      </Card>

      <Card
        nameCondition="Precipitation"
        conditionImg={PrecipitationImg}
        resultCondition={`${precipitationCm}cm`}
      >
        <ConditionGraph>
          <Box>
            <Typography className="rate-text">0</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation > 0 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">10</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 10 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">20</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 20 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">30</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 30 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">40</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 40 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">50</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 50 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">60</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 60 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">70</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 70 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">80</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 80 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">90</Typography>
            <MarkerRate
              style={{
                width: "1vw",
                backgroundColor: precipitation >= 90 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>
        </ConditionGraph>
      </Card>

      <Card nameCondition="UV index" conditionImg={UVImg} resultCondition={uv}>
        <ConditionGraph>
          <Box>
            <Typography className="rate-text">0-2</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: uv < 2 ? "#aaaaaa" : "#5c9ce5",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">3-5</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: uv >= 3 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">6-7</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: uv >= 6 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">8-10</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: uv >= 8 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>

          <Box>
            <Typography className="rate-text">11+</Typography>
            <MarkerRate
              style={{
                width: "2vw",
                backgroundColor: uv >= 11 ? "#5c9ce5" : "#aaaaaa",
              }}
            />
          </Box>
        </ConditionGraph>
      </Card>

      <Card
        nameCondition="Feels like"
        conditionImg={FeelsLikeImg}
        resultCondition={
          fahrenheit === false ? `${feelsLikeC}ºC` : `${feelsLikeF}ºF`
        }
      >
        <ConditionGraph style={{ flexDirection: "column" }}>
          <Box className="rate-gradient">
            <Typography className="rate-text">0º</Typography>
            <Typography className="rate-text">25º</Typography>
            <Typography className="rate-text">50º</Typography>
            <Typography className="rate-text">100º</Typography>
          </Box>
          <MarkerRate
            style={{
              width: "100%",
              background: `linear-gradient(to right, #5c9ce5 ${
                fahrenheit === false ? feelsLikeC : feelsLikeF
              }%, #aaaaaa ${fahrenheit === false ? feelsLikeC : feelsLikeF}%`,
            }}
          />
        </ConditionGraph>
      </Card>

      <Card
        nameCondition="Chance of rain"
        conditionImg={ChanceOfRainImg}
        resultCondition={`${chanceOfRain}%`}
      >
        <ConditionGraph style={{ flexDirection: "column" }}>
          <Box className="rate-gradient">
            <Typography className="rate-text">0%</Typography>
            <Typography className="rate-text">25%</Typography>
            <Typography className="rate-text">50%</Typography>
            <Typography className="rate-text">75%</Typography>
            <Typography className="rate-text">100%</Typography>
          </Box>
          <MarkerRate
            style={{
              width: "100%",
              background: `linear-gradient(to right, #5c9ce5 ${chanceOfRain}%, #aaaaaa ${
                0 - chanceOfRain
              }%)`,
            }}
          />
        </ConditionGraph>
      </Card>
    </CardsContainer>
  );
}
