export interface DeliveryApp {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  logo: string;
  url: string;
  badgeText: {
    en: string;
    ar: string;
  };
}

export const DELIVERY_APPS: DeliveryApp[] = [
  {
    id: 'toyou',
    name: {
      en: 'ToYou',
      ar: 'تويو',
    },
    logo: 'https://shwaiatalkhalij.com/public/storage/applications/ZprWnx1haPfyDgbd0EA1yAAEllcZ000f1z4jZuNZ.png',
    url: 'https://apps.apple.com/sa/app/toyou-food-grocery-delivery/id1196302015',
    badgeText: {
      en: 'Order on ToYou',
      ar: 'اطلب عبر تويو',
    },
  },
  {
    id: 'mrsool',
    name: {
      en: 'Mrsool',
      ar: 'مرسول',
    },
    logo: 'https://shwaiatalkhalij.com/public/storage/applications/qpfcJ2ce2IpY2PtK83Y6MO4UzEXBjjNB8CG7Lf3R.png',
    url: 'https://apps.apple.com/us/app/mrsool-app-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D9%85%D8%B1%D8%B3%D9%88%D9%84/id1040038773',
    badgeText: {
      en: 'Order on Mrsool',
      ar: 'اطلب عبر مرسول',
    },
  },
  {
    id: 'jahez',
    name: {
      en: 'Jahez',
      ar: 'جاهز',
    },
    logo: 'https://shwaiatalkhalij.com/public/storage/applications/1766856752_client_logo_3.png',
    url: 'https://apps.apple.com/sa/app/jahez/id1137352156',
    badgeText: {
      en: 'Order on Jahez',
      ar: 'اطلب عبر جاهز',
    },
  },
  {
    id: 'ninja',
    name: {
      en: 'Ninja',
      ar: 'نينجا',
    },
    logo: 'https://shwaiatalkhalij.com/public/storage/applications/1766856759_client_logo_4.png',
    url: 'https://apps.apple.com/us/app/ninja-%D9%86%D9%8A%D9%86%D8%AC%D8%A7/id1620153149',
    badgeText: {
      en: 'Order on Ninja',
      ar: 'اطلب عبر نينجا',
    },
  },
  {
    id: 'hungerstation',
    name: {
      en: 'HungerStation',
      ar: 'هنقرستيشن',
    },
    logo: 'https://shwaiatalkhalij.com/public/storage/applications/XDyCfwrV9N34N2ReQEyUwp3RVkNTUaKzJ53QK62o.png',
    url: 'https://apps.apple.com/us/app/hungerstation-food-delivery/id596011949',
    badgeText: {
      en: 'Order on HungerStation',
      ar: 'اطلب عبر هنقرستيشن',
    },
  },
  {
    id: 'keeta',
    name: {
      en: 'Keeta',
      ar: 'كيتا',
    },
    logo: 'https://shwaiatalkhalij.com/public/storage/applications/WqTXmxvXjKix733LwPpLkWXwMRlPuz8uI8jZgzYD.png',
    url: 'https://apps.apple.com/sa/app/keeta-food-delivery/id1662451643',
    badgeText: {
      en: 'Order on Keeta',
      ar: 'اطلب عبر كيتا',
    },
  },
];
