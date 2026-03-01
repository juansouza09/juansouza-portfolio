import styled from "styled-components";
import { FaReact, FaAws, FaDocker, FaJava, FaJs } from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiPython,
  SiExpress,
  SiJenkins,
  SiCodemagic,
  SiFirebase,
  SiMicrosoftazure,
  SiGithubactions,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import { media } from "../styles/media";

const Section = styled.section`
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 24px 24px 48px;
  display: grid;
  gap: 22px;

  ${media.mobile`
    padding: 16px 16px 32px;
    gap: 16px;
  `}
`;

const Header = styled.div`
  display: grid;
  gap: 12px;
`;

const Subtitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  color: rgba(255, 255, 255, 0.56);
  letter-spacing: 0.18em;
  font-size: 12px;
  text-transform: uppercase;
`;

const Line = styled.span`
  width: 18px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(34px, 6vw, 52px);
  line-height: 1;
  letter-spacing: -0.04em;
`;

const Description = styled.p`
  margin: 0;
  max-width: 760px;
  color: rgba(255, 255, 255, 0.64);
  line-height: 1.85;

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  ${media.tablet`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}

  ${media.mobile`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  `}
`;

const SkillCard = styled.div`
  padding: 22px 14px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(16, 16, 20, 0.76);
  display: grid;
  justify-items: center;
  gap: 12px;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(126, 116, 241, 0.24);
  }

  ${media.mobile`
    padding: 16px 10px;
    border-radius: 20px;
    gap: 10px;
  `}
`;

const SkillIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  font-size: 28px;

  ${media.mobile`
    width: 48px;
    height: 48px;
    border-radius: 14px;
    font-size: 24px;
  `}
`;

const SkillName = styled.p`
  margin: 0;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.5;

  ${media.mobile`
    font-size: 12px;
  `}
`;

const SkillsSection = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "Flutter", icon: <SiFlutter color="#42a5f5" /> },
    { name: "React.js", icon: <FaReact color="#61dafb" /> },
    { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
    { name: "Dart", icon: <SiDart color="#29b6f6" /> },
    { name: "Kotlin", icon: <SiKotlin color="#7c4dff" /> },
    { name: "JavaScript", icon: <FaJs color="#ffd54f" /> },
    { name: "Python", icon: <SiPython color="#64b5f6" /> },
    { name: "Java", icon: <FaJava color="#ffb74d" /> },
    { name: "Jenkins", icon: <SiJenkins color="#ef5350" /> },
    { name: "Codemagic", icon: <SiCodemagic color="#fbc02d" /> },
    { name: "GitHub Actions", icon: <SiGithubactions color="#ffffff" /> },
    { name: "Docker", icon: <FaDocker color="#42a5f5" /> },
    { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
    { name: "Azure", icon: <SiMicrosoftazure color="#42a5f5" /> },
    { name: "AWS", icon: <FaAws color="#ffb300" /> },
  ];

  return (
    <Section>
      <Header>
        <Subtitle>
          <Line />
          {t("skills")}
        </Subtitle>
        <Title>{t("skills-subtitle")}</Title>
        <Description>{t("skills-description")}</Description>
      </Header>

      <Grid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </Section>
  );
};

export default SkillsSection;
