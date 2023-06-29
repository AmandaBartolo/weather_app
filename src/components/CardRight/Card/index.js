import React from "react";
import { Typography } from "@mui/material";
import {
  CardContainer,
  ConditionName,
  ConditionResult,
} from "../CardsWrapper/style";

export default function Card({
  children,
  nameCondition,
  conditionImg,
  resultCondition,
}) {
  return (
    <CardContainer>
      <ConditionName>
        <Typography className="name-condition">{nameCondition}</Typography>
        <img src={conditionImg} alt={`${nameCondition} icon.`} />
      </ConditionName>

      <ConditionResult>
        <Typography className="result-condition">{resultCondition}</Typography>
      </ConditionResult>

      {children}
    </CardContainer>
  );
}
