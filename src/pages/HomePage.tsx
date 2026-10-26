import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { OurStory } from '../components/OurStory';
import { MenuSection } from '../components/MenuSection';
import { DeliveryAppsMarquee } from '../components/DeliveryAppsMarquee';
import { AppDownloadSection } from '../components/AppDownloadSection';
import { BranchesTeaser } from '../components/BranchesTeaser';
import { FAQSection } from '../components/FAQSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <SEOHead page="home" />
      <Hero />
      <OurStory />
      <MenuSection />
      <DeliveryAppsMarquee />
      <AppDownloadSection />
      <BranchesTeaser />
      <FAQSection />
    </main>
  );
};
