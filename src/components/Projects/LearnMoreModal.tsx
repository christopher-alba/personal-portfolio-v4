import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonPlain, ButtonSecondary } from "../general/Buttons";
import { Pill, TechnologyWrapper } from "../general/Pills";
import { Project, ProjectStatus } from "./data";
import { ReactComponent as CloseIconSVG } from "../../assets/icons/closeIcon.svg";
import { LearnMoreButton, MoreIcon } from "./styled";

export const ProjectImg = styled("img")`
  width: 50%;
  height: auto;
  margin: 10px 0;
  margin-right: 10px;
  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
`;
export const ContentWrapper = styled("div")`
  width: 50%;
  padding: 0 50px;
  box-sizing: border-box;
  @media (max-width: 1800px) {
    width: 100%;
    padding: 0;
  }
`;

export const PSArchived = styled("div")`
  width: fit-content;
  font-size: 0.7rem;
  color: #ffd000;
  padding-right: 30px;
  border-radius: 10px;
`;

export const PSFeatured = styled("div")`
  width: fit-content;
  font-size: 0.7rem;
  color: #00d235;
  padding-right: 30px;
  border-radius: 10px;
`;

export const PSSNLD = styled("div")`
  width: fit-content;
  font-size: 0.7rem;
  color: #ff3838;
  padding-right: 30px;
  border-radius: 10px;
`;

export const PSUC = styled("div")`
  width: fit-content;
  font-size: 0.7rem;
  color: #ffaf38;
  padding-right: 30px;
  border-radius: 10px;
`;

export const ProjectStatuses = styled("div")`
  display: flex;
  & > div {
    margin-right: 10px;
  }
`;

export const StyledHR = styled("hr")`
  border-color: ${({ theme }) => theme.colors.secondary};
  margin: 20px 0;
`;

export const TagsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const TagsWrapperWrapper = styled("div")`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TagsWrapperOuter = styled("div")`
  flex-grow: 1;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ProjectSubTitle = styled("p")`
  font-size: 1.3rem;
  font-weight: 700;
`;

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
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 0;
  }
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

const StyledDiv1 = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const LearnMoreModal: FC<{ projectObj: Project }> = ({ projectObj }) => {
  const [visibleProject, setVisibleProject] = useState(false);
  useEffect(() => {
    window.onclick = (e) => {
      console.log(e);
      if (e.target == document.getElementById("projectModalBackground")) {
        console.log(visibleProject);
        setVisibleProject(false);
      }
    };
    window.onscroll = () => {
      setVisibleProject(false);
      console.log("testing");
    };
  }, [visibleProject]);
  const hide = () => {
    console.log(visibleProject);
    setVisibleProject(false);
  };
  return (
    <>
      {visibleProject && (
        <ModalBackground id="projectModalBackground">
          <ModalContent id="projectModalContent">
            <StyledButtonPlain onClick={hide}>
              <CloseIcon />
            </StyledButtonPlain>
            <ModalContentMain>
              <h1 style={{ marginTop: 0 }}>{projectObj.name}</h1>
              <ProjectStatuses>
                {projectObj.status.map((state) => {
                  if (state === ProjectStatus.ARCHIVED) {
                    return <PSArchived>Archived</PSArchived>;
                  } else if (state === ProjectStatus.FEATURED) {
                    return <PSFeatured>Featured</PSFeatured>;
                  } else if (state === ProjectStatus.SERVERNOLONGERDEPLOYED) {
                    return <PSSNLD>Server Not Deployed</PSSNLD>;
                  } else if (state === ProjectStatus.UNDERCONSTRUCTION) {
                    return <PSUC>Under Construction</PSUC>;
                  }
                })}
              </ProjectStatuses>
              <StyledDiv1>
                <ProjectImg src={projectObj.imgSrc} />
                <p>{projectObj.description}</p>
              </StyledDiv1>
              {(projectObj.website?.length || -1) > 0 && (
                <a
                  href={projectObj.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonSecondary
                    tabIndex={-1}
                    style={{
                      minWidth: "100px",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Visit
                  </ButtonSecondary>
                </a>
              )}
              {(projectObj.download?.length || -1) > 0 && (
                <a
                  href={projectObj.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonSecondary
                    tabIndex={-1}
                    style={{
                      minWidth: "100px",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Download
                  </ButtonSecondary>
                </a>
              )}
              {projectObj.github.map((githubObj) => (
                <a
                  href={githubObj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonPlain
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  >
                    Github - {githubObj.type}
                  </ButtonPlain>
                </a>
              ))}
              <StyledHR />
              <TagsWrapperWrapper>
                <TagsWrapperOuter>
                  <ProjectSubTitle>Technologies</ProjectSubTitle>
                  <TechnologyWrapper>
                    {projectObj.tags.map((tag) => (
                      <Pill>{tag}</Pill>
                    ))}
                  </TechnologyWrapper>
                </TagsWrapperOuter>
                <TagsWrapperOuter>
                  <ProjectSubTitle>Devices</ProjectSubTitle>
                  <TechnologyWrapper>
                    {projectObj.devices.map((device) => (
                      <Pill>{device}</Pill>
                    ))}
                  </TechnologyWrapper>
                </TagsWrapperOuter>
              </TagsWrapperWrapper>
            </ModalContentMain>
          </ModalContent>
        </ModalBackground>
      )}
      <LearnMoreButton
        className="learnMoreButton"
        onClick={() => {
          setVisibleProject(true);
        }}
      >
        <MoreIcon />
      </LearnMoreButton>
    </>
  );
};

export default LearnMoreModal;
