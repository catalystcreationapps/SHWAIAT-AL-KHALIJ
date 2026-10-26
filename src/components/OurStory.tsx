import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Flame, Award, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const OurStory: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on story image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -8, scale: 1.05 },
          {
            yPercent: 8,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: isRTL ? 40 : -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );

      // Counters reveal & count animation
      if (countersRef.current) {
        gsap.fromTo(
          countersRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: countersRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      ref={sectionRef}
      id="AboutUs"
      className="relative py-24 sm:py-32 bg-white overflow-hidden border-b border-stone-200/80"
    >
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Story Text Column */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>{t('story.tag')}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-stone-900 tracking-tight">
              {t('story.title')}
            </h2>

            <p className="font-heading text-xl sm:text-2xl text-amber-700 font-medium leading-snug">
              {t('story.subtitle')}
            </p>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p>{t('story.p3')}</p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">
                    {isRTL ? 'أعلى معايير النظافة' : 'Certified Food Safety'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {isRTL ? 'معايير صارمة تضمن أعلى درجات الجودة' : 'Strict adherence to SFDA hygiene standards'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                  <HeartHandshake className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">
                    {isRTL ? 'كرم الضيافة الأصيل' : 'Saudi Hospitality'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {isRTL ? 'ترحيب حار وخدمة ترتقي لتطلعاتكم' : 'Warm, attentive service for every guest'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column with Luxury Frame & Parallax */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageWrapperRef}
              className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xl p-2 group"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-100">
                <img
                  ref={imageRef}
                  src="https://shwaiatalkhalij.com/public/aboutus_image1/1766866255_about_img_2.png"
                  alt="Shwaiat Al-Khalij Authentic Heritage Dish"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=80';
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700"
                />

                {/* Subtle vignette on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Award Stamp */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-lg flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 text-sm">
                      {isRTL ? 'نكهة أصيلة متوارثة' : 'Decades of Fire Mastery'}
                    </h5>
                    <p className="text-[11px] text-stone-600">
                      {isRTL ? 'الوجهة المفضلة لمحبي الشواية في المملكة' : 'The definitive Saudi shawaya & faham destination'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Gold Frames */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Story Stats Counters */}
        <div
          ref={countersRef}
          className="mt-20 pt-12 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-amber-600 block">
              {t('story.counter1')}
            </span>
            <span className="text-xs sm:text-sm text-stone-600 font-semibold mt-1 block">
              {t('story.counter1Label')}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-amber-600 block">
              {t('story.counter2')}
            </span>
            <span className="text-xs sm:text-sm text-stone-600 font-semibold mt-1 block">
              {t('story.counter2Label')}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-amber-600 block">
              {t('story.counter3')}
            </span>
            <span className="text-xs sm:text-sm text-stone-600 font-semibold mt-1 block">
              {t('story.counter3Label')}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-amber-600 block">
              {t('story.counter4')}
            </span>
            <span className="text-xs sm:text-sm text-stone-600 font-semibold mt-1 block">
              {t('story.counter4Label')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
