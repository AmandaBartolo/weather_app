import styled from "styled-components";
import { Box } from "@mui/material";

export const CardsContainer = styled(Box)`
  height: 40%;
  margin: 0 50px 50px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardContainer = styled(Box)`
  width: 30%;
  height: 46%;
  background-color: white;
  border-radius: 30px;
`;

export const ConditionName = styled(Box)`
  padding: 8% 30px 0 30px;
  display: flex;
  justify-content: space-between;

  .name-condition {
    font-weight: 700;
  }
`;

export const ConditionResult = styled(Box)`
  padding: 8px;
  display: flex;
  justify-content: center;

  .result-condition {
    font-size: 22px;
    font-weight: 800;
  }
`;

export const ConditionGraph = styled(Box)`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .rate-text {
    color: #aaaaaa;
  }

  .rate-gradient {
    display: flex;
    justify-content: space-between;
  }
`;

export const MarkerRate = styled(Box)`
  width: 3.2vw;
  height: 8px;
  border-radius: 22px;
`;
