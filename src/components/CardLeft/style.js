import styled from "styled-components";
import { Box, Switch } from "@mui/material";
import BgImg from "../../assets/sun-bg-img.png";

export const CardLeftContainer = styled(Box)`
  width: 30%;
  height: 100%;
  background: #5c9ce5 url(${BgImg}) no-repeat center bottom;
  background-size: contain;
  border-radius: 40px;
  color: white;
`;

export const IconsWrapper = styled(Box)`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  .icon-add-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 26px;
    height: 26px;
    border-radius: 8px;
    cursor: pointer;
  }

  .dot-wrapper {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .switch-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    .text-temp {
      font-size: 12px;
    }
  }
`;

export const MarkerDot = styled(Box)`
  width: 20px;
  height: 8px;
  background-color: white;
  border-radius: 22px;
  cursor: pointer;
`;

export const Dot = styled(Box)`
  width: 8px;
  height: 8px;
  background-color: #9dc3ef;
  border-radius: 50%;
  cursor: pointer;
`;

export const SwitchButton = styled(Switch)`
  & .MuiSwitch-switchBase {
    color: white !important;
  }

  & .MuiSwitch-track {
    background-color: white !important;
  }
`;

export const CityInfoWrapper = styled(Box)`
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .name-city-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .name-city-content {
    display: flex;
    align-items: center;
  }

  .name-city-text {
    margin-left: 4px;
    font-size: 18px;
    font-weight: 400;
  }

  .date-text {
    font-size: 14px;
    font-weight: 200;
  }

  .sun-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sun-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const TempWrapper = styled(Box)`
  padding: 40px;

  .temp-text {
    font-size: 80px;
    text-align: center;
  }

  .condition-text {
    font-size: 22px;
    text-align: center;
  }
`;
