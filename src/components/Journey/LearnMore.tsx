import React, { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonPlain } from "../general/Buttons";
import { ReactComponent as MoreIconSVG } from "../../assets/icons/moreIcon.svg";
import { ReactComponent as CloseIconSVG } from "../../assets/icons/closeIcon.svg";
import { Company } from "./data";
import { CompanyName, Date, Role } from "./styled";
import { TechnologyWrapper, Pill } from "../general/Pills";

const ButtonPlainStyled = styled(ButtonPlain)`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
`;
const TooltipText = styled("span")`
  visibility: hidden;
  opacity: 0;
  width: 120px;
  transition: 300ms;
  background-color: ${({ theme }) => theme.colors.tertiarySub};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: none;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  position: absolute;
  bottom: 120%;
  left: 50%;
  margin-left: -60px;
  z-index: 1;
  ${ButtonPlainStyled}:hover & {
    visibility: visible;
    opacity: 1;
    transition: 300ms;
  }
  &::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.tertiarySub} transparent
      transparent transparent;
  }
`;

const LearnMore: FC<{ tooltip: string; companyObj: Company }> = ({
  tooltip,
  companyObj,
}) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };
  return (
    <>
      {visible && (
        <LearnMoreModal setVisible={setVisible} companyObj={companyObj} />
      )}
      <ButtonPlainStyled onClick={handleClick}>
        <MoreIconSVG />
        <TooltipText>{tooltip}</TooltipText>
      </ButtonPlainStyled>
    </>
  );
};

const ModalBackground = styled("div")`
  display: flex; /* Hidden by default */
  align-items: center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: ${({ theme }) => theme.colors.secondaryTransparent};
`;

const ModalContent = styled("div")`
  height: 60%;
  width: 60%;
  padding: 50px;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 1001;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

const StyledButtonPlain = styled(ButtonPlain)`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid transparent;
  transition: 300ms;
  padding: 10px;
  &:hover {
    border: 1px solid #ff00006e;
  }
`;
const CloseIcon = styled(CloseIconSVG)`
  width: 100%;
  height: 100%;
`;

const ModalContentMain = styled("div")`
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 60px);
  box-sizing: border-box;
  padding: 20px;
  margin: 30px;
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => {
      if (theme.name === "dark") {
        return "transparent";
      } else {
        return "transparent";
      }
    }};
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${({ theme }) => {
      if (theme.name === "dark") {
        return "transparent";
      } else {
        return "transparent";
      }
    }};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => {
      if (theme.name === "dark") {
        return "#1a1a1a";
      } else {
        return "#cccccc";
      }
    }};
    border-radius: 10px;
  }
`;

const LearnMoreModal: FC<{ setVisible: Function; companyObj: Company }> = ({
  setVisible,
  companyObj,
}) => {
  useEffect(() => {
    window.onclick = (e) => {
      if (e.target == document.getElementById("modalBackground")) {
        setVisible(false);
      }
    };
    window.onscroll = () => {
      setVisible(false);
    };
  }, []);
  const hide = () => {
    setVisible(false);
  };
  return (
    <ModalBackground id="modalBackground">
      <ModalContent id="modalContent">
        <StyledButtonPlain onClick={hide}>
          <CloseIcon />
        </StyledButtonPlain>
        <ModalContentMain>
          <CompanyName>
            <a href={companyObj.website} target="_blank" rel="noreferrer">
              {companyObj.name}
            </a>
          </CompanyName>
          <Role>{companyObj.position}</Role>
          <Date>{companyObj.dateString}</Date>
          <p>{companyObj.summary}</p>
          <h3>Insights to my Experience</h3>
          <ul>
            {companyObj.bulletpoints.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
          <h3>Technologies Used</h3>
          <TechnologyWrapper>
            {companyObj.technologies.map((tech) => (
              <Pill>{tech}</Pill>
            ))}
          </TechnologyWrapper>
        </ModalContentMain>
      </ModalContent>
    </ModalBackground>
  );
};

export default LearnMore;
