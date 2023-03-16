import React, { FC } from "react";
import { Container } from "../general/Container";
import Title from "../general/Title";
import { Background } from "./styled";

const Journey: FC = () => {
  return (
    <Background>
      <Container>
        <Title number={2} text="My Journey in Tech" />
      </Container>
    </Background>
  );
};

export default Journey;