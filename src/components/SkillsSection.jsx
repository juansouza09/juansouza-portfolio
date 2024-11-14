import React from "react";
import styled from "styled-components";
import { FaReact, FaAws, FaDocker, FaJava, FaJs } from "react-icons/fa";
import { SiFlutter, SiDart, SiKotlin, SiPython, SiExpress, SiJenkins, SiCodemagic, SiFirebase, SiMicrosoftazure, SiGithubactions } from "react-icons/si";
import { useTranslation } from "react-i18next";

const SkillsContainer = styled.section`
  padding: 6rem 10%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  margin-bottom: 10px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  justify-items: center;
  align-items: center;
  margin: 5rem auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas em tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 2 colunas em dispositivos móveis */
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

const SkillIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const SkillName = styled.p`
  font-size: 14px;
  color: #ccc;
  text-align: center;
  margin-top: 5px;
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

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <SkillsContainer>
      <Subtitle>
        <Line />
        <SubtitleText>{t("skills")}</SubtitleText>
      </Subtitle>
      <Title>{t("skills-subtitle")}</Title>
      <SkillsGrid>
        {/* Linha 1 */}
        <SkillItem>
          <SkillIcon>
            <SiFlutter color="#2496ED" />
          </SkillIcon>
          <SkillName>Flutter</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaReact color="#61DAFB" />
          </SkillIcon>
          <SkillName>React.js</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiExpress color="#fff" />
          </SkillIcon>
          <SkillName>Express.js</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiDart color="#0175C2" />
          </SkillIcon>
          <SkillName>Dart</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiKotlin color="#0095D5" />
          </SkillIcon>
          <SkillName>Kotlin</SkillName>
        </SkillItem>

        {/* Linha 2 */}
        <SkillItem>
          <SkillIcon>
            <FaJs color="#F7DF1E" />
          </SkillIcon>
          <SkillName>JavaScript</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiPython color="#3776AB" />
          </SkillIcon>
          <SkillName>Python</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaJava color="#F3B61F" />
          </SkillIcon>
          <SkillName>Java</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiJenkins color="#D24939" />
          </SkillIcon>
          <SkillName>Jenkins</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiCodemagic color="#F3B61F" />
          </SkillIcon>
          <SkillName>Codemagic</SkillName>
        </SkillItem>

        {/* Linha 3 */}
        <SkillItem>
          <SkillIcon>
            <SiGithubactions color="#fff" />
          </SkillIcon>
          <SkillName>GitHub Actions</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaDocker color="#2496ED" />
          </SkillIcon>
          <SkillName>Docker</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiFirebase color="#FFCA28" />
          </SkillIcon>
          <SkillName>Firebase</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <SiMicrosoftazure color="#0078D4" />
          </SkillIcon>
          <SkillName>Azure</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon>
            <FaAws color="#FF9900" />
          </SkillIcon>
          <SkillName>AWS</SkillName>
        </SkillItem>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default SkillsSection;
