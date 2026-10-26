export type MenuCategory = 'meals' | 'side-dishes' | 'salads' | 'drinks' | 'desserts';

export interface MenuItem {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: number;
  kcal: number;
  category: MenuCategory;
  image: string;
  fallbackImage: string;
  orderUrl: string;
  popular?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  // --- MEALS ---
  {
    id: 'one-full-faham-rice',
    name: {
      en: 'One Full Faham with Rice',
      ar: 'حبة فحم مع الأرز',
    },
    description: {
      en: 'Marinated whole chicken slow-grilled over natural glowing charcoal embers, served over fragrant Saudi spiced rice.',
      ar: 'دجاجة كاملة متبلة ببهارات الخليج الخاصة ومشوية على جمر الفحم الطبيعي، تقدم مع أرز شواية الخليج الفاخر.',
    },
    price: 38,
    kcal: 6014,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b6e8943870.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'one-shawaya-rice',
    name: {
      en: 'One Shawaya with Rice',
      ar: 'حبة شواية مع الأرز',
    },
    description: {
      en: 'Golden rotisserie roasted chicken cooked to crisp perfection, accompanied by seasoned traditional Gulf rice.',
      ar: 'دجاجة كاملة محمرة على الشواية باللون الذهبي المقرمش والنكهة الأصيلة، تقدم مع الأرز التقليدي الشهي.',
    },
    price: 36,
    kcal: 3368,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b6f44c4314.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'one-shawaya-no-rice',
    name: {
      en: 'One Shawaya without Rice',
      ar: 'حبة شواية سادة بدون أرز',
    },
    description: {
      en: 'Tender, juicy rotisserie roasted whole chicken infused with secret heritage Gulf spices.',
      ar: 'دجاجة شواية كاملة مشوية بتتبيلتنا السرية الغنية بالنكهات السعودية الأصيلة.',
    },
    price: 24,
    kcal: 982,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b6fdf950e1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'half-shawaya-no-rice',
    name: {
      en: 'Half Shawaya without Rice',
      ar: 'نصف شواية بدون أرز',
    },
    description: {
      en: 'Half succulent roasted chicken, golden crisp skin with soft savory meat.',
      ar: 'نصف دجاجة شواية محمرة بتتبيلة لذيذة ومقرمشة بدون أرز.',
    },
    price: 12,
    kcal: 737,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b7050c4398.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'half-shawaya-rice',
    name: {
      en: 'Half Shawaya with Rice',
      ar: 'نصف شواية مع الأرز',
    },
    description: {
      en: 'Half golden rotisserie chicken alongside a generous portion of aromatic Saudi spiced rice.',
      ar: 'نصف دجاجة شواية ذهبية شهية تقدم مع طبق من أرز شواية الخليج الفاخر.',
    },
    price: 18,
    kcal: 1684,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b7102daf35.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'half-faham-rice',
    name: {
      en: 'Half Faham with Rice',
      ar: 'نصف فحم مع الأرز',
    },
    description: {
      en: 'Half charcoal-grilled chicken with rich smoky flavor, served over our signature long-grain rice.',
      ar: 'نصف دجاجة مشوية على الفحم بنكهة الشواء المدخنة، تقدم مع الأرز المميز.',
    },
    price: 19,
    kcal: 3007,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b7166a7a64.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'one-faham-no-rice',
    name: {
      en: 'One Faham without Rice',
      ar: 'حبة فحم سادة بدون أرز',
    },
    description: {
      en: 'Whole fresh chicken seasoned with aromatic spices and char-grilled over live wood coals.',
      ar: 'دجاجة كاملة مشوية على الفحم الطبيعي بتتبيلة غنية ونكهة شواء حقيقية.',
    },
    price: 26,
    kcal: 3628,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b71b0028e5.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'rice-plate',
    name: {
      en: 'Fragrant Rice Plate',
      ar: 'صحن أرز فاخر',
    },
    description: {
      en: 'Signature steamed Basmati rice prepared with traditional Saudi cardamom, cloves, and saffron essence.',
      ar: 'صحن أرز شواية الخليج المحضر على الطريقة السعودية الأصلية بالهيل والزعفران.',
    },
    price: 6,
    kcal: 1193,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b71f99ecbc.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'quarter-shawaya-rice',
    name: {
      en: 'Quarter Shawaya with Rice',
      ar: 'ربع شواية مع الأرز',
    },
    description: {
      en: 'Quarter tender rotisserie chicken served with our authentic spiced rice.',
      ar: 'ربع دجاجة شواية شهية تقدم مع طبق من الأرز الفاخر.',
    },
    price: 12,
    kcal: 1438,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b725761c2d.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'half-faham-no-rice',
    name: {
      en: 'Half Faham without Rice',
      ar: 'نصف فحم بدون أرز',
    },
    description: {
      en: 'Half chicken marinated in Gulf herbs and grilled over smoky open charcoal.',
      ar: 'نصف دجاجة مشوية على الفحم مباشرة بتتبيلة بهارات مشوية مدخنة.',
    },
    price: 13,
    kcal: 1814,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b7324870d4.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'quarter-shawaya-no-rice',
    name: {
      en: 'Quarter Shawaya without Rice',
      ar: 'ربع شواية بدون أرز',
    },
    description: {
      en: 'Light portion of rotisserie grilled chicken with classic crispy seasoned skin.',
      ar: 'ربع دجاجة شواية مقرمشة خفيفة ومشبعة.',
    },
    price: 6,
    kcal: 245,
    category: 'meals',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b7396379ed.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },

  // --- SIDE DISHES (STEWS) ---
  {
    id: 'mousakka',
    name: {
      en: 'Traditional Mousakka',
      ar: 'مسقعة باذنجان',
    },
    description: {
      en: 'Slow-simmered eggplant, bell peppers, potatoes and ripe tomato sauce baked to perfection.',
      ar: 'إيدام مسقعة الباذنجان والبطاطس المحضرة على نار هادئة مع صلصة الطماطم الغنية.',
    },
    price: 6,
    kcal: 928,
    category: 'side-dishes',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695b741c3292e.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'molokhia',
    name: {
      en: 'Egyptian Style Molokhia',
      ar: 'ملوخية خضراء',
    },
    description: {
      en: 'Fresh minced green jute leaves cooked in a rich seasoned broth with a touch of fried garlic coriander taqleya.',
      ar: 'ملوخية خضراء طازجة مطبوخة بالمرق اللذيذ مع طشة الثوم والكزبرة.',
    },
    price: 6,
    kcal: 64,
    category: 'side-dishes',
    image: 'https://shwaiatalkhalij.com/public/assets/img/69550104b1645.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'mix-stew',
    name: {
      en: 'Mixed Vegetable Stew',
      ar: 'مشكل خضار',
    },
    description: {
      en: 'Hearty medley of fresh seasonal vegetables slow-cooked in a spiced Gulf tomato gravy.',
      ar: 'إيدام مشكل خضار طازجة مطهوة بمرقة الطماطم والبهارات الخليجية المميزة.',
    },
    price: 6,
    kcal: 130,
    category: 'side-dishes',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695500f52083b.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'okra-stew',
    name: {
      en: 'Okra Stew (Bamya)',
      ar: 'إيدام بامية',
    },
    description: {
      en: 'Tender baby okra simmered in a warm garlic, onion and crushed tomato reduction.',
      ar: 'بامية طازجة مطبوخة في صلصة الطماطم والثوم بالبهارات السعودية الدافئة.',
    },
    price: 6,
    kcal: 218,
    category: 'side-dishes',
    image: 'https://shwaiatalkhalij.com/public/assets/img/6955016aa7268.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },

  // --- SALADS AND DIPS ---
  {
    id: 'yogurt-salad',
    name: {
      en: 'Yogurt & Cucumber Salad',
      ar: 'سلطة خيار بالزبادي',
    },
    description: {
      en: 'Cooling probiotic yogurt mixed with finely diced cucumbers, mint and light garlic.',
      ar: 'زبادي منعش مع قطع الخيار المقرمش ورشة نعناع بلدي.',
    },
    price: 4,
    kcal: 50,
    category: 'salads',
    image: 'https://shwaiatalkhalij.com/public/assets/img/69550088943dd.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'green-salad',
    name: {
      en: 'Fresh Green Salad',
      ar: 'سلطة خضراء طازجة',
    },
    description: {
      en: 'Crisp lettuce, cucumbers, ripe tomatoes, herbs and lemon-olive oil dressing.',
      ar: 'تشكيلة خضار طازجة من الخس والخيار والطماطم مع تتبيلة الليمون وزيت الزيتون.',
    },
    price: 2,
    kcal: 22,
    category: 'salads',
    image: 'https://shwaiatalkhalij.com/public/assets/img/69550071b4b2f.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'shata-chili',
    name: {
      en: 'Signature Shata (Hot Chili)',
      ar: 'شطة حارة خاصة',
    },
    description: {
      en: 'Spicy ground chili dip made in-house with red peppers and vinegar.',
      ar: 'شطة شواية الخليج الحارة المحضرة يومياً لمحبي النكهات الحارة.',
    },
    price: 1,
    kcal: 1,
    category: 'salads',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175541_Shata.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'toom-garlic',
    name: {
      en: 'Toom (Garlic Sauce)',
      ar: 'صلصة الثوم الفاخرة (ثومية)',
    },
    description: {
      en: 'Velvety, whipped artisanal garlic cream sauce, ideal with charcoal chicken.',
      ar: 'صلصة ثوم ناصعة البياض وكريمية القوام تكمل لذة الدجاج المشوي.',
    },
    price: 1,
    kcal: 73,
    category: 'salads',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695500cf97131.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'tahina',
    name: {
      en: 'Sesame Tahina Dip',
      ar: 'طحينة سمسم فاخرة',
    },
    description: {
      en: 'Smooth toasted sesame tahini blended with lemon and spices.',
      ar: 'طحينة سمسم أصلية غنية ومتبلة بعصير الليمون والكمون.',
    },
    price: 1,
    kcal: 273,
    category: 'salads',
    image: 'https://shwaiatalkhalij.com/public/assets/img/695500b1067a8.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'spicy-salad',
    name: {
      en: 'Spicy Tomato Dakous Salad',
      ar: 'سلطة حارة (دقوس طماطم)',
    },
    description: {
      en: 'Finely grated tomato relish with green chilies, cilantro and lemon.',
      ar: 'دقوس طماطم حار ومهروس مع الفلفل الأخضر والكزبرة الطازجة.',
    },
    price: 1,
    kcal: 50,
    category: 'salads',
    image: 'https://shwaiatalkhalij.com/public/assets/img/6955009b31745.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },

  // --- DRINKS ---
  {
    id: 'water-600ml',
    name: {
      en: 'Pure Mineral Water 600ML',
      ar: 'مياه معدنية نقية 600 مل',
    },
    description: {
      en: 'Chilled pure bottled mineral drinking water.',
      ar: 'مياه شرب معبأة نقية ومنعشة.',
    },
    price: 1,
    kcal: 0,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'pepsi-large',
    name: {
      en: 'Pepsi Large Bottle',
      ar: 'بيبسي عائلي كبير',
    },
    description: {
      en: 'Refreshing ice-cold Pepsi bottle for sharing.',
      ar: 'مشروب بيبسي غازي منعش حجم كبير للعائلة.',
    },
    price: 9,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175598_Pepsi Big.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'pepsi-small',
    name: {
      en: 'Pepsi Can (Small)',
      ar: 'بيبسي علبة صغير',
    },
    description: {
      en: 'Classic chilled carbonated Pepsi cola can.',
      ar: 'علبة بيبسي مثلجة ومنعشة.',
    },
    price: 3,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175629_Pepsi sml.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'pepsi-diet-small',
    name: {
      en: 'Pepsi Diet Can (Small)',
      ar: 'بيبسي دايت علبة صغير',
    },
    description: {
      en: 'Zero sugar crisp Diet Pepsi refreshment.',
      ar: 'بيبسي دايت خالي من السكر بنكهة رائعة.',
    },
    price: 3,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175758_Pesi Diet.png',
    fallbackImage: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: '7up-large',
    name: {
      en: '7UP Large Bottle',
      ar: 'سفن أب كبير عائلي',
    },
    description: {
      en: 'Lemon-lime crisp refreshment bottle.',
      ar: 'مشروب سفن أب الغازي بنكهة الليمون المنعشة حجم عائلي.',
    },
    price: 9,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175654_7up Big.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: '7up-small',
    name: {
      en: '7UP Can (Small)',
      ar: 'سفن أب علبة صغير',
    },
    description: {
      en: 'Sparkling lemon-lime refreshment can.',
      ar: 'علبة سفن أب بنكهة الليمون المنعشة.',
    },
    price: 3,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175682_7up sml.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: '7up-diet-small',
    name: {
      en: '7UP Diet Can (Small)',
      ar: 'سفن أب دايت علبة صغير',
    },
    description: {
      en: 'Zero sugar crisp lemon-lime beverage.',
      ar: 'سفن أب دايت بدون سكر لانتعاش خفيف.',
    },
    price: 3,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175784_7up Diet smal.png',
    fallbackImage: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'citrus-large',
    name: {
      en: 'Citrus Mirinda Large',
      ar: 'حمضيات كبير عائلي',
    },
    description: {
      en: 'Zesty citrus sparkling soda in large family size.',
      ar: 'مشروب حمضيات منعش بالحجم العائلي الكبير.',
    },
    price: 9,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175708_Citrus Big.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'citrus-small',
    name: {
      en: 'Citrus Mirinda Small',
      ar: 'حمضيات علبة صغير',
    },
    description: {
      en: 'Tangy, fizzy citrus punch can.',
      ar: 'علبة حمضيات منعشة ولذيذة.',
    },
    price: 3,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767175731_citrus Sml.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'mirinda-small',
    name: {
      en: 'Mirinda Orange Small',
      ar: 'ميريندا برتقال صغير',
    },
    description: {
      en: 'Bursting orange flavor carbonated soft drink.',
      ar: 'مشروب ميريندا برتقال فوار بنكهة الفاكهة.',
    },
    price: 3,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767176288_Miranda Sml.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'mountain-dew-small',
    name: {
      en: 'Mountain Dew Small',
      ar: 'ماونتن ديو علبة صغير',
    },
    description: {
      en: 'Bold, high-energy citrus soda can.',
      ar: 'ماونتن ديو الأصلي بالانتعاش القوي.',
    },
    price: 3,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767176256_Due Smal.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'laban-200ml',
    name: {
      en: 'Fresh Laban 200ML',
      ar: 'لبن طازج 200 مل',
    },
    description: {
      en: 'Traditional chilled buttermilk, the perfect companion for rice and grilled chicken.',
      ar: 'لبن طبيعي طازج وبارد، الرفيق الأفضل لوجبات الأرز والشواية.',
    },
    price: 2,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767178097_Laban small.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'laban-800ml',
    name: {
      en: 'Fresh Laban 800ML',
      ar: 'لبن طازج 800 مل',
    },
    description: {
      en: 'Medium bottle of wholesome creamy fermented buttermilk.',
      ar: 'لبن طازج بحجم متوسط مثالي للوجبات المشتركة.',
    },
    price: 5,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767178048_Laban Medium.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },
  {
    id: 'laban-175l',
    name: {
      en: 'Fresh Laban 1.75L',
      ar: 'لبن طازج عائلي 1.75 لتر',
    },
    description: {
      en: 'Large family jug of cooling farm-fresh Laban.',
      ar: 'جالون لبن طازج كبير للعائلة والأصدقاء.',
    },
    price: 9,
    kcal: 0,
    category: 'drinks',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767178015_Laban Big.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
  },

  // --- DESSERTS ---
  {
    id: 'sweet-dessert',
    name: {
      en: 'Shwaiat Al-Khalij Sweet Pudding',
      ar: 'حلى شواية الخليج الخاص',
    },
    description: {
      en: 'Rich, creamy traditional Gulf dessert pudding topped with pistachio and caramel drizzle.',
      ar: 'حلى كريمي فاخر ومميز يختم وجبتك بأشهى مذاق.',
    },
    price: 6,
    kcal: 0,
    category: 'desserts',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767178181_Sweet.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
  {
    id: 'basbousa',
    name: {
      en: 'Royal Golden Basbousa',
      ar: 'بسبوسة ذهبية فاخرة',
    },
    description: {
      en: 'Warm semolina cake soaked in floral honey syrup with toasted almond crunch.',
      ar: 'بسبوسة طرية ومشربة بالقطر الخفيف ومزينة بالمكسرات المحمصة.',
    },
    price: 4,
    kcal: 0,
    category: 'desserts',
    image: 'https://shwaiatalkhalij.com/public/assets/img/1767178214_Basboosa.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    orderUrl: 'https://www.shwaiatalkhalij.sa/',
    popular: true,
  },
];
