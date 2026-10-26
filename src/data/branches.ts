export interface City {
  id: string;
  name: {
    en: string;
    ar: string;
  };
}

export interface Branch {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  cityId: string;
  cityName: {
    en: string;
    ar: string;
  };
  address: {
    en: string;
    ar: string;
  };
  timing: {
    en: string;
    ar: string;
  };
  googleMapUrl: string;
  phone: string;
  lat: number;
  lng: number;
}

export const CITIES: City[] = [
  { id: 'all', name: { en: 'All Cities', ar: 'جميع المدن' } },
  { id: 'riyadh', name: { en: 'Riyadh', ar: 'الرياض' } },
  { id: 'jeddah', name: { en: 'Jeddah', ar: 'جدة' } },
  { id: 'dammam', name: { en: 'Dammam', ar: 'الدمام' } },
  { id: 'al-khobar', name: { en: 'Al Khobar', ar: 'الخبر' } },
  { id: 'al-ahsa', name: { en: 'Al-Ahsa', ar: 'الأحساء' } },
  { id: 'al-kharj', name: { en: 'Al Kharj', ar: 'الخرج' } },
  { id: 'hafar-al-batin', name: { en: 'Hafar Al Batin', ar: 'حفر الباطن' } },
  { id: 'al-qassim', name: { en: 'Al Qassim', ar: 'القصيم' } },
];

export const BRANCHES: Branch[] = [
  // --- JEDDAH ---
  {
    id: 'bashayer-jeddah',
    title: { en: 'BASHAYER', ar: 'بشاير' },
    cityId: 'jeddah',
    cityName: { en: 'Jeddah', ar: 'جدة' },
    address: {
      en: 'Al Bashaer District, Jeddah 23782',
      ar: 'حي البشائر، جدة 23782',
    },
    timing: { en: '11:00 AM - 1:00 AM', ar: '11:00 صباحاً - 1:00 ليلاً' },
    googleMapUrl: 'https://maps.app.goo.gl/pwcucnQztANSchDR9',
    phone: '920034443',
    lat: 21.6542,
    lng: 39.1428,
  },
  {
    id: 'al-samer-jeddah',
    title: { en: 'AL SAMER', ar: 'السامر' },
    cityId: 'jeddah',
    cityName: { en: 'Jeddah', ar: 'جدة' },
    address: {
      en: 'Dist. Al Samer, Al Haramain Road, Jeddah 23462',
      ar: 'حي السامر، طريق الحرمين، جدة 23462',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/Y2J2wxWZmDokDDoh6',
    phone: '920034443',
    lat: 21.5894,
    lng: 39.2215,
  },
  {
    id: 'hamdaniya-jeddah',
    title: { en: 'HAMDANIYA', ar: 'الحمدانية' },
    cityId: 'jeddah',
    cityName: { en: 'Jeddah', ar: 'جدة' },
    address: {
      en: 'Al Kawthar Dist, Abdullah Ibn Abi Umayyah St, Jeddah 23743',
      ar: 'حي الكوثر، شارع عبدالله ابن أبي أمية، جدة 23743',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/bYaTs4V3Fu6kkD3M9',
    phone: '920034443',
    lat: 21.7482,
    lng: 39.1764,
  },

  // --- RIYADH ---
  {
    id: 'aziziyah-riyadh',
    title: { en: 'AZIZIYAH-RIYADH', ar: 'عزيزية الرياض' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'An Nasr Rd, Al Aziziyah, Riyadh 14514',
      ar: 'طريق النصر، حي العزيزية، الرياض 14514',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/aas5LAcuEcDeU5o66',
    phone: '920034443',
    lat: 24.5826,
    lng: 46.7723,
  },
  {
    id: 'nadeem-riyadh',
    title: { en: 'NADEEM', ar: 'نديم' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Al Nadwa District, Riyadh',
      ar: 'حي الندوة، شرق الرياض',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/f2Y6JTBp6ePLwPUJ6',
    phone: '920034443',
    lat: 24.7892,
    lng: 46.8834,
  },
  {
    id: 'ghubairah-riyadh',
    title: { en: 'GHUBAIRAH', ar: 'الغبيرة' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Al Kharj Rd, Ghubairah, Riyadh 12664',
      ar: 'طريق الخرج، حي غبيراء، الرياض 12664',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/5xvKCRpjhEYANk2X8',
    phone: '920034443',
    lat: 24.6083,
    lng: 46.7352,
  },
  {
    id: 'mugarazath-riyadh',
    title: { en: 'MUGARAZATH', ar: 'المغرزات' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: '7249 Uthman Ibn Affan Rd, Al Mughrizat, Riyadh 12483',
      ar: 'طريق عثمان بن عفان، حي المغرزات، الرياض 12483',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/iUuqHumX1iN4HNZH9',
    phone: '920034443',
    lat: 24.7571,
    lng: 46.7153,
  },
  {
    id: 'malqa-riyadh',
    title: { en: 'MALQA', ar: 'الملقا' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Imam Saud Bin Faisal Sub Rd, Al Malqa, Riyadh 13521',
      ar: 'طريق الإمام سعود بن فيصل، حي الملقا، الرياض 13521',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/yLZr3MWNXyBwkEnp6',
    phone: '920034443',
    lat: 24.8143,
    lng: 46.6023,
  },
  {
    id: 'narjis-riyadh',
    title: { en: 'NARJIS', ar: 'النرجس' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Anas Ibn Malik Rd, An Narjis, Riyadh 13323',
      ar: 'طريق أنس بن مالك، حي النرجس، الرياض 13323',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/XPm84YY2KPnFGrT69',
    phone: '920034443',
    lat: 24.8385,
    lng: 46.6631,
  },
  {
    id: 'al-ared-riyadh',
    title: { en: 'AL ARED', ar: 'العارض' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'King Fahd Rd, Al Aarid, Riyadh 13334',
      ar: 'طريق الملك فهد، حي العارض، الرياض 13334',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/4JzUaS7V3DFNT4Rw5',
    phone: '920034443',
    lat: 24.8872,
    lng: 46.5912,
  },
  {
    id: 'tuwaik-riyadh',
    title: { en: 'TUWAIQ', ar: 'طويق' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Najm Al Din Al Ayoubi St, Tuwaiq, Riyadh 14928',
      ar: 'شارع نجم الدين الأيوبي، حي طويق، الرياض 14928',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/SKtdQjRRoTHPMSdV9',
    phone: '920034443',
    lat: 24.5492,
    lng: 46.5641,
  },
  {
    id: 'muruj-riyadh',
    title: { en: 'MURUJ', ar: 'المروج' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Prince Turki Bin Abdulaziz Althani St, Al Muruj, Riyadh 12283',
      ar: 'شارع الأمير تركي بن عبدالعزيز الثاني، حي المروج، الرياض 12283',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/p26sKXTHqYr7BnPo7',
    phone: '920034443',
    lat: 24.7523,
    lng: 46.6621,
  },
  {
    id: 'munsiyah-riyadh',
    title: { en: 'MUNSIYAH', ar: 'المونسية' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Al Sheikh Hassan Ibn Husain Rd, Al Munsiyah, Riyadh 13246',
      ar: 'طريق الشيخ حسن بن حسين بن علي، حي المونسية، الرياض 13246',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/kKdG7QGnvDhW3zdC8',
    phone: '920034443',
    lat: 24.8194,
    lng: 46.7645,
  },
  {
    id: 'yarmuk-riyadh',
    title: { en: 'YARMUK', ar: 'اليرموك' },
    cityId: 'riyadh',
    cityName: { en: 'Riyadh', ar: 'الرياض' },
    address: {
      en: 'Dammam Branch Rd, Al Yarmuk, Riyadh 13243',
      ar: 'طريق الدمام الفرعي، حي اليرموك، الرياض 13243',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/xCjLCxWy8xFf6MK89',
    phone: '920034443',
    lat: 24.8021,
    lng: 46.7912,
  },

  // --- AL KHOBAR ---
  {
    id: 'aziziyah-khobar',
    title: { en: 'AZIZIYAH KHOBAR', ar: 'عزيزية الخبر' },
    cityId: 'al-khobar',
    cityName: { en: 'Al Khobar', ar: 'الخبر' },
    address: {
      en: 'King Khalid Rd, Al Buhairah, Al Khobar 34722',
      ar: 'طريق الملك خالد، حي البحيرة، الخبر 34722',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/HK7HerY4oyUxZpPo6',
    phone: '920034443',
    lat: 26.1712,
    lng: 50.1983,
  },
  {
    id: 'thuqbah-20-khobar',
    title: { en: 'THUQBAH-20', ar: 'الثقبة - شارع 20' },
    cityId: 'al-khobar',
    cityName: { en: 'Al Khobar', ar: 'الخبر' },
    address: {
      en: '20th St, off King Fahd Rd, Al Khobar 34428',
      ar: 'شارع العشرين، متفرع من طريق الملك فهد، الثقبة، الخبر 34428',
    },
    timing: { en: '10:30 AM - 1:00 AM', ar: '10:30 صباحاً - 1:00 ليلاً' },
    googleMapUrl: 'https://maps.app.goo.gl/LLeKexCA2dLjqghP9',
    phone: '920034443',
    lat: 26.2731,
    lng: 50.1942,
  },
  {
    id: 'akrabia-khobar',
    title: { en: 'AKRABIA', ar: 'العقربية' },
    cityId: 'al-khobar',
    cityName: { en: 'Al Khobar', ar: 'الخبر' },
    address: {
      en: '10th St, Al Aqrabiyah, Al Khobar 34446',
      ar: 'الشارع العاشر، حي العقربية، الخبر 34446',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/TLJTbWdS7QKqpxkE7',
    phone: '920034443',
    lat: 26.3012,
    lng: 50.2145,
  },
  {
    id: 'shamlia-khobar',
    title: { en: 'SHAMLIA', ar: 'الخبر الشمالية' },
    cityId: 'al-khobar',
    cityName: { en: 'Al Khobar', ar: 'الخبر' },
    address: {
      en: 'Prince Nayef St, Al Khobar Al Shamalia, Al Khobar 34428',
      ar: 'شارع الأمير نايف، حي الخبر الشمالية، الخبر 34428',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/dRCbwRssMPQdnvNb6',
    phone: '920034443',
    lat: 26.2914,
    lng: 50.2189,
  },

  // --- DAMMAM ---
  {
    id: 'mazara-dammam',
    title: { en: 'MAZARA', ar: 'المزارع' },
    cityId: 'dammam',
    cityName: { en: 'Dammam', ar: 'الدمام' },
    address: {
      en: '28th Street, Al Mazroeyah, Dammam 32244',
      ar: 'شارع 28، حي المزروعية، الدمام 32244',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/W8Avue77is5VgEmj7',
    phone: '920034443',
    lat: 26.4385,
    lng: 50.1092,
  },
  {
    id: 'madinat-al-ummal-dammam',
    title: { en: 'MADINAT AL UMMAL', ar: 'مدينة العمال' },
    cityId: 'dammam',
    cityName: { en: 'Dammam', ar: 'الدمام' },
    address: {
      en: 'Prince Mohammed Bin Fahd Rd, Madinat Al Umal, Dammam 32253',
      ar: 'طريق الأمير محمد بن فهد، مدينة العمال، الدمام 32253',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/xeYrgojxY7rwmHt16',
    phone: '920034443',
    lat: 26.4192,
    lng: 50.1184,
  },
  {
    id: 'thoyba-dammam',
    title: { en: 'THOYBA', ar: 'طيبة' },
    cityId: 'dammam',
    cityName: { en: 'Dammam', ar: 'الدمام' },
    address: {
      en: 'Abu Bakr Alsiddiq St, An Nada, Dammam 32273',
      ar: 'شارع أبو بكر الصديق، حي الندى، الدمام 32273',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/9hk1UTUN6nKmrsLc8',
    phone: '920034443',
    lat: 26.3912,
    lng: 50.0621,
  },
  {
    id: 'zuhoor-dammam',
    title: { en: 'ZUHOOR', ar: 'الزهور' },
    cityId: 'dammam',
    cityName: { en: 'Dammam', ar: 'الدمام' },
    address: {
      en: '18th Street, Az Zuhur, Dammam 32423',
      ar: 'شارع 18، حي الزهور، الدمام 32423',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/7YW7RuffbnJQLcGU9',
    phone: '920034443',
    lat: 26.4461,
    lng: 50.1235,
  },
  {
    id: 'jubail-branch',
    title: { en: 'JUBAIL', ar: 'الجبيل' },
    cityId: 'dammam',
    cityName: { en: 'Dammam / Jubail', ar: 'الدمام / الجبيل' },
    address: {
      en: 'King Abdul Aziz Rd, Jubail City Center, Al Jubail 35514',
      ar: 'طريق الملك عبدالعزيز، وسط مدينة الجبيل، الجبيل 35514',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/drWBhLiSLkk7CwpM6',
    phone: '920034443',
    lat: 27.0042,
    lng: 49.6612,
  },

  // --- AL-AHSA ---
  {
    id: 'qitar-hofuf',
    title: { en: 'QITAR (HOFUF)', ar: 'القطار (الهفوف)' },
    cityId: 'al-ahsa',
    cityName: { en: 'Al-Ahsa', ar: 'الأحساء' },
    address: {
      en: 'Prince Saud Bin Jalawi Rd, Almuallimin Al Gharbiyyah, Al Hofuf 36421',
      ar: 'طريق الأمير سعود بن جلوي، المعلمين الغربية، الهفوف 36421',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/fFckYtjxMQARuViJ7',
    phone: '920034443',
    lat: 25.3781,
    lng: 49.5714,
  },

  // --- AL KHARJ ---
  {
    id: 'al-kharj-branch',
    title: { en: 'AL KHARJ', ar: 'الخرج' },
    cityId: 'al-kharj',
    cityName: { en: 'Al Kharj', ar: 'الخرج' },
    address: {
      en: 'Thumama Road, Al-Kharj 16278',
      ar: 'طريق ثمامة، الخرج 16278',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/smYmLCQXvgJvUn739',
    phone: '920034443',
    lat: 24.1524,
    lng: 47.3045,
  },

  // --- HAFAR AL BATIN ---
  {
    id: 'muhammadiah-hafar',
    title: { en: 'MUHAMMADIAH', ar: 'المحمدية' },
    cityId: 'hafar-al-batin',
    cityName: { en: 'Hafar Al Batin', ar: 'حفر الباطن' },
    address: {
      en: 'King Abdulaziz Al Saud St, Al Muhammadiah, Hafar Al Batin 39911',
      ar: 'شارع الملك عبدالعزيز آل سعود، حي المحمدية، حفر الباطن 39911',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/Kwg6D1DHd58LH2TKA',
    phone: '920034443',
    lat: 28.4321,
    lng: 45.9614,
  },

  // --- AL QASSIM / BURAIDAH ---
  {
    id: 'basateen-buraidah',
    title: { en: 'BASATEEN-BURAIDAH', ar: 'بساتين بريدة' },
    cityId: 'al-qassim',
    cityName: { en: 'Al Qassim', ar: 'القصيم' },
    address: {
      en: 'Eastern Inner Ring Road, Buraydah 52346',
      ar: 'الدائري الداخلي الشرقي، بريدة 52346',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/QAw6rNr8nmkE845VA',
    phone: '920034443',
    lat: 26.3314,
    lng: 43.9812,
  },
  {
    id: 'safra-buraidah',
    title: { en: 'SAFRA-BURAIDAH', ar: 'الصفراء بريدة' },
    cityId: 'al-qassim',
    cityName: { en: 'Al Qassim', ar: 'القصيم' },
    address: {
      en: 'Uthman Ibn Affan Rd, As Safra, Buraydah 52384',
      ar: 'طريق عثمان بن عفان، حي الصفراء، بريدة 52384',
    },
    timing: { en: '10:30 AM - 12:00 AM', ar: '10:30 صباحاً - 12:00 منتصف الليل' },
    googleMapUrl: 'https://maps.app.goo.gl/Gz4gHhpM7Y2HL155A',
    phone: '920034443',
    lat: 26.3685,
    lng: 43.9632,
  },
];
