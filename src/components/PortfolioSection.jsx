import styled from "styled-components";
import luaStationImg from "../assets/ls-image.jpg";
import morfImg from "../assets/morf-image.jpg";
import clubeRincaoImg from "../assets/rincao.jpg";
import janoLogoImg from "../assets/jano-logo.png";
import bphSiteImg from "../assets/bph-site.png";
import santaRochaImg from "../assets/santa-rocha.png";
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
  max-width: 720px;
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  line-height: 1.85;

  ${media.mobile`
    font-size: 14px;
    line-height: 1.75;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}

  ${media.mobile`
    gap: 14px;
  `}
`;

const Card = styled.a`
  position: relative;
  display: grid;
  align-content: end;
  min-height: ${({ $featured }) => ($featured ? "520px" : "380px")};
  padding: 24px;
  overflow: hidden;
  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  text-decoration: none;
  background-color: #1a1a1f;
  transition:
    transform 0.24s ease,
    border-color 0.24s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(126, 116, 241, 0.28);
  }

  ${media.mobile`
    min-height: ${({ $featured }) => ($featured ? "380px" : "300px")};
    padding: 18px;
    border-radius: 24px;
  `}
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.02) contrast(1.02);
  transform: scale(1.02);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 8, 10, 0.16), rgba(8, 8, 10, 0.9)),
    linear-gradient(140deg, rgba(126, 116, 241, 0.12), transparent 46%);
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 14px;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const MetaTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.06);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${media.mobile`
    min-height: 30px;
    padding: 0 10px;
    font-size: 11px;
  `}
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${({ $featured }) => ($featured ? "42px" : "30px")};
  line-height: 0.98;
  letter-spacing: -0.04em;

  ${media.mobile`
    font-size: ${({ $featured }) => ($featured ? "28px" : "24px")};
  `}
`;

const CardText = styled.p`
  margin: 0;
  max-width: 520px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 15px;
  line-height: 1.8;

  ${media.mobile`
    font-size: 14px;
    line-height: 1.7;
  `}
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  font-weight: 600;

  ${media.mobile`
    font-size: 12px;
  `}
`;

const PortfolioSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("project-2-title"),
      description: t("project-2-desc"),
      image: clubeRincaoImg,
      href: "https://www.cluberincao.com.br",
      tags: ["Operação", "WhatsApp"],
      featured: true,
      footer: "Acesso + atendimento",
    },
    {
      title: t("project-5-title"),
      description: t("project-5-desc"),
      image: santaRochaImg,
      href: "https://santarocha.design/",
      tags: ["Web", "Design"],
      featured: false,
      footer: "Presença digital",
    },
    {
      title: t("project-6-title"),
      description: t("project-6-desc"),
      image: bphSiteImg,
      href: "https://bph.org.br/",
      tags: ["Institucional", "Health"],
      featured: false,
      footer: "Presença internacional",
    },
    {
      title: t("project-3-title"),
      description: t("project-3-desc"),
      image: janoLogoImg,
      href: "https://jano-web.vercel.app/",
      tags: ["Projeto pessoal", "IA"],
      featured: false,
      footer: "Exploração de produto",
    },
    {
      title: t("project-4-title"),
      description: t("project-4-desc"),
      image: luaStationImg,
      href: "https://github.com/juansouza09/LuaStation",
      tags: ["Android", "Autor"],
      featured: false,
      footer: "Visão autoral",
    },
    {
      title: t("project-1-title"),
      description: t("project-1-desc"),
      image: morfImg,
      href: "https://github.com/juansouza09",
      tags: ["OpenAI", "Produto"],
      featured: false,
      footer: "Case de IA",
    },
  ];

  return (
    <Section>
      <Header>
        <Subtitle>
          <Line />
          {t("portfolio")}
        </Subtitle>
        <Title>{t("portfolio-subtitle")}</Title>
        <Description>
          Uma seleção de projetos que mostram profundidade técnica, decisões de produto e
          capacidade de entregar experiência real.
        </Description>
      </Header>

      <Grid>
        {projects.map((project) => (
          <Card
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            $featured={project.featured}
          >
            <CardImage src={project.image} alt={project.title} />
            <Overlay />
            <CardContent>
              <Meta>
                {project.tags.map((tag) => (
                  <MetaTag key={tag}>{tag}</MetaTag>
                ))}
              </Meta>
              <CardTitle $featured={project.featured}>{project.title}</CardTitle>
              <CardText>{project.description}</CardText>
              <FooterRow>
                <span>{project.footer}</span>
                <span>↗</span>
              </FooterRow>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default PortfolioSection;
