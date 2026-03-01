import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 12px 24px 48px;

  @media (max-width: 480px) {
    padding: 8px 16px 28px;
  }
`;

const FooterShell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 24px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
    rgba(14, 14, 18, 0.8);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 18px;
    border-radius: 22px;
  }
`;

const FooterCopy = styled.div`
  display: grid;
  gap: 6px;

  strong {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16px;
  }

  span {
    color: rgba(255, 255, 255, 0.58);
    font-size: 14px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    width: 100%;
  }

  a {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    transition:
      transform 0.22s ease,
      border-color 0.22s ease,
      background-color 0.22s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: rgba(126, 116, 241, 0.28);
      background: rgba(126, 116, 241, 0.1);
    }

    @media (max-width: 480px) {
      width: 46px;
      height: 46px;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterShell>
        <FooterCopy>
          <strong>Juan Souza</strong>
          <span>{t("footer-line")}</span>
          <span>© {new Date().getFullYear()}</span>
        </FooterCopy>

        <SocialIcons>
          <a
            href="https://github.com/juansouza09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juansouza9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </SocialIcons>
      </FooterShell>
    </FooterContainer>
  );
};

export default Footer;
