import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

export const FAQSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden border-b border-stone-200/80">
      {/* Background Motifs */}
      <div className="absolute inset-0 najdi-pattern opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('faq.tag')}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            {t('faq.title')}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-200 bg-stone-50/70 hover:border-amber-400 hover:bg-white shadow-sm transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-stone-900 hover:text-amber-600 transition-colors">
                    {isRTL ? item.question.ar : item.question.en}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-stone-200/80 text-stone-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 text-sm text-stone-700 leading-relaxed border-t border-stone-200 pt-4">
                      {isRTL ? item.answer.ar : item.answer.en}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
