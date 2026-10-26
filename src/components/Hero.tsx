import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Flame, MapPin, Utensils, ChevronDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Floating Ember Particles Canvas (lightweight 60fps)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = window.innerWidth < 768 ? 25 : 50;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height + height * 0.2,
      size: Math.random() * 2.5 + 0.8,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      hue: Math.random() > 0.4 ? 24 : 42, // Ember orange (24) or saffron gold (42)
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        // Reset if off top or sides
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 55%, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 50%, 0.6)`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP Parallax and Text Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on video
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 20,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Staggered reveal timeline for hero text & CTA
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  const branchesPath = isRTL ? '/ar/branches' : '/branches';

  return (
    <section
      ref={sectionRef}
      id="main-content"
      className="relative w-full min-h-[100svh] flex flex-col justify-start sm:justify-center overflow-hidden bg-stone-50 pt-32 sm:pt-36 md:pt-40 lg:pt-36 xl:pt-40 pb-12 sm:pb-16"
    >
      {/* Background Video / Parallax Media */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://shwaiatalkhalij.com/public/assets/img/695b6e8943870.jpg"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.95] contrast-[1.05] transition-transform duration-1000"
        >
          <source
            src="https://shwaiatalkhalij.com/public/home_banner/1766865324_video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Luminous Warm Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/85 to-white/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-50/50 to-stone-50/90" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Lightweight Ember Sparks Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"
      />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        {/* Heritage Pill Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 border border-amber-500/30 text-amber-900 text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-sm mb-3 sm:mb-5"
        >
          <Flame className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span>{t('hero.badge')}</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>

        {/* Cinematic H1 Headline */}
        <h1
          ref={titleRef}
          className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.2] tracking-tight text-stone-900 max-w-4xl drop-shadow-sm"
        >
          {isRTL ? (
            <>
              نكهة <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">الشواية والفحم</span> السعودية الأصيلة التي تحكي عراقة التقاليد
            </>
          ) : (
            <>
              Authentic Saudi <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Shawaya & Faham</span> Flavor That Speaks Tradition
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl leading-relaxed font-normal"
        >
          {t('hero.subtitle')}
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center"
        >
          <Link
            to={branchesPath}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
          >
            <MapPin className="w-4 h-4 text-white" />
            <span>{t('hero.ctaBranches')}</span>
          </Link>

          <a
            href="#menu"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-stone-50 border border-stone-300 hover:border-amber-500 text-stone-800 hover:text-amber-700 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <Utensils className="w-4 h-4 text-amber-600" />
            <span>{t('hero.ctaMenu')}</span>
          </a>
        </div>

        {/* Editorial Value Badges */}
        <div
          ref={statsRef}
          className="mt-8 sm:mt-12 pt-4 sm:pt-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center"
        >
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/80 border border-stone-200/80 shadow-sm backdrop-blur-sm">
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-amber-600">
              {t('hero.stats.branches')}
            </span>
            <span className="text-xs text-stone-600 mt-0.5 font-medium">
              {t('hero.stats.branchesSub')}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/80 border border-stone-200/80 shadow-sm backdrop-blur-sm">
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-amber-600">
              {t('hero.stats.tradition')}
            </span>
            <span className="text-xs text-stone-600 mt-0.5 font-medium">
              {t('hero.stats.traditionSub')}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/80 border border-stone-200/80 shadow-sm backdrop-blur-sm">
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-amber-600">
              {t('hero.stats.quality')}
            </span>
            <span className="text-xs text-stone-600 mt-0.5 font-medium">
              {t('hero.stats.qualitySub')}
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="mt-6 sm:mt-8 flex flex-col items-center text-xs text-stone-500 animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold mb-1">
            {t('hero.scrollPrompt')}
          </span>
          <ChevronDown className="w-4 h-4 text-amber-600" />
        </div>
      </div>
    </section>
  );
};
