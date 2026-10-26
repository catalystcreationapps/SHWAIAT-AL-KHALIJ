import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, QrCode, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AppDownloadSection: React.FC = () => {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax float on the phone screenshot
      if (phoneImgRef.current) {
        gsap.to(phoneImgRef.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden border-b border-stone-200/80"
    >
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative rounded-3xl bg-gradient-to-br from-stone-50 via-amber-50/30 to-white border border-stone-200 shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16"
        >
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Download Info & QR Code */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                {/* Official Brand / App Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-amber-500/40 p-2 shadow-md flex items-center justify-center shrink-0">
                  <img
                    src="https://shwaiatalkhalij.com/public/assets/img/logo_1.png"
                    alt="Shwaiat Al-Khalij Official Application"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase">
                    <Smartphone className="w-3.5 h-3.5 text-amber-600" />
                    <span>{t('appDownload.tag')}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-stone-900 mt-1">
                    {t('appDownload.subtitle')}
                  </h3>
                </div>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-stone-900 tracking-tight">
                {t('appDownload.title')}
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {t('appDownload.p1')}
              </p>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{t('appDownload.feature1')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{t('appDownload.feature2')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{t('appDownload.feature3')}</span>
                </div>
              </div>

              {/* Store Badges and QR Code Row */}
              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Store Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a
                    href="https://apps.apple.com/in/app/shwaiat-alkhalij/id1661305052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center p-1.5 rounded-xl bg-white border border-stone-300 hover:border-amber-500 transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto"
                  >
                    <img
                      src="https://shwaiatalkhalij.com/public/assets/img/app_store.png"
                      alt={t('appDownload.appStoreAlt')}
                      className="h-12 w-auto object-contain"
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.shwaiatalkhalij.www"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center p-1.5 rounded-xl bg-white border border-stone-300 hover:border-amber-500 transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto"
                  >
                    <img
                      src="https://shwaiatalkhalij.com/public/assets/img/google_play.png"
                      alt={t('appDownload.googlePlayAlt')}
                      className="h-12 w-auto object-contain"
                    />
                  </a>
                </div>

                {/* Glowing QR Code Card */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-stone-200 shadow-sm shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-50 border border-stone-200 p-1 shrink-0">
                    <img
                      src="https://shwaiatalkhalij.com/public/assets/img/QR-PM.jpeg"
                      alt="Shwaiat Al-Khalij App Download QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-start">
                    <span className="font-heading font-bold text-xs text-amber-800 flex items-center gap-1">
                      <QrCode className="w-3.5 h-3.5 text-amber-600" />
                      {t('appDownload.qrTitle')}
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5 leading-snug">
                      {t('appDownload.qrSubtitle')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Phone Mockup */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-sm">
                {/* Glow ring under phone */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 blur-2xl rounded-full scale-95 pointer-events-none" />

                <img
                  ref={phoneImgRef}
                  src="https://shwaiatalkhalij.com/public/assets/img/app_screenshot.png"
                  alt="Shwaiat Al-Khalij Mobile App Preview"
                  loading="lazy"
                  className="relative z-10 w-full max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] animate-float-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
