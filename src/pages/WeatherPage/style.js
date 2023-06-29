import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background-color: #b4d7fe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperCards = styled(Box)`
  width: 95%;
  height: 90%;
  background-color: #5c9ce5;
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  box-shadow: 10px 10px 10px #adcef4;
`;
