import React, { FC } from "react";
import {
  Background,
  FacebookIcon,
  FooterContainer,
  GithubIcon,
  IconLinkWrapper,
  InstagramIcon,
  LinkedinIcon,
  SocialDiv,
} from "./styled";
import data from "./data.json";
import { Pill, TechnologyWrapper } from "../general/Pills";
import { ButtonPlain, ButtonPrimary } from "../general/Buttons";

const Footer: FC = () => {
  return (
    <Background>
      <FooterContainer>
        <h3>Recent Technologies Used</h3>
        <TechnologyWrapper>
          {data.map((tech) => (
            <Pill>{tech}</Pill>
          ))}
        </TechnologyWrapper>
        <SocialDiv>
          <IconLinkWrapper
            href="https://github.com/christopher-alba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </IconLinkWrapper>
          <IconLinkWrapper
            href="https://www.linkedin.com/in/christopher-alba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </IconLinkWrapper>
          <IconLinkWrapper
            href="https://www.instagram.com/alba.sy.chris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconLinkWrapper>
          <IconLinkWrapper
            href="https://www.facebook.com/christopher.alba.357/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconLinkWrapper>
        </SocialDiv>
        <p>
          This website was made by myself (Christopher Sy Alba). Visit the
          Github repo to fork it and use the theme for your own personal
          website. Please give credit to myself when using it though.
        </p>
        <a
          href="https://github.com/christopher-alba/personal-portfolio-v4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonPrimary tabIndex={-1}>
            Github - Fork This Website!
          </ButtonPrimary>
        </a>
      </FooterContainer>
    </Background>
  );
};

export default Footer;
