import styled from "styled-components";
import mobileImg from "../assets/mobile.png";
import morfImg from "../assets/morf-image.jpg";
import santaRochaImg from "../assets/santa-rocha.png";
import { useTranslation } from "react-i18next";
import { media } from "../styles/media";

const Section = styled.section`
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 24px 24px 32px;
  display: grid;
  gap: 24px;

  ${media.mobile`
    padding: 16px 16px 24px;
    gap: 16px;
  `}
`;

const IntroCard = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  padding: 32px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(135deg, rgba(126, 116, 241, 0.08), transparent 32%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(17, 17, 21, 0.72);

  ${media.tablet`
    grid-template-columns: 1fr;
  `}

  ${media.mobile`
    padding: 20px;
    border-radius: 26px;
    gap: 14px;
  `}
`;

const IntroText = styled.div`
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
  font-size: clamp(34px, 6vw, 56px);
  line-height: 1;
  letter-spacing: -0.04em;
`;

const IntroDescription = styled.p`
  margin: 0;
  max-width: 720px;
  font-size: 16px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.66);

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}
`;

const PillGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  font-weight: 600;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}

  ${media.mobile`
    gap: 14px;
  `}
`;

const ServiceCard = styled.article`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 18px;
  padding: 24px;
  min-height: 420px;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(16, 16, 20, 0.76);
  transition:
    transform 0.24s ease,
    border-color 0.24s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(126, 116, 241, 0.28);
  }

  ${media.mobile`
    min-height: auto;
    padding: 18px;
    gap: 14px;
    border-radius: 24px;
  `}
`;

const ServiceVisual = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 180px;
  background:
    linear-gradient(135deg, rgba(126, 116, 241, 0.18), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $position }) => $position || "center"};
    opacity: 0.82;
  }

  ${media.mobile`
    min-height: 140px;
    border-radius: 18px;
  `}
`;

const ServiceIndex = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.06em;
  color: rgba(255, 255, 255, 0.16);
`;

const CardContent = styled.div`
  display: grid;
  gap: 12px;
`;

const CardEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 26px;
  line-height: 1.05;

  ${media.mobile`
    font-size: 22px;
  `}
`;

const CardText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.66);

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}
`;

const ProofText = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.035);
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.74);
`;

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      index: "01",
      title: t("service-1-title"),
      description: t("service-1-desc"),
      proof: t("service-1-proof"),
      tags: t("service-1-tags", { returnObjects: true }),
      category: t("service-1-category"),
      image: morfImg,
      imagePosition: "center",
    },
    {
      index: "02",
      title: t("service-2-title"),
      description: t("service-2-desc"),
      proof: t("service-2-proof"),
      tags: t("service-2-tags", { returnObjects: true }),
      category: t("service-2-category"),
      image: mobileImg,
      imagePosition: "center",
    },
    {
      index: "03",
      title: t("service-3-title"),
      description: t("service-3-desc"),
      proof: t("service-3-proof"),
      tags: t("service-3-tags", { returnObjects: true }),
      category: t("service-3-category"),
      image: santaRochaImg,
      imagePosition: "center top",
    },
  ];

  return (
    <Section>
      <IntroCard>
        <IntroText>
          <Subtitle>
            <Line />
            {t("services")}
          </Subtitle>
          <Title>{t("services-subtitle")}</Title>
          <IntroDescription>{t("description")}</IntroDescription>
        </IntroText>

        <PillGroup>
          <Pill>{t("service-pill-1")}</Pill>
          <Pill>{t("service-pill-2")}</Pill>
          <Pill>{t("service-pill-3")}</Pill>
        </PillGroup>
      </IntroCard>

      <Grid>
        {services.map((service) => (
          <ServiceCard key={service.index}>
            <ServiceVisual $position={service.imagePosition}>
              <img src={service.image} alt={service.title} />
            </ServiceVisual>
            <ServiceIndex>{service.index}</ServiceIndex>
            <CardContent>
              <CardEyebrow>{service.category}</CardEyebrow>
              <CardTitle>{service.title}</CardTitle>
              <CardText>{service.description}</CardText>
              <ProofText>{service.proof}</ProofText>
              <TagRow>
                {service.tags.map((tag) => (
                  <Tag key={`${service.index}-${tag}`}>{tag}</Tag>
                ))}
              </TagRow>
            </CardContent>
          </ServiceCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
