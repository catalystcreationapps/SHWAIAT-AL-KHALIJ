import React, { useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { BranchesSection } from '../components/BranchesSection';
import { AppDownloadSection } from '../components/AppDownloadSection';
import { useTranslation } from 'react-i18next';
import { MapPin, Sparkles } from 'lucide-react';

export const BranchesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 sm:pt-28">
      <SEOHead page="branches" />

      {/* Branches Page Dedicated Hero Banner */}
      <section className="relative py-20 bg-stone-100 overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 najdi-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>{isRTL ? 'خريطة فروع شواية الخليج' : 'Branch Locations'}</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-stone-900 tracking-tight">
            {t('branches.title')}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t('branches.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Complete Branches Interactive Section */}
      <BranchesSection isFullPage={true} />

      {/* App Download Promo */}
      <AppDownloadSection />
    </main>
  );
};
