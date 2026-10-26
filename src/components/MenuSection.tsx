import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, ExternalLink, Search, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { MENU_ITEMS, MenuCategory } from '../data/menu';
import gsap from 'gsap';

export const MenuSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('meals');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const categories: { key: MenuCategory | 'all'; label: string }[] = [
    { key: 'meals', label: t('menu.categories.meals') },
    { key: 'side-dishes', label: t('menu.categories.side-dishes') },
    { key: 'salads', label: t('menu.categories.salads') },
    { key: 'drinks', label: t('menu.categories.drinks') },
    { key: 'desserts', label: t('menu.categories.desserts') },
  ];

  // Filter items by category & search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        item.name.en.toLowerCase().includes(query) ||
        item.name.ar.toLowerCase().includes(query) ||
        item.description.en.toLowerCase().includes(query) ||
        item.description.ar.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Limit displayed items unless expanded
  const displayLimit = 8;
  const visibleItems = isExpanded
    ? filteredItems
    : filteredItems.slice(0, displayLimit);
  const hasMore = filteredItems.length > displayLimit;

  // Animate cards on category change
  useEffect(() => {
    if (!cardsGridRef.current) return;

    gsap.fromTo(
      cardsGridRef.current.children,
      { opacity: 0, y: 20, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.05,
        duration: 0.45,
        ease: 'power2.out',
      }
    );
  }, [activeCategory, searchQuery, isExpanded]);

  return (
    <section
      ref={containerRef}
      id="menu"
      className="relative py-24 sm:py-32 bg-stone-50 overflow-hidden border-b border-stone-200/80"
    >
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>{t('menu.tag')}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight">
            {t('menu.title')}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Search & Category Tabs Toolbar */}
        <div className="mt-12 space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-stone-200 shadow-sm max-w-full">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setIsExpanded(false);
                    }}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md shadow-amber-500/25 scale-[1.02]'
                        : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/80'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Dish Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('menu.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-stone-900 placeholder-stone-400 transition-colors shadow-sm"
            />
            <Search className={`w-4 h-4 text-amber-600 absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'}`} />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`absolute top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 ${isRTL ? 'left-4' : 'right-4'}`}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {visibleItems.length === 0 ? (
          <div className="text-center py-16 text-stone-500">
            <p className="text-sm">{t('menu.emptyMessage')}</p>
          </div>
        ) : (
          <div
            ref={cardsGridRef}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {visibleItems.map((item) => (
              <a
                key={item.id}
                href={item.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="group relative rounded-2xl bg-white border border-stone-200/90 hover:border-amber-500/80 p-3.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm overflow-hidden"
              >
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-5 right-5 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{t('menu.popular')}</span>
                  </div>
                )}

                <div>
                  {/* Food Image with Hover Zoom */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200 mb-4">
                    <img
                      src={item.image}
                      alt={isRTL ? item.name.ar : item.name.en}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = item.fallbackImage;
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base text-stone-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {isRTL ? item.name.ar : item.name.en}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {isRTL ? item.description.ar : item.description.en}
                  </p>
                </div>

                {/* Card Footer: Price, Calories & Order Link */}
                <div className="mt-4 pt-3.5 border-t border-stone-200 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold font-heading text-amber-600">
                      {item.price} <span className="text-xs text-stone-500 font-sans">{t('menu.currency')}</span>
                    </span>
                    {item.kcal > 0 && (
                      <span className="text-[11px] text-stone-500 font-medium">
                        {item.kcal.toLocaleString()} {t('menu.kcal')}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                    <span>{t('menu.orderOnline')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View More / Expand Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 hover:border-amber-500 text-stone-800 font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>{isExpanded ? t('menu.showLess') : t('menu.viewMore')}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
