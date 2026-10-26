import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Navigation, Search, LayoutGrid, Map as MapIcon, ExternalLink } from 'lucide-react';
import { BRANCHES, CITIES } from '../data/branches';
import gsap from 'gsap';

interface BranchesSectionProps {
  isFullPage?: boolean;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ isFullPage = false }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter branches
  const filteredBranches = useMemo(() => {
    return BRANCHES.filter((branch) => {
      const matchesCity = selectedCity === 'all' || branch.cityId === selectedCity;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        branch.title.en.toLowerCase().includes(query) ||
        branch.title.ar.toLowerCase().includes(query) ||
        branch.address.en.toLowerCase().includes(query) ||
        branch.address.ar.toLowerCase().includes(query) ||
        branch.cityName.en.toLowerCase().includes(query) ||
        branch.cityName.ar.toLowerCase().includes(query);

      return matchesCity && matchesSearch;
    });
  }, [selectedCity, searchQuery]);

  // Animate grid cards on filter change
  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.4,
        ease: 'power2.out',
      }
    );
  }, [selectedCity, searchQuery, viewMode]);

  return (
    <section
      ref={containerRef}
      id="branches"
      className={`relative py-24 sm:py-32 bg-stone-50 overflow-hidden ${
        isFullPage ? 'pt-32' : ''
      }`}
    >
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('branches.tag')}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight">
            {t('branches.title')}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t('branches.subtitle')}
          </p>
        </div>

        {/* City Filter Chips */}
        <div className="mt-12 flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {CITIES.map((city) => {
            const isSelected = selectedCity === city.id;
            return (
              <button
                key={city.id}
                type="button"
                onClick={() => setSelectedCity(city.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 border-amber-400 text-white shadow-md'
                    : 'bg-white hover:bg-stone-100 border-stone-200 text-stone-700 hover:text-stone-900 shadow-sm'
                }`}
              >
                {isRTL ? city.name.ar : city.name.en}
              </button>
            );
          })}
        </div>

        {/* Search & View Switcher Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('branches.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs sm:text-sm text-stone-900 placeholder-stone-400 transition-colors"
            />
            <Search className={`w-4 h-4 text-amber-600 absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'}`} />
          </div>

          {/* Result Count and Mode Switcher */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-stone-500 font-medium">
              {filteredBranches.length} {t('branches.branchCount')}
            </span>

            <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title={t('branches.viewModeGrid')}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden md:inline">{t('branches.viewModeGrid')}</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('map')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'map'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title={t('branches.viewModeMap')}
              >
                <MapIcon className="w-4 h-4" />
                <span className="hidden md:inline">{t('branches.viewModeMap')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Content: Grid Mode vs Map Mode */}
        {viewMode === 'grid' ? (
          <div
            ref={gridRef}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredBranches.map((branch) => (
              <div
                key={branch.id}
                className="group relative rounded-2xl bg-white border border-stone-200/90 hover:border-amber-500/80 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                <div className="space-y-3">
                  {/* City Tag & Branch Title */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-bold text-lg text-stone-900 group-hover:text-amber-600 transition-colors">
                      {isRTL ? branch.title.ar : branch.title.en}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-semibold tracking-wider uppercase shrink-0">
                      {isRTL ? branch.cityName.ar : branch.cityName.en}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-xs text-stone-600 leading-relaxed">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{isRTL ? branch.address.ar : branch.address.en}</span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-2.5 text-xs text-stone-500">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{isRTL ? branch.timing.ar : branch.timing.en}</span>
                  </div>
                </div>

                {/* Card Actions (No phone number as requested) */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-end">
                  <a
                    href={branch.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span>{t('branches.getDirections')}</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Interactive Styled Bright Map Embed View */
          <div className="mt-8 rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
              {/* Left Branch Sidebar in Map Mode */}
              <div className="lg:col-span-4 p-4 max-h-[600px] overflow-y-auto border-b lg:border-b-0 lg:border-r border-stone-200 space-y-3 bg-stone-50/70">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-2">
                  {isRTL ? 'اختر الفرع لعرض الاتجاهات' : 'Select Branch for Directions'}
                </span>
                {filteredBranches.map((branch) => {
                  const isActive = activeBranchId === branch.id;
                  return (
                    <div
                      key={branch.id}
                      onClick={() => setActiveBranchId(branch.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isActive
                          ? 'bg-amber-50 border-amber-500 shadow-sm'
                          : 'bg-white border-stone-200 hover:border-amber-400'
                      }`}
                    >
                      <h4 className="font-heading font-bold text-sm text-stone-900">
                        {isRTL ? branch.title.ar : branch.title.en}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 line-clamp-1">
                        {isRTL ? branch.address.ar : branch.address.en}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[11px]">
                        <span className="text-amber-700 font-medium">
                          {isRTL ? branch.timing.ar : branch.timing.en}
                        </span>
                        <a
                          href={branch.googleMapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>{t('branches.getDirections')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Map View (Google Maps Embed) */}
              <div className="lg:col-span-8 relative min-h-[450px] lg:min-h-full">
                <iframe
                  title="Shwaiat Al-Khalij Saudi Branches Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711904.664878235!2d43.68482433054178!3d24.471676839352674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x6fb96f5b3a6ef6c3!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[500px]"
                />
                <div className="absolute top-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 text-xs text-stone-900 shadow-md pointer-events-none">
                  <span className="font-bold text-amber-700 block">
                    {isRTL ? 'شبكة فروع المملكة' : 'Saudi Branch Network'}
                  </span>
                  <span className="text-[11px] text-stone-600">
                    {isRTL ? '24+ فرعاً في 8 مدن رئيسية' : '24+ branches across 8 regions'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
