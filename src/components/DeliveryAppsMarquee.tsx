import React from 'react';
import { useTranslation } from 'react-i18next';
import { DELIVERY_APPS } from '../data/deliveryApps';
import { Smartphone, ExternalLink } from 'lucide-react';

export const DeliveryAppsMarquee: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Duplicate list for seamless infinite loop
  const duplicatedApps = [...DELIVERY_APPS, ...DELIVERY_APPS, ...DELIVERY_APPS];

  return (
    <section
      id="our_application"
      className="relative py-24 bg-stone-100/80 overflow-hidden border-y border-stone-200/80"
    >
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-amber-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase mb-3">
          <Smartphone className="w-3.5 h-3.5 text-amber-600" />
          <span>{t('delivery.tag')}</span>
        </div>

        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
          {t('delivery.title')}
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
          {t('delivery.subtitle')}
        </p>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className={`flex gap-6 w-max py-4 hover:[animation-play-state:paused] ${
            isRTL ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
        >
          {duplicatedApps.map((app, index) => (
            <a
              key={`${app.id}-${index}`}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 px-6 py-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shrink-0"
            >
              {/* Significantly Enlarged Application Logo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-stone-50 border border-stone-200 p-3 flex items-center justify-center shrink-0 group-hover:border-amber-400 group-hover:bg-amber-50/40 transition-colors shadow-inner">
                <img
                  src={app.logo}
                  alt={isRTL ? app.name.ar : app.name.en}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col text-start space-y-1">
                <span className="font-heading font-extrabold text-base sm:text-lg text-stone-900 group-hover:text-amber-600 transition-colors">
                  {isRTL ? app.name.ar : app.name.en}
                </span>
                <span className="text-xs text-stone-500 flex items-center gap-1 group-hover:text-amber-600 transition-colors font-medium">
                  <span>{isRTL ? app.badgeText.ar : app.badgeText.en}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-xs text-stone-500 tracking-wider uppercase font-medium">
          {t('delivery.hoverNote')}
        </p>
      </div>
    </section>
  );
};
