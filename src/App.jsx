import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import FeedbackSection from "./components/FeedbackSection";
import "./i18n";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="about-me">
          <HeroSection />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
