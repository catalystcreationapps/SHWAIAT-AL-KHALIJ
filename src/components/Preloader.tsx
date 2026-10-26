import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const flameBarRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          if (onComplete) onComplete();
        },
      });

      // Initial state
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(textRef.current, { y: 20, opacity: 0 });
      gsap.set(flameBarRef.current, { scaleX: 0 });

      // Animation sequence
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(
          flameBarRef.current,
          {
            scaleX: 1,
            duration: 0.7,
            ease: 'expo.inOut',
          },
          '-=0.3'
        )
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to({}, { duration: 0.4 }) // slight dramatic hold
        .to([logoRef.current, textRef.current, flameBarRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: 'power2.in',
        })
        .to(
          curtainTopRef.current,
          {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut',
          },
          'curtain'
        )
        .to(
          curtainBottomRef.current,
          {
            yPercent: 100,
            duration: 0.8,
            ease: 'power4.inOut',
          },
          'curtain'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] pointer-events-none flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Top and Bottom Curtains */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#faf7f2] border-b border-amber-500/20 shadow-lg"
      />
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#faf7f2] border-t border-amber-500/20 shadow-lg"
      />

      {/* Center Brand Identity */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-5">
          <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-150 animate-pulse-slow" />
          <img
            ref={logoRef}
            src="https://shwaiatalkhalij.com/public/assets/img/logo_1.png"
            alt="Shwaiat Al-Khalij"
            className="w-28 h-28 object-contain relative drop-shadow-[0_4px_20px_rgba(234,88,12,0.25)]"
          />
        </div>

        {/* Ember Line */}
        <div className="w-48 h-[2.5px] bg-stone-200 rounded-full overflow-hidden my-3">
          <div
            ref={flameBarRef}
            className="w-full h-full bg-gradient-to-r from-transparent via-amber-600 to-amber-500 origin-center"
          />
        </div>

        <div ref={textRef} className="space-y-1">
          <span className="text-amber-800 uppercase tracking-[0.3em] text-xs font-bold">
            {isRTL ? 'مطاعم شواية الخليج' : 'SHWAIAT AL-KHALIJ'}
          </span>
          <p className="text-stone-500 text-[11px] tracking-wider font-medium">
            {t('nav.brandTagline')}
          </p>
        </div>
      </div>
    </div>
  );
};
