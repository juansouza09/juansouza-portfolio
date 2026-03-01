import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { media } from "../styles/media";

const HeroShell = styled.div`
  position: relative;
  width: min(1180px, 100%);
  margin: 0 auto;
  min-height: 100vh;
  padding: 156px 24px 84px;
  display: grid;
  align-items: center;

  ${media.tablet`
    min-height: auto;
    padding-top: 136px;
  `}

  ${media.mobile`
    padding: 112px 16px 48px;
  `}
`;

const AmbientHalo = styled.div`
  position: absolute;
  top: 12%;
  right: 6%;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  pointer-events: none;
  background:
    radial-gradient(circle, rgba(126, 116, 241, 0.18), transparent 56%),
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), transparent 22%);
  filter: blur(44px);
  opacity: 0.9;

  ${media.mobile`
    width: 220px;
    height: 220px;
    top: 10%;
    right: -12%;
    opacity: 0.6;
  `}
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 26px;
  max-width: 980px;

  ${media.mobile`
    gap: 18px;
  `}
`;

const Eyebrow = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.52);

  ${media.mobile`
    font-size: 11px;
    letter-spacing: 0.14em;
  `}
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(52px, 8vw, 98px);
  line-height: 0.92;
  letter-spacing: -0.055em;
  max-width: 10ch;

  span {
    display: block;
  }

  .accent {
    color: #cfcaff;
  }

  ${media.mobile`
    max-width: none;
    font-size: clamp(40px, 12vw, 58px);
    line-height: 0.98;
  `}
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;

  ${media.mobile`
    display: grid;
    grid-template-columns: 1fr;
  `}
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 24px;
  border-radius: 999px;
  background:
    linear-gradient(180deg, rgba(126, 116, 241, 0.92), rgba(126, 116, 241, 0.74)),
    rgba(255, 255, 255, 0.02);
  box-shadow: 0 18px 34px rgba(126, 116, 241, 0.2);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 40px rgba(126, 116, 241, 0.24);
  }

  ${media.mobile`
    width: 100%;
  `}
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.62);

  ${media.mobile`
    flex-wrap: wrap;
    gap: 10px;
  `}
`;

const SocialLabel = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.56);

  ${media.mobile`
    width: 100%;
    font-size: 13px;
    line-height: 1.6;
  `}
`;

const SocialIcon = styled.a`
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(126, 116, 241, 0.32);
    background: rgba(126, 116, 241, 0.08);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  ${media.tablet`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
    gap: 10px;
  `}
`;

const StatCard = styled.div`
  padding: 18px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);

  ${media.mobile`
    padding: 16px;
    border-radius: 20px;
  `}

  strong {
    display: block;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 20px;
    margin-bottom: 6px;
  }

  span {
    display: block;
    font-size: 13px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.62);
  }
`;

const HeroSection = () => {
  const { t } = useTranslation();
  const heroStats = t("hero-stats", { returnObjects: true });

  return (
    <HeroShell>
      <AmbientHalo />

      <Content>
        <Eyebrow>Software Engineer</Eyebrow>

        <Title>
          <span>{t("hero-line-1")}</span>
          <span className="accent">{t("hero-line-2")}</span>
        </Title>

        <ActionRow>
          <PrimaryButton href="#portfolio">{t("hero-primary-cta")}</PrimaryButton>
        </ActionRow>

        <SocialRow>
          <SocialLabel>{t("hero-availability")}</SocialLabel>
          <SocialIcon
            href="https://github.com/juansouza09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/juansouza9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </SocialIcon>
        </SocialRow>

        <StatsGrid>
          {heroStats.map((item) => (
            <StatCard key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </StatCard>
          ))}
        </StatsGrid>
      </Content>
    </HeroShell>
  );
};

export default HeroSection;
