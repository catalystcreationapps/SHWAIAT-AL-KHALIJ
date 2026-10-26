import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Clock, Instagram, Twitter } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom TikTok SVG Icon
const TikTokIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wordmarkRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordmarkRef.current,
        { opacity: 0.2, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wordmarkRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();
  const homePath = isRTL ? '/ar' : '/';
  const branchesPath = isRTL ? '/ar/branches' : '/branches';

  return (
    <footer className="relative bg-stone-100 text-stone-900 pt-20 pb-12 overflow-hidden border-t border-stone-200">
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-stone-200">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link to={homePath} className="inline-flex items-center gap-3">
              {/* Enlarged Brand Logo */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-amber-500/40 p-2 bg-white shadow-md">
                <img
                  src="https://shwaiatalkhalij.com/public/assets/img/logo_1.png"
                  alt="Shwaiat Al-Khalij"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-stone-900 tracking-wider">
                {isRTL ? 'شواية الخليج' : 'SHWAIAT AL-KHALIJ'}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-3">
                {t('footer.followUs')}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/shwaiatalkhalej?igsh=MWJxd3g3dmxzOHJ0Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white border border-stone-300 hover:border-amber-500 hover:bg-amber-600 text-stone-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://x.com/shwaiatalkhalej?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 rounded-full bg-white border border-stone-300 hover:border-amber-500 hover:bg-amber-600 text-stone-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                <a
                  href="https://www.tiktok.com/@shwaiatalkhalej?_r=1&_t=ZS-91uXusZ419G"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full bg-white border border-stone-300 hover:border-amber-500 hover:bg-amber-600 text-stone-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-amber-800 uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
              <li>
                <a href={`${homePath}#AboutUs`} className="hover:text-amber-600 transition-colors">
                  {t('nav.ourStory')}
                </a>
              </li>
              <li>
                <a href={`${homePath}#menu`} className="hover:text-amber-600 transition-colors">
                  {t('nav.menu')}
                </a>
              </li>
              <li>
                <Link to={branchesPath} className="hover:text-amber-600 transition-colors font-medium">
                  {t('nav.ourBranches')}
                </Link>
              </li>
              <li>
                <a href={`${homePath}#our_application`} className="hover:text-amber-600 transition-colors">
                  {t('nav.ourApplications')}
                </a>
              </li>
              <li>
                <a href={`${homePath}#faq`} className="hover:text-amber-600 transition-colors">
                  {t('nav.faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-amber-800 uppercase tracking-wider">
              {t('footer.contactUs')}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
              <li>
                <a
                  href="mailto:info@shwaiatalkhalij.com"
                  className="flex items-center gap-2.5 hover:text-amber-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>info@shwaiatalkhalij.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:920034443"
                  className="flex items-center gap-2.5 hover:text-amber-600 transition-colors font-bold text-amber-700"
                >
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>920034443</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-stone-900 text-xs">
                    {t('footer.hoursLabel')}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {t('footer.hoursValue')}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: App Download Badges */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-amber-800 uppercase tracking-wider">
              {t('footer.downloadApp')}
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://apps.apple.com/in/app/shwaiat-alkhalij/id1661305052"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-1 rounded-xl bg-white border border-stone-300 hover:border-amber-500 transition-all hover:scale-102 shadow-sm"
              >
                <img
                  src="https://shwaiatalkhalij.com/public/assets/img/app_store.png"
                  alt="Download on App Store"
                  className="h-10 w-auto object-contain mx-auto sm:mx-0"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.shwaiatalkhalij.www"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-1 rounded-xl bg-white border border-stone-300 hover:border-amber-500 transition-all hover:scale-102 shadow-sm"
              >
                <img
                  src="https://shwaiatalkhalij.com/public/assets/img/google_play.png"
                  alt="Get it on Google Play"
                  className="h-10 w-auto object-contain mx-auto sm:mx-0"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Cinematic Brand Wordmark */}
        <div
          ref={wordmarkRef}
          className="pt-12 pb-6 text-center select-none overflow-hidden"
        >
          <span className="font-heading font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-stone-900 via-stone-800 to-stone-700 tracking-tight uppercase pointer-events-none block leading-none">
            {isRTL ? 'شواية الخليج' : 'SHWAIAT AL-KHALIJ'}
          </span>
        </div>

        {/* Sub-Footer Copyright */}
        <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            {isRTL
              ? `جميع الحقوق محفوظة © ${currentYear} لمطاعم "شواية الخليج".`
              : `All rights reserved © ${currentYear} by "Shwaiat Al-Khalij".`}
          </p>

          <div className="flex items-center gap-6">
            <span>{isRTL ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}</span>
            <a
              href="https://www.shwaiatalkhalij.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:underline font-semibold"
            >
              shwaiatalkhalij.sa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
