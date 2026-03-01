import { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import avatar from "../assets/juan.jpeg";
import { media } from "../styles/media";

const HeaderContainer = styled.header`
  position: fixed;
  top: 18px;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0 24px;

  ${media.mobile`
    top: 10px;
    padding: 0 12px;
  `}
`;

const HeaderShell = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 18px;
  border-radius: 999px;
  border: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.08)"};
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(14, 14, 18, 0.88)" : "rgba(18, 18, 18, 0.58)"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 24px 60px rgba(0, 0, 0, 0.28)" : "0 18px 46px rgba(0, 0, 0, 0.18)"};
  backdrop-filter: blur(20px);
  transition:
    background-color 0.24s ease,
    border-color 0.24s ease,
    box-shadow 0.24s ease,
    transform 0.24s ease;

  ${media.mobile`
    padding: 12px 14px;
    border-radius: 28px;
    gap: 10px;
  `}
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
  color: #fff;
  text-decoration: none;

  ${media.mobile`
    gap: 10px;
  `}
`;

const BrandMark = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  object-position: center 40%;
  border: 2px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(126, 116, 241, 0.08);

  ${media.mobile`
    width: 38px;
    height: 38px;
  `}
`;

const BrandText = styled.div`
  display: grid;
  gap: 2px;
  line-height: 1;
  min-width: 0;
`;

const BrandName = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;

  ${media.mobile`
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

const BrandRole = styled.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.58);
  letter-spacing: 0.1em;
  text-transform: uppercase;

  ${media.mobile`
    display: none;
  `}
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);

  ${media.tablet`
    display: none;
  `}
`;

const NavLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255,255,255,0.62)")};
  background: ${({ $active }) => ($active ? "rgba(255,255,255,0.08)" : "transparent")};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition:
    color 0.22s ease,
    background-color 0.22s ease,
    transform 0.22s ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${media.tablet`
    display: none;
  `}
`;

const FlagSelect = styled(Select)`
  width: 94px;
  font-size: 13px;

  ${media.mobile`
    width: 72px;
    font-size: 12px;
  `}

  .react-select__control {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.08);
    min-height: 44px;
    border-radius: 999px;
    box-shadow: none;
    cursor: pointer;

    &:hover {
      border-color: rgba(126, 116, 241, 0.28);
    }

    ${media.mobile`
      min-height: 40px;
      padding-left: 2px;
    `}
  }

  .react-select__single-value {
    color: #ffffff;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu {
    background-color: rgba(18, 18, 18, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
    z-index: 1000;
  }

  .react-select__option {
    background-color: transparent;
    color: #ffffff;

    &:hover {
      background-color: rgba(126, 116, 241, 0.18);
    }
  }
`;

const MobileControls = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
    align-items: center;
    gap: 10px;
  `}

  ${media.mobile`
    gap: 8px;
  `}

  ${media.mobile`
    .mobile-language {
      display: none;
    }
  `}
`;

const MobileButton = styled.button`
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;

  ${media.mobile`
    width: 40px;
    height: 40px;
  `}
`;

const MenuGlyph = styled.span`
  position: relative;
  width: 16px;
  height: 12px;
  display: block;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.8px;
    border-radius: 999px;
    background: #ffffff;
    transition: transform 0.2s ease, top 0.2s ease, opacity 0.2s ease;
  }

  &::before {
    top: ${({ $open }) => ($open ? "5px" : "1px")};
    transform: ${({ $open }) => ($open ? "rotate(45deg)" : "none")};
  }

  &::after {
    top: ${({ $open }) => ($open ? "5px" : "9px")};
    transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "none")};
  }
`;

const MobilePanel = styled.div`
  width: min(1180px, 100%);
  margin: 10px auto 0;
  display: ${({ $open }) => ($open ? "block" : "none")};
  padding: 18px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(14, 14, 18, 0.92);
  backdrop-filter: blur(20px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);

  ${media.desktop`
    display: none;
  `}

  ${media.mobile`
    margin-top: 8px;
    padding: 14px;
    border-radius: 22px;
  `}
`;

const MobileNav = styled.div`
  display: grid;
  gap: 10px;
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: 18px;
  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255,255,255,0.72)")};
  background: ${({ $active }) => ($active ? "rgba(126, 116, 241, 0.14)" : "rgba(255,255,255,0.03)")};
  font-size: 14px;
  font-weight: 600;
`;

const MobileFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 0;
`;

const sections = ["about-me", "services", "portfolio", "experience", "education", "skills"];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about-me");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const updateHeaderState = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      const currentPosition = scrollTop + 180;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element && currentPosition >= element.offsetTop) {
          currentSection = section;
        }
      });

      setActiveLink(currentSection);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  const handleLinkClick = (link) => {
    setMenuOpen(false);
    setActiveLink(link);
  };

  const languageOptions = [
    { value: "en", label: <Flag code="US" width="18" alt="English" /> },
    { value: "pt", label: <Flag code="BR" width="18" alt="Português" /> },
  ];

  const handleLanguageChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
    setSelectedLanguage(selectedOption.value);
  };

  return (
    <HeaderContainer>
      <HeaderShell $scrolled={isScrolled}>
        <Brand href="#about-me" onClick={() => handleLinkClick("about-me")}>
          <BrandMark src={avatar} alt="Juan Souza" />
          <BrandText>
            <BrandName>Juan Souza</BrandName>
            <BrandRole>Software Engineer</BrandRole>
          </BrandText>
        </Brand>

        <NavLinks>
          {sections.map((section) => (
            <NavLinkStyled
              key={section}
              to={section}
              smooth
              duration={800}
              onClick={() => handleLinkClick(section)}
              $active={activeLink === section}
            >
              {t(`${section}-navbar`)}
            </NavLinkStyled>
          ))}
        </NavLinks>

        <RightContent>
          <FlagSelect
            options={languageOptions}
            value={languageOptions.find((option) => option.value === selectedLanguage)}
            onChange={handleLanguageChange}
            isSearchable={false}
            classNamePrefix="react-select"
          />
        </RightContent>

        <MobileControls>
          <FlagSelect
            className="mobile-language"
            options={languageOptions}
            value={languageOptions.find((option) => option.value === selectedLanguage)}
            onChange={handleLanguageChange}
            isSearchable={false}
            classNamePrefix="react-select"
          />
          <MobileButton
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <MenuGlyph $open={menuOpen} />
          </MobileButton>
        </MobileControls>
      </HeaderShell>

      <MobilePanel $open={menuOpen}>
        <MobileNav>
          {sections.map((section) => (
            <MobileNavLink
              key={section}
              to={section}
              smooth
              duration={800}
              onClick={() => handleLinkClick(section)}
              $active={activeLink === section}
            >
              <span>{t(`${section}-navbar`)}</span>
              <span>↗</span>
            </MobileNavLink>
          ))}
        </MobileNav>
        <MobileFooter />
      </MobilePanel>
    </HeaderContainer>
  );
};

export default Header;
