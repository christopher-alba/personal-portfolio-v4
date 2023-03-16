import styled from "styled-components";
import { ReactComponent as WorkIconSVG } from "../../assets/icons/workIcon.svg";
import { ReactComponent as InternshipIconSVG } from "../../assets/icons/internshipIcon.svg";
import { ReactComponent as BootcampIconSVG } from "../../assets/icons/bootcampIcon.svg";

export const Background = styled("div")`
  padding-top: 100px;
  padding-bottom: 100px;
`;
export const CompanyWrapper = styled("div")`
  margin-bottom: 100px;
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CompanyName = styled("h1")`
  & a {
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    width: fit-content;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.tertiaryHover};
      text-decoration: underline;
    }
  }
  margin: 0;
`;

export const Role = styled("h2")`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

export const Date = styled("h3")`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
`;

export const TextContentWrapper = styled("div")`
  flex-grow: 1;
  margin-left: 150px;
  width: 60%;
  position: relative;
  @media (max-width: 1100px) {
    width: 80%;
    margin-left: 50px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const WorkIcon = styled(WorkIconSVG)`
  color: ${({ theme }) => theme.colors.tertiary};
  width: 175px;
  height: 175px;
`;
export const InternshipIcon = styled(InternshipIconSVG)`
  width: 175px;
  height: 175px;
`;
export const BootcampIcon = styled(BootcampIconSVG)`
  width: 175px;
  height: 175px;
`;
