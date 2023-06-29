import styled from "styled-components";
import { Box } from "@mui/material";

export const CardRightContainer = styled(Box)`
  width: 70%;
  height: 100%;
  background-color: #e4f1ff;
  border-radius: 40px;

  .text-details {
    padding: 30px 50px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const UserInfoWrapper = styled(Box)`
  padding: 50px 50px 30px 50px;
  display: flex;
  justify-content: space-between;

  .user-content {
    display: flex;
    flex-direction: column;

    .text-name {
      font-size: 22px;
      font-weight: 800;
    }

    .text-info {
      font-size: 18px;
      font-weight: 600;
    }
  }

  .profile-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const GraphWrapper = styled(Box)`
  height: 30%;
  margin: 0 50px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  .text-next-hours {
    font-size: 18px;
    font-weight: 700;
  }

  .text-temp-chart {
    width: 94%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;
