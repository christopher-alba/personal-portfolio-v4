import React, { FC } from "react";
import { ButtonYoutube } from "../general/Buttons";
import { Container } from "../general/Container";
import Title from "../general/Title";
import {
  Background,
  Emphasise,
  Skyline,
  SubSubTitle,
  SubTitle,
  TextWrapper,
} from "./styled";

const About: FC = () => {
  return (
    <Background>
      <Skyline />
      <Container>
        <Title number={1} text="About Me" />
        <SubTitle>
          Software Engineer @{" "}
          <Emphasise>Turners Automotive Group Digital</Emphasise>
        </SubTitle>
        <SubSubTitle>
          Graduate Computer Systems Engineer (Honors) @{" "}
          <Emphasise>University of Auckland</Emphasise>
        </SubSubTitle>
        <TextWrapper>
          <p>
            From a young age I’ve enjoyed design and problem solving. Fast
            forward to the present, and I’m applying my creativity in software
            development or engineering.{" "}
            <Emphasise>
              My career path is currently in web development, and I have a
              preference towards frontend development.
            </Emphasise>
            This is due to my appreciation for the user experience. However, the
            backend also allows me to use my creativity to come up with
            solutions. Therefore,{" "}
            <Emphasise>
              I am also interested in backend or fullstack roles.
            </Emphasise>
          </p>
          <p>
            In my spare time, I enjoy playing video games and watching movies. I
            use to play a bit of Minecraft, and built many designs from modern
            houses, to skyscrapers. I even have a YouTube channel called
            Valkraft which showcases timelapses of some of my Minecraft builds.
            Other games I play include: League of Legends, Overwatch 2, Lost
            Ark. Some Movies I’m interested in: Star Wars, Marvel Cinematic
            Universe
          </p>
          <a href="https://www.youtube.com/@valkraft5375" target="_blank" rel="noreferrer">
            <ButtonYoutube>
              Youtube - <strong>My Minecraft Channel</strong>
            </ButtonYoutube>
          </a>
        </TextWrapper>
      </Container>
    </Background>
  );
};

export default About;
