import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu as MenuIcon, X, MapPin, UtensilsCrossed, Smartphone, Flame, ArrowRight, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export const ORDER_NOW_URL =
  'https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTF2c3p4cGRfcBgAOgMI8A0%3D&hl=en-IN&gl=in&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=Viffas7lItykhvcP5PmV0Ao&ei=Viffas7lItykhvcP5PmV0Ao&fo_s=OA&opi=79508299&ebb=1&cs=0&foub=mcpp';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isRTL = i18n.language === 'ar';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll direction watcher to show/hide navbar and morph style
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 200 && currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Language switch handler with route mirroring
  const handleLanguageSwitch = (targetLng: 'en' | 'ar') => {
    if (i18n.language === targetLng) return;

    i18n.changeLanguage(targetLng);

    const path = location.pathname;
    let newPath = '/';

    if (targetLng === 'ar') {
      if (path.includes('branches')) {
        newPath = '/ar/branches';
      } else {
        newPath = '/ar';
      }
    } else {
      if (path.includes('branches')) {
        newPath = '/branches';
      } else {
        newPath = '/';
      }
    }

    navigate(newPath);
    setMobileMenuOpen(false);
  };

  // Mobile menu stagger animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const items = mobileMenuRef.current.querySelectorAll('.mobile-nav-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: isRTL ? 25 : 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, isRTL]);

  const branchesPath = isRTL ? '/ar/branches' : '/branches';
  const homePath = isRTL ? '/ar' : '/';

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 py-2.5 shadow-sm'
            : 'bg-white/95 backdrop-blur-md border-b border-stone-200/60 py-3 sm:py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to={homePath}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Shwaiat Al-Khalij Home"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-amber-500/40 p-1.5 bg-white shadow-md group-hover:border-amber-600 group-hover:shadow-lg transition-all duration-300">
                <img
                  src="https://shwaiatalkhalij.com/public/assets/img/logo_1.png"
                  alt="Shwaiat Al-Khalij Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-stone-900 group-hover:text-amber-600 transition-colors duration-300">
                  {isRTL ? 'شواية الخليج' : 'SHWAIAT AL-KHALIJ'}
                </span>
                <span className="text-[10px] text-stone-500 tracking-[0.2em] uppercase hidden sm:block font-medium">
                  {isRTL ? 'المذاق السعودي الأصيل' : 'Saudi Fire Grill Heritage'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
              <Link
                to={homePath}
                className="text-stone-800 hover:text-amber-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('nav.home')}
              </Link>
              <Link
                to={branchesPath}
                className="text-stone-800 hover:text-amber-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                {t('nav.ourBranches')}
              </Link>
              <a
                href={location.pathname.includes('branches') ? `${homePath}#menu` : '#menu'}
                className="text-stone-800 hover:text-amber-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1.5"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
                {t('nav.menu')}
              </a>
              <a
                href={location.pathname.includes('branches') ? `${homePath}#AboutUs` : '#AboutUs'}
                className="text-stone-800 hover:text-amber-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('nav.ourStory')}
              </a>
              <a
                href={location.pathname.includes('branches') ? `${homePath}#our_application` : '#our_application'}
                className="text-stone-800 hover:text-amber-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5 text-amber-600" />
                {t('nav.ourApplications')}
              </a>
            </nav>

            {/* Right Controls: Language Switcher & Order Now */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Switcher Pill */}
              <div className="relative flex items-center bg-stone-100 border border-stone-200 rounded-full p-0.5 shadow-inner text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => handleLanguageSwitch('en')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all duration-300 ${
                    !isRTL
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                  aria-label="Switch to English language"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageSwitch('ar')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full font-arabicSans transition-all duration-300 ${
                    isRTL
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                  aria-label="التبديل إلى اللغة العربية"
                >
                  العربية
                </button>
              </div>

              {/* Order Now CTA Button */}
              <a
                href={ORDER_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <Flame className="w-4 h-4 animate-pulse" />
                <span>{t('nav.orderNow')}</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-800 hover:text-amber-600 shadow-sm lg:hidden focus:outline-none"
                aria-label={t('nav.menuToggle')}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Awwwards-level Glass Drawer) */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-stone-50/98 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Najdi Pattern Motif */}
        <div className="absolute inset-0 najdi-pattern opacity-10 pointer-events-none" />

        {/* Mobile Content */}
        <div className="relative z-10 flex flex-col justify-between h-full pt-28 pb-10 px-8 max-w-md mx-auto">
          <div className="space-y-6">
            <span className="text-[11px] font-bold text-amber-800 tracking-[0.25em] uppercase block border-b border-stone-200 pb-2">
              {isRTL ? 'قائمة التصفح' : 'NAVIGATION'}
            </span>

            <nav className="flex flex-col space-y-4 text-lg font-medium">
              <Link
                to={homePath}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item flex items-center justify-between text-stone-800 hover:text-amber-600 py-2 border-b border-stone-200"
              >
                <span>{t('nav.home')}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4 text-amber-600" /> : <ArrowRight className="w-4 h-4 text-amber-600" />}
              </Link>
              <Link
                to={branchesPath}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item flex items-center justify-between text-stone-800 hover:text-amber-600 py-2 border-b border-stone-200"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{t('nav.ourBranches')}</span>
                </div>
                {isRTL ? <ArrowLeft className="w-4 h-4 text-amber-600" /> : <ArrowRight className="w-4 h-4 text-amber-600" />}
              </Link>
              <a
                href={location.pathname.includes('branches') ? `${homePath}#menu` : '#menu'}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item flex items-center justify-between text-stone-800 hover:text-amber-600 py-2 border-b border-stone-200"
              >
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4 text-amber-600" />
                  <span>{t('nav.menu')}</span>
                </div>
                {isRTL ? <ArrowLeft className="w-4 h-4 text-amber-600" /> : <ArrowRight className="w-4 h-4 text-amber-600" />}
              </a>
              <a
                href={location.pathname.includes('branches') ? `${homePath}#AboutUs` : '#AboutUs'}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item flex items-center justify-between text-stone-800 hover:text-amber-600 py-2 border-b border-stone-200"
              >
                <span>{t('nav.ourStory')}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4 text-amber-600" /> : <ArrowRight className="w-4 h-4 text-amber-600" />}
              </a>
              <a
                href={location.pathname.includes('branches') ? `${homePath}#our_application` : '#our_application'}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item flex items-center justify-between text-stone-800 hover:text-amber-600 py-2 border-b border-stone-200"
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-amber-600" />
                  <span>{t('nav.ourApplications')}</span>
                </div>
                {isRTL ? <ArrowLeft className="w-4 h-4 text-amber-600" /> : <ArrowRight className="w-4 h-4 text-amber-600" />}
              </a>
            </nav>
          </div>

          {/* Bottom Actions */}
          <div className="space-y-4 pt-6 border-t border-stone-200">
            <a
              href={ORDER_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-bold text-center block shadow-md hover:scale-[1.02] transition-transform"
            >
              {t('nav.orderNow')}
            </a>

            <div className="flex items-center justify-between text-xs text-stone-500">
              <span>{isRTL ? 'الرقم الموحد: 920034443' : 'Unified Number: 920034443'}</span>
              <span>11:00 AM - 12:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
