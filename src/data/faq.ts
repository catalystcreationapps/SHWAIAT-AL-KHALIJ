export interface FAQItem {
  id: string;
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: {
      en: 'What makes Shwaiat Al-Khalij shawaya and faham unique?',
      ar: 'ما الذي يميز دجاج الشواية والفحم في شواية الخليج؟',
    },
    answer: {
      en: 'Shwaiat Al-Khalij (Gulf Grill) has perfected the art of Saudi flame and charcoal grilling over decades. We exclusively use 100% fresh, locally sourced halal chicken marinated in our proprietary heritage blend of Arabian herbs and spices, slow-roasted over real charcoal for unbeatable tenderness and smokiness.',
      ar: 'تتميز شواية الخليج بعراقتها وخبرتها الطويلة في فن الشواء على الجمر والشواية. نعتمد حصرياً على الدجاج المحلي الطازج والحلال 100%، والمتبل بخلطتنا التراثية الخاصة من التوابل والبهارات السعودية الأصيلة لنقدم نكهة مقرمشة من الخارج وطرية وغنية بالعصارة من الداخل.',
    },
  },
  {
    id: 'faq-2',
    question: {
      en: 'How can I order Shwaiat Al-Khalij food online?',
      ar: 'كيف يمكنني الطلب أونلاين من مطعم شواية الخليج؟',
    },
    answer: {
      en: 'You can order directly for delivery or pickup through our official online ordering portal at www.shwaiatalkhalij.sa, through our native mobile apps (available on iOS App Store and Google Play), or via leading delivery partner apps including Jahez, HungerStation, Keeta, ToYou, Mrsool, and Ninja.',
      ar: 'يمكنك الطلب بكل سهولة للتوصيل أو الاستلام عبر موقعنا الإلكتروني الرسمي (www.shwaiatalkhalij.sa)، أو عبر تطبيقنا الرسمي على متجري App Store و Google Play، وكذلك من خلال شركاء التوصيل المعتمدين مثل جاهز، هنقرستيشن، كيتا، تويو، مرسول، ونينجا.',
    },
  },
  {
    id: 'faq-3',
    question: {
      en: 'What are Shwaiat Al-Khalij branch operating hours?',
      ar: 'ما هي مواعيد وأوقات العمل في فروع شواية الخليج؟',
    },
    answer: {
      en: 'Most of our branches welcome guests daily from 10:30 AM until 12:00 AM (midnight), while selected branches (such as Bashayer in Jeddah and Thuqbah in Khobar) remain open until 1:00 AM. Inquiries and phone support are available via our unified hotline at 920034443.',
      ar: 'تستقبل معظم فروعنا الزوار يومياً من الساعة 10:30 صباحاً وحتى الساعة 12:00 منتصف الليل، وتستمر بعض الفروع (مثل فرع بشاير بجدة وفرع الثقبة بالخبر) حتى الساعة 1:00 ليلاً. ويسعدنا خدمتكم عبر الرقم الموحد 920034443.',
    },
  },
  {
    id: 'faq-4',
    question: {
      en: 'Is the poultry 100% fresh, local, and Halal certified?',
      ar: 'هل الدجاج المستخدم طازج ومحلي ومذبوح طبقاً للشريعة الإسلامية (حلال)؟',
    },
    answer: {
      en: 'Yes, absolutely. We strictly partner with accredited Saudi poultry farms to supply fresh chilled chicken daily, slaughtered and prepared in strict adherence to Islamic Sharia and the highest Saudi Food and Drug Authority (SFDA) food safety standards.',
      ar: 'نعم بكل تأكيد. نحرص على التوريد اليومي لأجود أنواع الدجاج الطازج من كبرى مزارع الدواجن الوطنية المعتمدة بالمملكة، والمذبوح طبقاً للشريعة الإسلامية وفق أعلى معايير الجودة والسلامة الغذائية المعتمدة من الهيئة العامة للغذاء والدواء.',
    },
  },
  {
    id: 'faq-5',
    question: {
      en: 'Do you cater for family banquets, corporate events, and parties?',
      ar: 'هل يوفر المطعم خدمات الولائم والمناسبات العائلية وحفلات الشركات؟',
    },
    answer: {
      en: 'Yes. We cater large family feasts, gatherings, corporate meetings, and traditional Saudi banquets. You can place bulk orders directly through our website, mobile apps, or by contacting our customer service team at 920034443 or info@shwaiatalkhalij.com.',
      ar: 'نعم، نوفر أطباق الولائم والمناسبات الكبيرة للمجموعات والعائلات والشركات مع تشكيلات متميزة من الأرز والمقبلات والإيدامات. نرحب بطلباتكم المسبقة عبر الموقع، التطبيق، أو عبر التواصل مع خدمة العملاء على 920034443.',
    },
  },
  {
    id: 'faq-6',
    question: {
      en: 'Where can I find Shwaiat Al-Khalij branches across the Kingdom?',
      ar: 'أين تتوزع فروع شواية الخليج في المملكة العربية السعودية؟',
    },
    answer: {
      en: 'Shwaiat Al-Khalij proudly operates 24+ branches across 8 major Saudi regions and cities: Riyadh, Jeddah, Dammam, Al Khobar, Al-Ahsa (Hofuf), Al Kharj, Hafar Al Batin, and Al Qassim (Buraydah). Visit our Branches page for interactive maps and direct navigation links.',
      ar: 'تنتشر فروع شواية الخليج في أكثر من 24 موقعاً رئيسياً عبر 8 مدن بالمملكة: الرياض، جدة، الدمام، الخبر، الأحساء (الهفوف)، الخرج، حفر الباطن، والقصيم (بريدة). تفضل بزيارة صفحة الفروع لتحديد الفرع الأقرب إليك والحصول على اتجاهات خرائط جوجل فوراً.',
    },
  },
];
