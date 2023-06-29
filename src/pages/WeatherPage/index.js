import React from "react";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import { Container, WrapperCards } from "./style";

export default function WeatherPage() {
  return (
    <Container>
      <WrapperCards>
        <CardLeft />
        <CardRight />
      </WrapperCards>
    </Container>
  );
}
