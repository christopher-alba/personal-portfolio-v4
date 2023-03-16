import styled from "styled-components";
import { ReactComponent as MoreIconSVG } from "../../assets/icons/moreIcon.svg";
export const Background = styled("div")`
  background: ${({ theme }) => theme.colors.primarySub};
  padding: 100px 0;
`;

export const ProjectsWrapper = styled("div")`
  margin-top: 50px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ProjectName = styled("h3")`
  text-decoration: none !important;
  color: ${({ theme }) => theme.colors.primary};
`;
export const StyledAnchor = styled("a")`
  text-decoration: "none";
  position: "relative";
  z-index: 0;
  width: "100%";
  height: "100%";
  display: "block";
`;
interface ProjectWrapperProps {
  src: string;
}

export const ProjectWrapperInner = styled("div")<ProjectWrapperProps>`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src});
  box-shadow: inset 0 0 0 2000px
    ${({ theme }) => theme.colors.secondaryTransparent};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 300ms;
  &:hover,
  ${StyledAnchor}:focus & {
    box-shadow: none;
    ${ProjectName} {
      opacity: 0;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProjectWrapper = styled("div")`
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  margin: 10px;
`;

export const LearnMoreButton = styled("button")`
  border: none;
  width: 100%;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 0;
  cursor: pointer;
  left: 0;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export const MoreIcon = styled(MoreIconSVG)``;
