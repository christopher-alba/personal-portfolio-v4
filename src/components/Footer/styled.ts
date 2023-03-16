import styled from "styled-components";
import { Container } from "../general/Container";
import { ReactComponent as FacebookIconSVG } from "../../assets/icons/facebookIcon.svg";
import { ReactComponent as InstagramIconSVG } from "../../assets/icons/instagramIcon.svg";
import { ReactComponent as GithubIconSVG } from "../../assets/icons/githubIcon.svg";
import { ReactComponent as LinkedinIconSVG } from "../../assets/icons/linkedinIcon.svg";

export const Background = styled("div")`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 100px 0;
`;

export const FooterContainer = styled(Container)`
  width: 50%;
  text-align: center;
  @media(max-width:600px){
    width: 95%;
  }
`;

export const FacebookIcon = styled(FacebookIconSVG)``;
export const InstagramIcon = styled(InstagramIconSVG)``;
export const GithubIcon = styled(GithubIconSVG)``;
export const LinkedinIcon = styled(LinkedinIconSVG)``;

export const SocialDiv = styled("div")`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const IconLinkWrapper = styled("a")`
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  margin-right: 30px;
  &:last-of-type {
    margin-right: 0;
  }
`;