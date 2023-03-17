import React, { FC, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { ButtonTheme } from "../general/Buttons";
import {
  Background,
  Brand,
  SectionButton,
  SectionButtonsWrapper,
} from "./styled";
import themes from "../../themes/schema.json";

const Navbar: FC<{ setTheme: Function }> = ({ setTheme }) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("Navbar") as HTMLElement;
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.opacity = "0";
      } else {
        navbar.style.opacity = "1";
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  const handleSectionButtonClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const toggleTheme = () => {
    if (theme.name === "light") {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <Background id="Navbar">
      <SectionButtonsWrapper>
        <Brand onClick={() => handleSectionButtonClick("landing")} />
        <SectionButton onClick={() => handleSectionButtonClick("about")}>
          <span>1.</span> About
        </SectionButton>
        <SectionButton onClick={() => handleSectionButtonClick("journey")}>
          <span>2.</span> Journey
        </SectionButton>
        <SectionButton onClick={() => handleSectionButtonClick("projects")}>
          <span>3.</span> Projects
        </SectionButton>
        <SectionButton onClick={() => handleSectionButtonClick("contact")}>
          <span>4.</span> Contact
        </SectionButton>
      </SectionButtonsWrapper>
      <ButtonTheme onClick={toggleTheme}>
        {theme.name === "light" ? "Dark Mode" : "Light Mode"}{" "}
      </ButtonTheme>
    </Background>
  );
};

export default Navbar;
