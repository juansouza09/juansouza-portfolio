import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { media } from "../styles/media";

const WorkContainer = styled.section`
  display: flex;
  padding: 60px 20px;
  width: 100vw;
  padding-left: 10%;
  padding-right: 10%;
  color: #fff;
  gap: 50px;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #121212;
  ${media.tablet`
  flex-direction: column;
  padding: 40px 5%;
`}

  ${media.mobile`
  flex-direction: column;
  padding: 20px 5%;
  gap: 20px;
`}
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  ${media.tablet`
    width: 100%;
    align-items: center;
  `}
`;

const CompanyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  ${media.mobile`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  `}
`;

const CompanyItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? "#333" : "transparent")};
  color: ${({ selected }) => (selected ? "#fff" : "#aaa")};
  font-family: "Plus Jakarta Sans", sans-serif;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #333;
    color: #fff;
  }

  ${media.mobile`
    font-size: 16px;
    padding: 8px;
    text-align: center;
  `}
`;

const Content = styled.div`
  width: 70%;
  padding-left: 40px;

  ${media.tablet`
    width: 100%;
    padding-left: 0;
  `}

  ${media.mobile`
    width: 100%;
    padding-left: 0;
  `}
`;

const JobTitle = styled.h2`
  font-size: 24px;
  color: #ffffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;

  ${media.mobile`
    font-size: 20px;
    text-align: center;
  `}
`;

const JobLocation = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
  ${media.mobile`
    text-align: center;
  `}
`;

const JobPeriod = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;

  ${media.mobile`
    text-align: center;
  `}
`;

const JobTags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  ${media.mobile`
    justify-content: center;
  `}
`;

const Tag = styled.span`
  background-color: #333;
  color: #fff;
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 12px;
`;

const JobDescription = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0;

  li {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 10px;
    position: relative;

    &:before {
      content: "–";
      color: #7e74f1;
      font-weight: bold;
      margin-right: 10px;
    }

    ${media.mobile`
      text-align: left;
      font-size: 14px;
    `}
  }
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Line = styled.span`
  width: 15px;
  height: 1px;
  background-color: #d9d9d9;
`;

const SubtitleText = styled.span`
  font-size: 14px;
  letter-spacing: 4px;
  color: #656d72;
  font-family: "Inter", sans-serif;
  font-weight: 500;
`;

const TitleText = styled.span`
  font-size: 26px;
  color: #ffffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  padding-bottom: 40px;
`;

const ExperienceSection = () => {
  const { t } = useTranslation();

  const [selectedCompany, setSelectedCompany] = useState("Questione");
  const experiences = t("experiences", { returnObjects: true });
  const selectedExperience = experiences[selectedCompany];

  return (
    <WorkContainer>
      <Sidebar>
        <Subtitle>
          <Line />
          <SubtitleText>{t("careerPath")}</SubtitleText>
        </Subtitle>
        <TitleText>{t("workExperiences")}</TitleText>
        <CompanyList>
          {Object.keys(experiences).map((company) => (
            <CompanyItem
              key={company}
              onClick={() => setSelectedCompany(company)}
              selected={selectedCompany === company}
            >
              {company}
              {selectedCompany === company && " >"}
            </CompanyItem>
          ))}
        </CompanyList>
      </Sidebar>
      <Content>
        <JobTitle>
          {selectedExperience.title} - {selectedExperience.company}
        </JobTitle>
        <JobLocation>{selectedExperience.location}</JobLocation>
        <JobPeriod>{selectedExperience.period}</JobPeriod>
        <JobTags>
          {selectedExperience.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </JobTags>
        <JobDescription>
          {selectedExperience.responsibilities.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </JobDescription>
      </Content>
    </WorkContainer>
  );
};

export default ExperienceSection;
