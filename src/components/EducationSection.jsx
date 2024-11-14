import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const EducationContainer = styled.section`
  padding: 6rem 10%;
  color: #fff;
  display: flex;
  justify-content: center;
  background-color: #121212;
`;

const EducationContent = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: left;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Espaçamento entre o traço e o texto */
  padding: 0 10%;
  margin-bottom: 10px;
`;

const Line = styled.span`
  width: 15px; /* Largura do traço */
  height: 1px;
  background-color: #d9d9d9;
`;

const SubtitleText = styled.span`
  font-size: 14px;
  letter-spacing: 4px;
  color: #656d72;
  font-family: "Inter", sans-serif;
  font-weight: 500; /* Inter Medium */
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #fff;
  margin-bottom: 30px;
`;

const Timeline = styled.div`
  position: relative;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid #444;
`;

const EducationItem = styled.div`
  position: relative;
  margin-bottom: 30px;
  padding-left: 20px;
`;

const BulletPoint = styled.div`
  position: absolute;
  left: -11px;
  top: 5px;
  width: 10px;
  height: 10px;
  background-color: #7e74f1;
  border-radius: 50%;
`;

const Institution = styled.h3`
  font-size: 16px;
  color: #f1f1f1;
  margin: 0;
`;

const Degree = styled.p`
  font-size: 14px;
  color: #888;
  margin: 5px 0;
`;

const Year = styled.p`
  font-size: 14px;
  color: #888;
`;

const EducationSection = () => {
  const { t } = useTranslation();
  const schools = t("schools", { returnObjects: true });

  return (
    <EducationContainer>
      <EducationContent>
        <Subtitle>
          <Line />
          <SubtitleText>{t("education")}</SubtitleText>
        </Subtitle>
        <Title>{t("education-subtitle")}</Title>
        <Timeline>
          {Object.keys(schools).map((schoolKey) => {
            const school = schools[schoolKey];
            return (
              <EducationItem key={schoolKey}>
                <BulletPoint />
                <Institution>{school.name}</Institution>
                <Degree>{school.title}</Degree>
                <Year>{school.period}</Year>
              </EducationItem>
            );
          })}
        </Timeline>
      </EducationContent>
    </EducationContainer>
  );
};

export default EducationSection;
