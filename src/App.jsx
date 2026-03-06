import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import MentorshipSection from "./components/MentorshipSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-background text-foreground">
      <main className="transition-main">
        <HeroSection />
        <PortfolioSection />
        <ExperienceSection />
        <EducationSection />
        <MentorshipSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
