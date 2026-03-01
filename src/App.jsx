import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import "./App.css";
import "./i18n";

const App = () => {
  return (
    <div className="app-shell">
      <div className="app-glow app-glow-primary" />
      <div className="app-glow app-glow-secondary" />
      <Header />
      <main className="app-main">
        <section id="about-me" className="app-section app-hero-section">
          <HeroSection />
        </section>
        <ScrollReveal id="services" delay={80}>
          <Services />
        </ScrollReveal>
        <ScrollReveal id="portfolio" delay={140}>
          <PortfolioSection />
        </ScrollReveal>
        <ScrollReveal id="experience" delay={200}>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal id="education" delay={260}>
          <EducationSection />
        </ScrollReveal>
        <ScrollReveal id="skills" delay={320}>
          <SkillsSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default App;
