import React, { FC } from "react";
import { Container } from "../general/Container";
import Title from "../general/Title";
import {
  Background,
  BootcampIcon,
  CompanyName,
  CompanyWrapper,
  Date,
  InternshipIcon,
  Role,
  TextContentWrapper,
  WorkIcon,
} from "./styled";
import { data as companies } from "./data";
import { Pill, TechnologyWrapper } from "../general/Pills";
import LearnMore from "./LearnMore";
const Journey: FC = () => {
  return (
    <Background id="journey">
      <Container>
        <Title number={2} text="My Journey in Tech" />
        {companies.map((companyObj) => {
          return (
            <CompanyWrapper>
              {companyObj.type.toLowerCase() === "work" ? (
                <WorkIcon />
              ) : companyObj.type.toLowerCase() === "internship" ? (
                <InternshipIcon />
              ) : companyObj.type.toLowerCase() === "bootcamp" ? (
                <BootcampIcon />
              ) : (
                ""
              )}
              <TextContentWrapper>
                <LearnMore
                  companyObj={companyObj}
                  tooltip={
                    "Learn more about my experience at " + companyObj.nameShort
                  }
                />
                <CompanyName>
                  <a href={companyObj.website} target="_blank" rel="noreferrer">
                    {companyObj.name}
                  </a>
                </CompanyName>
                <Role>{companyObj.position}</Role>
                <Date>{companyObj.dateString}</Date>
                <p>{companyObj.summary}</p>
                <TechnologyWrapper>
                  {companyObj.technologies.map((tech) => (
                    <Pill>{tech}</Pill>
                  ))}
                </TechnologyWrapper>
              </TextContentWrapper>
            </CompanyWrapper>
          );
        })}
      </Container>
    </Background>
  );
};

export default Journey;
