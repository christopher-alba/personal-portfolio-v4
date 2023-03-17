import React, { FC, useState } from "react";
import { Emphasise } from "../About/styled";
import { Container } from "../general/Container";
import Title from "../general/Title";
import {
  Background,
  LearnMoreButton,
  MoreIcon,
  ProjectName,
  ProjectsWrapper,
  ProjectWrapper,
  ProjectWrapperInner,
  StyledAnchor,
} from "./styled";
import { projects } from "./data";
import LearnMoreModal from "./LearnMoreModal";

const Projects: FC = () => {
  return (
    <Background id="projects">
      <Container>
        <Title number={3} text="Personal Projects" />
        <p>
          These projects were done throughout my journey in tech. Some were
          built during university, bootcamp, university holidays, and in my
          spare time outside of work.{" "}
          <Emphasise>
            These projects are personal, which means they are outside of any
            curriculum or company.
          </Emphasise>{" "}
          Click on the “...” for more information on a project, such as the
          technologies used, and links to the frontend or backend repositories
          on Github. Note that most of these projects are in web development.
        </p>
        <ProjectsWrapper>
          {projects.map((project, index) => {
            return (
                <ProjectWrapper key={index}>
                  <StyledAnchor
                    href={project.website ? project.website : project.download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ProjectWrapperInner src={project.imgSrc}>
                      <ProjectName>{project.name}</ProjectName>
                    </ProjectWrapperInner>
                  </StyledAnchor>
                  <LearnMoreModal projectObj={project} />
                </ProjectWrapper>

            );
          })}
        </ProjectsWrapper>
      </Container>
    </Background>
  );
};

export default Projects;
