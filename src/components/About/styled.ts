import styled from "styled-components";
import { ReactComponent as SkylineSVG } from "../../assets/skyline.svg";

export const Background = styled("div")`
  background: ${({ theme }) => theme.colors.tertiarySub};
  padding: 100px 0;
  position: relative;
  min-height: 80vh;
`;

export const SubTitle = styled("h2")`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0;
`;

export const SubSubTitle = styled("h3")`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;

export const Emphasise = styled("span")`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const TextWrapper = styled("div")`
  max-width: 50%;
`;

export const Skyline = styled(SkylineSVG)`
  width: 101%;
  height: auto;
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.colors.primary};
`;
