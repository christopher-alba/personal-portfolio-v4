import React, { FC } from "react";
import { Container } from "../general/Container";
import {
  ArrowDown,
  Background,
  ButtonPrimaryStyled,
  ButtonWrapper,
  ContentWrapper,
  Headshot,
  HiMyNameIs,
  LastName,
  Name,
  Professional,
  Rectangle,
  Square,
  StyledLink,
  Wrapper,
} from "./styled";

const Landing: FC = () => {
  return (
    <Background>
      <Container>
        <Headshot />
        <ContentWrapper>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <Square />
                <HiMyNameIs>Hi. My name is</HiMyNameIs>
              </div>
              <Rectangle />
            </div>
            <Name>Christopher</Name>
            <Wrapper>
              <Professional>Professional Software Engineer</Professional>
              <LastName>Sy Alba</LastName>
            </Wrapper>
            <ButtonWrapper>
              <StyledLink
                to="./cv.pdf"
                download
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <ButtonPrimaryStyled tabIndex={-1}>
                  Download CV
                </ButtonPrimaryStyled>
              </StyledLink>
            </ButtonWrapper>
          </div>
        </ContentWrapper>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ArrowDown />
        </div>
      </Container>
    </Background>
  );
};

export default Landing;
