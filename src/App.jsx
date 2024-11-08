import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import './i18n';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default App;
