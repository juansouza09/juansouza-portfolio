import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const SidebarTitle = styled.h3`
  font-size: 14px;
  letter-spacing: 2px;
  color: #656d72;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
`;

const CompanyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
`;

const Content = styled.div`
  width: 70%;
  padding-left: 40px;
`;

const JobTitle = styled.h2`
  font-size: 24px;
  color: #ffffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
`;

const JobLocation = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
`;

const JobPeriod = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
`;

const JobTags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
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

const ExperienceSection = () => {
  const { t } = useTranslation();

  const [selectedCompany, setSelectedCompany] = useState("Questione.ai");
  const experiences = t("experiences", { returnObjects: true });
  const selectedExperience = experiences[selectedCompany];

  return (
    <WorkContainer>
      <Sidebar>
        <Subtitle>
          <Line />
          <SubtitleText>{t("careerPath")}</SubtitleText>
        </Subtitle>
        <h1>{t("workExperiences")}</h1>
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
