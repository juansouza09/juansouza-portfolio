import { Suspense, lazy } from "react";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const MentorshipSection = lazy(() => import("./components/MentorshipSection"));

const SectionFallback = () => (
  <section className="px-6 py-24 lg:px-8">
    <div className="mx-auto w-full max-w-6xl">
      <div className="h-10 w-56 animate-pulse rounded-md bg-muted/60" />
      <div className="mt-6 h-48 animate-pulse rounded-2xl bg-muted/40" />
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-background text-foreground">
      <main className="transition-main">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <PortfolioSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <EducationSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MentorshipSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
