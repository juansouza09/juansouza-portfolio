import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { media } from "../styles/media";

const Section = styled.section`
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 24px 24px 32px;
  display: grid;
  gap: 22px;

  ${media.mobile`
    padding: 16px 16px 24px;
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
  font-size: clamp(34px, 6vw, 54px);
  line-height: 1;
  letter-spacing: -0.04em;
`;

const Description = styled.p`
  margin: 0;
  max-width: 760px;
  font-size: 16px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.64);

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}
`;

const ExperienceShell = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.38fr) minmax(0, 0.62fr);
  gap: 20px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

const CompanyRail = styled.div`
  display: grid;
  gap: 12px;

  ${media.mobile`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 4px;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const CompanyButton = styled.button`
  text-align: left;
  padding: 18px 18px 18px 20px;
  border-radius: 24px;
  border: 1px solid
    ${({ $selected }) =>
      $selected ? "rgba(126, 116, 241, 0.32)" : "rgba(255, 255, 255, 0.08)"};
  background:
    ${({ $selected }) =>
      $selected
        ? "linear-gradient(135deg, rgba(126, 116, 241, 0.14), rgba(255, 255, 255, 0.03))"
        : "rgba(255, 255, 255, 0.03)"};
  color: #fff;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(126, 116, 241, 0.26);
  }

  ${media.mobile`
    min-width: 220px;
    padding: 16px;
    border-radius: 20px;
    scroll-snap-align: start;
  `}
`;

const CompanyPeriod = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.52);
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const CompanyName = styled.strong`
  display: block;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  line-height: 1.1;
`;

const CompanyRole = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.58);
`;

const DetailCard = styled.article`
  padding: 28px;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(135deg, rgba(126, 116, 241, 0.09), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(16, 16, 20, 0.82);
  display: grid;
  gap: 20px;

  ${media.mobile`
    padding: 20px;
    border-radius: 24px;
    gap: 16px;
  `}
`;

const DetailTop = styled.div`
  display: grid;
  gap: 12px;
`;

const DetailTopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
`;

const DetailTitle = styled.h3`
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(28px, 5vw, 44px);
  line-height: 0.98;
  letter-spacing: -0.04em;
`;

const DetailMeta = styled.div`
  display: grid;
  gap: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.56);
`;

const Summary = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.7);

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.74);
`;

const BulletList = styled.ul`
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Bullet = styled.li`
  position: relative;
  padding-left: 18px;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.68);

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #7e74f1;
  }
`;

const DetailLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(126, 116, 241, 0.32);
  }

  ${media.mobile`
    width: 100%;
  `}
`;

const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const experiences = t("experiences", { returnObjects: true });
  const orderedKeys = Object.keys(experiences);
  const [selectedCompany, setSelectedCompany] = useState(orderedKeys[0]);

  useEffect(() => {
    const translatedExperiences = t("experiences", { returnObjects: true });
    const translatedKeys = Object.keys(translatedExperiences);

    setSelectedCompany((current) =>
      translatedExperiences[current] ? current : translatedKeys[0]
    );
  }, [i18n.language, t]);

  const selectedExperience = experiences[selectedCompany];

  return (
    <Section>
      <Header>
        <Subtitle>
          <Line />
          {t("careerPath")}
        </Subtitle>
        <Title>{t("workExperiences")}</Title>
        <Description>{t("experience-summary")}</Description>
      </Header>

      <ExperienceShell>
        <CompanyRail>
          {orderedKeys.map((company) => {
            const item = experiences[company];

            return (
              <CompanyButton
                key={company}
                type="button"
                onClick={() => setSelectedCompany(company)}
                $selected={selectedCompany === company}
              >
                <CompanyPeriod>{item.period}</CompanyPeriod>
                <CompanyName>{item.company}</CompanyName>
                <CompanyRole>{item.title}</CompanyRole>
              </CompanyButton>
            );
          })}
        </CompanyRail>

        <DetailCard>
          <DetailTop>
            <DetailTopRow>
              <div>
                <DetailTitle>{selectedExperience.company}</DetailTitle>
                <DetailMeta>
                  <span>{selectedExperience.title}</span>
                  <span>{selectedExperience.location}</span>
                  <span>{selectedExperience.period}</span>
                </DetailMeta>
              </div>
            </DetailTopRow>

            <Summary>{selectedExperience.summary}</Summary>
          </DetailTop>

          <Tags>
            {selectedExperience.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>

          <BulletList>
            {selectedExperience.responsibilities.map((task) => (
              <Bullet key={task}>{task}</Bullet>
            ))}
          </BulletList>

          {selectedExperience.link ? (
            <DetailLink href={selectedExperience.link} target="_blank" rel="noopener noreferrer">
              Abrir projeto
            </DetailLink>
          ) : null}
        </DetailCard>
      </ExperienceShell>
    </Section>
  );
};

export default ExperienceSection;
