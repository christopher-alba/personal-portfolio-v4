import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/icons/Logo.svg";

export const Background = styled("div")`
  background: ${({ theme }) => theme.colors.tertiaryTransparent};
  backdrop-filter: blur(10px);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 500;
  display: flex;
  transition: 300ms;
  justify-content: space-between;
`;

export const SectionButtonsWrapper = styled("div")`
  display: flex;
`;

export const SectionButton = styled("button")`
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-right: 20px;
  transition: 300ms;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
  font-size: 1rem;
  & > span {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  @media(max-width: 800px){
    display: none;
  }
`;

export const Brand = styled(LogoSVG)`
  color: ${({ theme }) => theme.colors.primary};
  height: 40px;
  width: 40px;
  margin-right: 100px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.tertiarySub};
  }
`;
