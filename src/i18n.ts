export type Lang = 'UZ' | 'RU' | 'EN';

export interface ModuleStrings {
  title: string;
  tag: string;
  desc: string;
  /** Footer'da "284" raqamidan keyin keladigan yorliq */
  statSuffix: string;
}

export interface LangPack {
  eyebrow: string;
  heroLine1: string;
  heroLine2: string;
  heroDesc: string;
  panelTitle: string;
  countSuffix: string;
  brandName: string;
  brandSub: string;
  statusLive: string;
  statusSoon: string;
  statusBeta: string;
  statusPlanned: string;
  avatarTitle: string;
  footerHelp: string;
  footerStatus: string;
  footerCopyright: string;
  footerLocation: string;
  modules: Record<string, ModuleStrings>;
}

export const I18N: Record<Lang, LangPack> = {
  UZ: {
    eyebrow: 'Korporativ Portal · v2.6',
    heroLine1: 'Barcha xizmatlar —',
    heroLine2: 'bitta saroyda.',
    heroDesc:
      "Ta'minot, naryadlar, shartnomalar, kadrlar va to'lovlar tizimi. Kerakli ilovani tanlab, ishni to'g'ridan-to'g'ri davom ettiring.",
    panelTitle: 'Ilovalar paneli',
    countSuffix: 'Faol modullar',
    brandName: 'XON SAROY',
    brandSub: 'Qurilish Korxonasi',
    statusLive: 'Ishlamoqda',
    statusSoon: 'Tez orada',
    statusBeta: 'Beta',
    statusPlanned: 'Tayyorlanmoqda',
    avatarTitle: 'Foydalanuvchi',
    footerHelp: 'Yordam',
    footerStatus: 'Ulanish holati',
    footerCopyright: '© 2026 · XON SAROY MChJ',
    footerLocation: "Toshkent · O'zbekiston",
    modules: {
      taminot: {
        title: "Xon\u00a0Ta'minot",
        tag: '01 · Materiallar',
        desc: "Qurilish materiallarini buyurtma qilish, ombor qoldiqlari va yetkazib beruvchilar.",
        statSuffix: "so'rov",
      },
      naryad: {
        title: 'Xon\u00a0Naryad',
        tag: '02 · Ish Topshiriqlari',
        desc: "Obyektlar bo'yicha naryad-vazifalar, brigadalar va bajarilgan ishlarni hisobga olish.",
        statSuffix: 'obyekt',
      },
      shartnoma: {
        title: 'Xon\u00a0Shartnoma',
        tag: '03 · Huquqiy',
        desc: "Pudrat va ta'minot shartnomalari, elektron imzo hamda muddatlar nazorati.",
        statSuffix: 'faol',
      },
      hr: {
        title: 'Xon\u00a0HR',
        tag: '04 · Kadrlar',
        desc: "Xodimlar bazasi, davomat, ish haqi varaqalari va bo'sh o'rinlar.",
        statSuffix: 'xodim',
      },
      tulov: {
        title: "Xon\u00a0To'lov",
        tag: '05 · Moliya',
        desc: "Kiruvchi-chiquvchi to'lovlar, kontragentlar va bank hisobvarag'i bo'yicha hisobot.",
        statSuffix: 'uptime',
      },
      slot: {
        title: 'Yangi modul',
        tag: '06 · Kelajakda',
        desc: "Korxona uchun qo'shimcha ilovalar shu yerda joylashtiriladi.",
        statSuffix: '',
      },
    },
  },
  RU: {
    eyebrow: 'Корпоративный портал · v2.6',
    heroLine1: 'Все сервисы —',
    heroLine2: 'в одном дворце.',
    heroDesc:
      'Снабжение, наряды, договоры, кадры и платежи. Выберите нужное приложение и продолжите работу.',
    panelTitle: 'Панель приложений',
    countSuffix: 'Активных модулей',
    brandName: 'XON SAROY',
    brandSub: 'Строительная компания',
    statusLive: 'Работает',
    statusSoon: 'Скоро',
    statusBeta: 'Бета',
    statusPlanned: 'В разработке',
    avatarTitle: 'Пользователь',
    footerHelp: 'Помощь',
    footerStatus: 'Статус',
    footerCopyright: '© 2026 · ООО XON SAROY',
    footerLocation: 'Ташкент · Узбекистан',
    modules: {
      taminot: {
        title: 'Xon\u00a0Снабжение',
        tag: '01 · Материалы',
        desc: 'Заказ стройматериалов, остатки на складе и поставщики.',
        statSuffix: 'заявок',
      },
      naryad: {
        title: 'Xon\u00a0Наряды',
        tag: '02 · Наряды',
        desc: 'Наряды по объектам, бригады и учёт выполненных работ.',
        statSuffix: 'объектов',
      },
      shartnoma: {
        title: 'Xon\u00a0Договоры',
        tag: '03 · Юридическое',
        desc: 'Подрядные договоры, электронная подпись и контроль сроков.',
        statSuffix: 'активных',
      },
      hr: {
        title: 'Xon\u00a0HR',
        tag: '04 · Кадры',
        desc: 'База сотрудников, табель, расчётные листы и вакансии.',
        statSuffix: 'сотрудников',
      },
      tulov: {
        title: 'Xon\u00a0Платежи',
        tag: '05 · Финансы',
        desc: 'Входящие/исходящие платежи, контрагенты и банковские выписки.',
        statSuffix: 'uptime',
      },
      slot: {
        title: 'Новый модуль',
        tag: '06 · Скоро',
        desc: 'Здесь появятся дополнительные приложения компании.',
        statSuffix: '',
      },
    },
  },
  EN: {
    eyebrow: 'Corporate Portal · v2.6',
    heroLine1: 'All services —',
    heroLine2: 'in one palace.',
    heroDesc:
      'Supply, work orders, contracts, HR and payments. Pick an app and get straight to work.',
    panelTitle: 'Applications',
    countSuffix: 'Active modules',
    brandName: 'XON SAROY',
    brandSub: 'Construction Company',
    statusLive: 'Operational',
    statusSoon: 'Coming soon',
    statusBeta: 'Beta',
    statusPlanned: 'In Progress',
    avatarTitle: 'User',
    footerHelp: 'Help',
    footerStatus: 'Status',
    footerCopyright: '© 2026 · XON SAROY LLC',
    footerLocation: 'Tashkent · Uzbekistan',
    modules: {
      taminot: {
        title: 'Xon\u00a0Supply',
        tag: '01 · Materials',
        desc: 'Order construction materials, track stock and manage suppliers.',
        statSuffix: 'requests',
      },
      naryad: {
        title: 'Xon\u00a0Orders',
        tag: '02 · Work Orders',
        desc: 'Site-level work orders, crews and completed-work tracking.',
        statSuffix: 'sites',
      },
      shartnoma: {
        title: 'Xon\u00a0Contracts',
        tag: '03 · Legal',
        desc: 'Contractor and supply contracts, e-signature and deadlines.',
        statSuffix: 'active',
      },
      hr: {
        title: 'Xon\u00a0HR',
        tag: '04 · People',
        desc: 'Employee roster, attendance, payslips and vacancies.',
        statSuffix: 'employees',
      },
      tulov: {
        title: 'Xon\u00a0Payments',
        tag: '05 · Finance',
        desc: 'Incoming/outgoing payments, counterparties and bank reporting.',
        statSuffix: 'uptime',
      },
      slot: {
        title: 'New module',
        tag: '06 · Coming Soon',
        desc: 'Additional company apps will be placed here.',
        statSuffix: '',
      },
    },
  },
};

const UZ_MONTHS = [
  'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun',
  'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr',
];
const UZ_DAYS = [
  'yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba',
];
const RU_MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];
const RU_DAYS = [
  'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',
];

export function formatDate(d: Date, lang: Lang): string {
  if (lang === 'EN') {
    return d.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', weekday: 'long',
    });
  }
  if (lang === 'RU') {
    return `${d.getDate()} ${RU_MONTHS[d.getMonth()]}, ${RU_DAYS[d.getDay()]}`;
  }
  return `${d.getDate()} ${UZ_MONTHS[d.getMonth()]}, ${UZ_DAYS[d.getDay()]}`;
}
