import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../data/menu';
import { BRANCHES } from '../data/branches';
import { FAQ_ITEMS } from '../data/faq';

interface SEOHeadProps {
  page: 'home' | 'branches';
}

export const SEOHead: React.FC<SEOHeadProps> = ({ page }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    // 1. Page Title & Meta Description (< 60 chars title, < 160 chars description)
    let pageTitle = '';
    let metaDescription = '';

    if (page === 'home') {
      if (isArabic) {
        pageTitle = 'شواية الخليج | المذاق السعودي الأصيل للشواية والفحم';
        metaDescription =
          'استمتع بأشهى دجاج شواية وفحم على الأصول مع الأرز المميز والإيدامات في مطاعم شواية الخليج. أكثر من 24 فرعاً في أرجاء المملكة العربية السعودية.';
      } else {
        pageTitle = 'Shwaiat Al-Khalij | Saudi Shawaya & Faham Fire Grill';
        metaDescription =
          'Savor authentic Saudi shawaya, charcoal faham grill, fragrant rice, and rich stews at Shwaiat Al-Khalij (Gulf Grill). 24+ branches across Saudi Arabia.';
      }
    } else {
      // Branches page
      if (isArabic) {
        pageTitle = 'فروع شواية الخليج | الرياض، جدة، الدمام، والخبر';
        metaDescription =
          'تصفح مواقع فروع شواية الخليج في جميع أنحاء المملكة. احصل على أوقات العمل وأرقام التواصل والاتجاهات عبر خرائط جوجل لأقرب فرع.';
      } else {
        pageTitle = 'Shwaiat Al-Khalij Branches | Locations Across Saudi Arabia';
        metaDescription =
          'Find your nearest Shwaiat Al-Khalij branch in Riyadh, Jeddah, Dammam, Khobar, and more. Working hours, phone numbers, and Google Maps directions.';
      }
    }

    document.title = pageTitle;

    // Update Meta Description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', metaDescription);

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', pageTitle);
    updateOrCreateMeta('og:description', metaDescription);
    updateOrCreateMeta('og:url', `https://www.shwaiatalkhalij.com${location.pathname}`);

    // Update Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', `https://www.shwaiatalkhalij.com${location.pathname}`);

    // 2. Generate JSON-LD Structured Data
    const existingSchemaScript = document.getElementById('dynamic-json-ld');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'dynamic-json-ld';
    script.type = 'application/ld+json';

    const baseUrl = 'https://www.shwaiatalkhalij.com';
    const currentUrl = `${baseUrl}${location.pathname}`;

    const graph: any[] = [
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isArabic ? 'الرئيسية' : 'Home',
            item: isArabic ? `${baseUrl}/ar` : baseUrl,
          },
          ...(page === 'branches'
            ? [
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: isArabic ? 'الفروع' : 'Branches',
                  item: isArabic ? `${baseUrl}/ar/branches` : `${baseUrl}/branches`,
                },
              ]
            : []),
        ],
      },
    ];

    if (page === 'home') {
      // Menu Schema
      graph.push({
        '@type': 'Menu',
        '@id': `${baseUrl}/#menu-schema`,
        name: isArabic ? 'قائمة طعام شواية الخليج' : 'Shwaiat Al-Khalij Menu',
        url: `${currentUrl}#menu`,
        hasMenuSection: [
          {
            '@type': 'MenuSection',
            name: isArabic ? 'الوجبات الرئيسية' : 'Meals',
            hasMenuItem: MENU_ITEMS.filter((i) => i.category === 'meals').map((item) => ({
              '@type': 'MenuItem',
              name: isArabic ? item.name.ar : item.name.en,
              description: isArabic ? item.description.ar : item.description.en,
              image: item.image,
              offers: {
                '@type': 'Offer',
                price: item.price.toString(),
                priceCurrency: 'SAR',
                availability: 'https://schema.org/InStock',
                url: item.orderUrl,
              },
              nutrition: {
                '@type': 'NutritionInformation',
                calories: `${item.kcal} kcal`,
              },
            })),
          },
          {
            '@type': 'MenuSection',
            name: isArabic ? 'الإيدامات والمقبلات' : 'Side Dishes',
            hasMenuItem: MENU_ITEMS.filter((i) => i.category === 'side-dishes').map((item) => ({
              '@type': 'MenuItem',
              name: isArabic ? item.name.ar : item.name.en,
              offers: {
                '@type': 'Offer',
                price: item.price.toString(),
                priceCurrency: 'SAR',
              },
            })),
          },
        ],
      });

      // FAQPage Schema
      graph.push({
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((faq) => ({
          '@type': 'Question',
          name: isArabic ? faq.question.ar : faq.question.en,
          acceptedAnswer: {
            '@type': 'Answer',
            text: isArabic ? faq.answer.ar : faq.answer.en,
          },
        })),
      });
    }

    if (page === 'branches') {
      // LocalBusiness entries for branches
      BRANCHES.forEach((b) => {
        graph.push({
          '@type': 'Restaurant',
          name: `Shwaiat Al-Khalij - ${b.title.en}`,
          alternateName: `شواية الخليج - ${b.title.ar}`,
          telephone: `+966${b.phone}`,
          url: b.googleMapUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: b.address.en,
            addressLocality: b.cityName.en,
            addressCountry: 'SA',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: b.lat,
            longitude: b.lng,
          },
          servesCuisine: ['Saudi Arabian', 'Charcoal Grill'],
          priceRange: '$$',
        });
      });
    }

    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('dynamic-json-ld');
      if (el) el.remove();
    };
  }, [page, isArabic, location.pathname]);

  return null;
};
