import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { HomePage } from './pages/HomePage';
import { BranchesPage } from './pages/BranchesPage';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  // Synchronize language based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/ar')) {
      if (i18n.language !== 'ar') {
        i18n.changeLanguage('ar');
      }
    } else {
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
    }
  }, [location.pathname, i18n]);

  // Smooth Scrolling with Lenis + ScrollTrigger Sync
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Scroll to top or anchor on route change
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(el as HTMLElement, { offset: -80 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 relative selection:bg-amber-600 selection:text-white">
      {/* Subtle Grain Overlay for Film Texture */}
      <div className="grain-overlay" />

      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Flame Preloader */}
      <Preloader />

      {/* Morphing Glass Navbar */}
      <Navbar />

      {/* App Routes */}
      <div className="relative z-10">
        <Routes>
          {/* English Routes (Default) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/en" element={<Navigate to="/" replace />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/en/branches" element={<Navigate to="/branches" replace />} />

          {/* Arabic Mirrored Routes */}
          <Route path="/ar" element={<HomePage />} />
          <Route path="/ar/branches" element={<BranchesPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Cinematic Footer with Oversized Wordmark */}
      <Footer />
    </div>
  );
};
