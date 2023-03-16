import styled from "styled-components";
import { ReactComponent } from "../../assets/man-silhouette.svg";
import { ReactComponent as SquareSVG } from "../../assets/patternSquare.svg";
import { ReactComponent as RectangleSVG } from "../../assets/patternRectangleSquare.svg";
import { ReactComponent as ArrowDownSVG } from "../../assets/arrowdown.svg";
import { ButtonPrimary } from "../general/Buttons";
import { Link } from "react-router-dom";

export const Background = styled("div")`
  background: ${({ theme }) => theme.colors.tertiary};
  height: 90vh;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Headshot = styled(ReactComponent)`
  position: absolute;
  bottom: -30%;
  left: -50px;
  height: 110%;
  width: auto;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ContentWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export const Name = styled("h1")`
  font-family: "Inter";
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 6rem;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const HiMyNameIs = styled("h2")`
  font-family: "Inter";
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  position: relative;
  bottom: -8px;
  @media (max-width: 800px) {
    font-size: 1rem;
    bottom: -4px;
  }
`;

export const Square = styled(SquareSVG)`
  margin-right: 10px;
  @media (max-width: 800px) {
    height: 20px;
    width: auto;
  }
`;

export const Rectangle = styled(RectangleSVG)`
  height: 60px;
  @media (max-width: 800px) {
    height: 30px;
    width: auto;
  }
`;

export const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  bottom: 15px;
  @media (max-width: 800px) {
    bottom: 7px;
  }
`;

export const Professional = styled("h3")`
  font-family: "Inter";
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  margin-left: 10px;
  font-weight: 300;
  @media (max-width: 800px) {
    font-size: 0.75rem;
  }
`;

export const LastName = styled("h2")`
  font-family: "Inter";
  font-weight: 800;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    justify-content: center;
    margin-top: 50px;
  }
`;

export const ButtonPrimaryStyled = styled(ButtonPrimary)`
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ArrowDown = styled(ArrowDownSVG)`
  color: ${({ theme }) => theme.colors.primary};
  height: 70px;
  width: auto;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;
