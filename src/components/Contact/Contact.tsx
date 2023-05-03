import React, { FC } from "react";
import { Emphasise } from "../About/styled";
import { ButtonSecondary } from "../general/Buttons";
import { Container } from "../general/Container";
import Title from "../general/Title";
import { StyledLink } from "../Landing/styled";
import { Background } from "./styled";

const Contact: FC = () => {
  return (
    <Background id="contact">
      <Container>
        <Title number={4} text="Ready to download my CV?" />
        <p>
          <Emphasise>
            <strong>I'm currently looking for part time opportunities</strong>
          </Emphasise>{" "}
          in software engineering. Free to contact me and I'll entertain your
          call, email or message. Find the information you need to contact me in
          my CV.
        </p>
        <StyledLink
          to="./cv.pdf"
          download
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ButtonSecondary tabIndex={-1}>Download CV</ButtonSecondary>
        </StyledLink>
      </Container>
    </Background>
  );
};

export default Contact;
