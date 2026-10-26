import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, ArrowRight, ArrowLeft, Building2, Clock, Navigation } from 'lucide-react';
import { CITIES } from '../data/branches';

export const BranchesTeaser: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const branchesPath = isRTL ? '/ar/branches' : '/branches';

  return (
    <section className="relative py-24 bg-stone-50 overflow-hidden border-b border-stone-200/80">
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-amber-50/30 to-stone-50 border border-stone-200/90 shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase">
                <MapPin className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>{t('branchesTeaser.tag')}</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-stone-900 tracking-tight">
                {t('branchesTeaser.title')}
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {t('branchesTeaser.subtitle')}
              </p>

              {/* Saudi Cities Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-3">
                  {t('branchesTeaser.citiesCount')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {CITIES.filter((c) => c.id !== 'all').map((city) => (
                    <span
                      key={city.id}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-semibold text-stone-800 flex items-center gap-1.5"
                    >
                      <Building2 className="w-3 h-3 text-amber-600" />
                      <span>{isRTL ? city.name.ar : city.name.en}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Link to Dedicated Branches Page */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to={branchesPath}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-heading font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <span>{t('branchesTeaser.cta')}</span>
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Link>

                <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{isRTL ? 'جميع الفروع تفتح حتى منتصف الليل' : 'All branches open until midnight'}</span>
                </div>
              </div>
            </div>

            {/* Right Map Preview Graphic Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-lg p-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                  <iframe
                    title="Branches Preview Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711904.664878235!2d43.68482433054178!3d24.471676839352674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x6fb96f5b3a6ef6c3!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="w-full h-full pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-5">
                    <Link
                      to={branchesPath}
                      className="w-full p-3 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 shadow-md flex items-center justify-between hover:bg-white transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <Navigation className="w-4 h-4 text-amber-600" />
                        <span>{isRTL ? 'عرض الخريطة التفاعلية والاتجاهات' : 'View Interactive Map & Directions'}</span>
                      </div>
                      {isRTL ? (
                        <ArrowLeft className="w-3.5 h-3.5 text-amber-600" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
