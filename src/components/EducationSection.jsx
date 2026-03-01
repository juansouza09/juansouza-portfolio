import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { media } from "../styles/media";

const Section = styled.section`
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 24px 24px 32px;
  display: grid;
  grid-template-columns: minmax(0, 0.58fr) minmax(280px, 0.42fr);
  gap: 18px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}

  ${media.mobile`
    padding: 16px 16px 24px;
    gap: 14px;
  `}
`;

const Panel = styled.div`
  padding: 28px;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(16, 16, 20, 0.78);
  display: grid;
  gap: 20px;

  ${media.mobile`
    padding: 20px;
    border-radius: 24px;
    gap: 16px;
  `}
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

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 18px;
  padding-left: 26px;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 7px;
    width: 2px;
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Item = styled.div`
  position: relative;
  display: grid;
  gap: 6px;
`;

const Dot = styled.span`
  position: absolute;
  left: -26px;
  top: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(126, 116, 241, 0.18);
  border: 1px solid rgba(126, 116, 241, 0.38);

  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #7e74f1;
  }
`;

const Institution = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #ffffff;
`;

const Degree = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.7;

  ${media.mobile`
    font-size: 14px;
  `}
`;

const Year = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.48);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const HighlightCard = styled(Panel)`
  background:
    radial-gradient(circle at top right, rgba(126, 116, 241, 0.16), transparent 32%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(16, 16, 20, 0.84);
  align-content: space-between;
`;

const HighlightLabel = styled.span`
  display: inline-flex;
  width: fit-content;
  min-height: 34px;
  align-items: center;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(126, 116, 241, 0.12);
  border: 1px solid rgba(126, 116, 241, 0.24);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d8d4ff;
`;

const HighlightTitle = styled.h3`
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(28px, 4vw, 38px);
  line-height: 1;
  letter-spacing: -0.04em;
`;

const HighlightText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.68);

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}
`;

const EducationSection = () => {
  const { t } = useTranslation();
  const schools = t("schools", { returnObjects: true });

  return (
    <Section>
      <Panel>
        <Subtitle>
          <Line />
          {t("education")}
        </Subtitle>
        <Title>{t("education-subtitle")}</Title>

        <Timeline>
          {Object.keys(schools).map((schoolKey) => {
            const school = schools[schoolKey];

            return (
              <Item key={schoolKey}>
                <Dot />
                <Institution>{school.name}</Institution>
                <Degree>{school.title}</Degree>
                <Year>{school.period}</Year>
              </Item>
            );
          })}
        </Timeline>
      </Panel>

      <HighlightCard>
        <HighlightLabel>TCC</HighlightLabel>
        <div>
          <HighlightTitle>{t("education-highlight-title")}</HighlightTitle>
          <HighlightText>{t("education-highlight-desc")}</HighlightText>
        </div>
      </HighlightCard>
    </Section>
  );
};

export default EducationSection;
