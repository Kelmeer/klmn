export type NavChild = {
  title: string;
  description?: string;
  to: string;
  badge?: string;
};

export type NavGroup = {
  heading: string;
  items: NavChild[];
};

export type NavSection = {
  title: string;
  to?: string;
  groups: NavGroup[];
};

export const NAV: NavSection[] = [
  {
    title: "Об обществе",
    to: "/society",
    groups: [
      {
        heading: "Информация об обществе",
        items: [
          { title: "Общая информация", to: "/society", description: "История, устав, задачи РОИБ" },
          { title: "Президиум РОИБ", to: "/society/presidium" },
          { title: "Комитеты РОИБ", to: "/society/committees" },
          { title: "Региональные отделения", to: "/society/regional" },
          { title: "Секция молодых учёных", to: "/society/young-scientists", badge: "до 35 лет" },
        ],
      },
      {
        heading: "Участие",
        items: [
          { title: "Регистрация в РОИБ", to: "/auth?tab=register", description: "Членство в обществе" },
          { title: "Российский журнал боли", to: "/journal" },
          { title: "Контакты", to: "/contacts" },
        ],
      },
    ],
  },
  {
    title: "Конференции",
    to: "/conferences",
    groups: [
      {
        heading: "Календарь",
        items: [
          { title: "Российские конференции", to: "/conferences" },
          { title: "Международные конференции", to: "/conferences#international" },
          { title: "Архив конференций", to: "/conferences#archive" },
        ],
      },
      {
        heading: "Участие",
        items: [
          { title: "Регистрация на конференцию", to: "/auth?tab=register" },
          { title: "Регистрация на вебинары", to: "/education#webinars" },
          { title: "Условия НМО", to: "/education#nmo" },
        ],
      },
    ],
  },
  {
    title: "Образование",
    to: "/education",
    groups: [
      {
        heading: "Образовательные программы",
        items: [
          { title: "РОИБ ONLINE", to: "/education", description: "Вебинары, школы, дискуссии" },
          { title: "Онлайн-курс «Медицина боли»", to: "/education#course" },
          { title: "Учебные видеоролики", to: "/education#videos" },
          { title: "Учебные аудиозаписи", to: "/education#audio" },
        ],
      },
      {
        heading: "Материалы",
        items: [
          { title: "Клинические рекомендации", to: "/guidelines" },
          { title: "Опросники и шкалы боли", to: "/professionals#scales" },
        ],
      },
    ],
  },
  {
    title: "Специалистам",
    to: "/professionals",
    groups: [
      {
        heading: "Справочные материалы",
        items: [
          { title: "Организация противоболевой помощи", to: "/professionals#organization" },
          { title: "Послеоперационная боль", to: "/professionals#postop" },
          { title: "Фундаментальные аспекты боли", to: "/professionals#basics" },
        ],
      },
      {
        heading: "Синдромы",
        items: [
          { title: "Мигрень", to: "/professionals#migraine" },
          { title: "Головные и лицевые боли", to: "/professionals#headache" },
          { title: "Невропатические боли", to: "/professionals#neuropathic" },
          { title: "Боль в спине", to: "/professionals#back" },
          { title: "Висцеральная боль", to: "/professionals#visceral" },
          { title: "Боль в онкологии", to: "/professionals#oncology" },
          { title: "Боль в гематологии", to: "/professionals#hematology" },
          { title: "Этика боли", to: "/professionals#ethics" },
        ],
      },
      {
        heading: "Профилактика и центры",
        items: [
          { title: "Профилактика боли", to: "/professionals#prevention" },
          {
            title: "Центры и кабинеты боли",
            to: "/professionals#centers",
            description: "Где лечат боль",
          },
          { title: "Полезные источники", to: "/professionals#links" },
        ],
      },
    ],
  },
  {
    title: "Пациенту",
    to: "/patient",
    groups: [
      {
        heading: "Понятным языком",
        items: [
          { title: "В помощь пациенту", to: "/patient" },
          { title: "Что такое боль", to: "/patient#about" },
          { title: "Головная боль", to: "/patient#headache" },
        ],
      },
      {
        heading: "Поддержка",
        items: [
          { title: "Группы самопомощи", to: "/patient#support" },
          { title: "Контакты", to: "/contacts" },
        ],
      },
    ],
  },
];

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  cta?: string;
};

export const FEATURED_NEWS: NewsItem[] = [
  {
    id: "roib-online-2026",
    title: "«РОИБ ONLINE — Медицина боли в вопросах и ответах 2026»",
    date: "31.08.2026",
    excerpt:
      "Всероссийский образовательный проект: вебинары, школы и конференции в формате дискуссии о дифференциальной диагностике и лечении боли.",
    tag: "Образование",
    cta: "РЕГИСТРАЦИЯ",
  },
  {
    id: "young-scientists",
    title: "Секция молодых учёных «Будущее РОИБ»",
    date: "22.01.2026",
    excerpt:
      "Студенты, ординаторы, аспиранты и исследователи до 35 лет, интересующиеся проблемой боли, могут стать активными участниками Общества.",
    tag: "Молодые учёные",
    cta: "РЕГИСТРАЦИЯ",
  },
  {
    id: "back-pain-2026",
    title: "Боль в спине 2026",
    date: "15.10.2026",
    excerpt:
      "II Всероссийский междисциплинарный конгресс с международным участием. Москва, Palmira Art Hotel.",
    tag: "Конференция",
  },
  {
    id: "pain-therapy-2026",
    title: "Медицина боли — от теории к практике 2026",
    date: "05.09.2026",
    excerpt:
      "Очные школы: алгоритмы диагностики и лечения болевых синдромов на основе клинических рекомендаций.",
    tag: "Школа",
    cta: "РЕГИСТРАЦИЯ",
  },
  {
    id: "dialogue",
    title: "Диалог с профессионалом 2026",
    date: "17.11.2026",
    excerpt:
      "Новый проект РОИБ под эгидой Всемирного года по борьбе с болью IASP. Платформа Zoom.",
    tag: "Вебинар",
    cta: "ПРОГРАММА",
  },
  {
    id: "communication",
    title: "Коммуникативное мастерство в медицине боли",
    date: "24.10.2026",
    excerpt:
      "Онлайн-курс Павла Павловича Калинского, д.м.н., профессора, члена президиума РОИБ.",
    tag: "Курс",
    cta: "РЕГИСТРАЦИЯ",
  },
];

export type EventItem = {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  format: "Очно" | "Онлайн" | "Гибрид";
  kind: "Российская" | "Международная" | "Школа" | "Вебинар";
  description: string;
};

export const EVENTS: EventItem[] = [
  {
    id: "back-pain-2026",
    title: "Боль в спине 2026",
    subtitle: "II Всероссийский междисциплинарный конгресс с международным участием",
    date: "3 октября 2026",
    location: "Москва, Palmira Art Hotel",
    format: "Очно",
    kind: "Российская",
    description:
      "Мультидисциплинарный формат: неврология, реабилитация, ортопедия и психиатрия боли обсуждают алгоритмы ведения пациентов с болью в спине.",
  },
  {
    id: "dialogue-2026",
    title: "Диалог с профессионалом",
    subtitle: "Хроническая тазовая боль — практический алгоритм постановки диагноза",
    date: "8 октября 2026",
    location: "Платформа Zoom",
    format: "Онлайн",
    kind: "Международная",
    description:
      "Разбор клинических случаев с экспертами РОИБ: от первичной оценки боли до тактики и купирования хронической тазовой боли.",
  },
  {
    id: "school-6",
    title: "Семинар №6 «Путь в науку: с чего начать?»",
    subtitle: "Секция молодых учёных «Будущее РОИБ»",
    date: "17 октября 2026",
    location: "Онлайн",
    format: "Онлайн",
    kind: "Школа",
    description:
      "Как начать научную работу по проблеме боли: выбор темы, дизайн исследования, публикации и гранты. Докладчик — Мария Кутушева.",
  },
  {
    id: "comm-mastery-9",
    title: "Коммуникативное мастерство в медицине боли",
    subtitle: "Занятие №9. Психосоматические расстройства при хроническом болевом синдроме",
    date: "24 октября 2026",
    location: "Онлайн-курс",
    format: "Онлайн",
    kind: "Вебинар",
    description:
      "Онлайн-курс о том, как разговаривать с пациентом, испытывающим боль, и как выстраивать терапевтический альянс.",
  },
  {
    id: "iasp-2026",
    title: "World Congress on Pain",
    subtitle: "Всемирный конгресс по боли IASP",
    date: "октябрь 2026",
    location: "Амстердам, Нидерланды",
    format: "Гибрид",
    kind: "Международная",
    description:
      "Главное международное событие в области изучения боли: пленарные заседания, постерные сессии, сателлитные симпозиумы РОИБ.",
  },
  {
    id: "school-therapy-2026",
    title: "Медицина боли — от теории к практике",
    subtitle: "Очные школы по клиническим рекомендациям",
    date: "ноябрь 2026",
    location: "Москва и регионы",
    format: "Очно",
    kind: "Российская",
    description:
      "Практические мастер-классы: фантомный болевой синдром, головная боль, боль в шее и спине, комплексный регионарный болевой синдром.",
  },
];

export const ARCHIVE = [
  { year: "2025", title: "Боль в спине 2025", place: "Москва", format: "Очно" },
  { year: "2025", title: "РОИБ ONLINE 2025", place: "Онлайн", format: "Онлайн" },
  { year: "2024", title: "Медицина боли — от теории к практике", place: "Санкт-Петербург", format: "Очно" },
  { year: "2024", title: "Диалог с профессионалом 2024", place: "Zoom", format: "Онлайн" },
  { year: "2023", title: "Боль в спине 2023", place: "Москва", format: "Очно" },
  { year: "2022", title: "Всероссийский конгресс по медицине боли", place: "Москва", format: "Очно" },
];

export type Person = {
  name: string;
  role: string;
  degree?: string;
  city?: string;
  initials: string;
};

export const PRESIDIUM: Person[] = [
  { name: "М. Л. Кукушкин", role: "Президент Общества", degree: "д.м.н., профессор", city: "Москва", initials: "МК" },
  { name: "Г. Р. Табеева", role: "Вице-президент", degree: "д.м.н., профессор", city: "Москва", initials: "ГТ" },
  { name: "Е. В. Подчуфарова", role: "Вице-президент", degree: "д.м.н.", city: "Москва", initials: "ЕП" },
  { name: "П. П. Калинский", role: "Член президиума", degree: "д.м.н., профессор", city: "Владивосток", initials: "ПК" },
  { name: "В. В. Осипова", role: "Член президиума", degree: "д.м.н.", city: "Москва", initials: "ВО" },
  { name: "А. В. Сергеев", role: "Член президиума", degree: "к.м.н.", city: "Москва", initials: "АС" },
  { name: "Н. Н. Яхно", role: "Почётный член президиума", degree: "академик РАМН", city: "Москва", initials: "НЯ" },
  { name: "С. А. Кукевич", role: "Член президиума", degree: "к.м.н.", city: "Санкт-Петербург", initials: "СК" },
];

export const COMMITTEES: NavChild[] = [
  { title: "Комитет по изучению и лечению острой боли", to: "/professionals#postop" },
  { title: "Комитет по хронической боли", to: "/professionals" },
  { title: "Комитет по головным и лицевым болям", to: "/professionals#headache" },
  { title: "Комитет по нейропатической боли", to: "/professionals#neuropathic" },
  { title: "Комитет по боли в спине", to: "/professionals#back" },
  { title: "Комитет по висцеральной боли", to: "/professionals#visceral" },
  { title: "Комитет по боли в онкологии", to: "/professionals#oncology" },
  { title: "Комитет по боли в гематологии", to: "/professionals#hematology" },
  { title: "Комитет по психологическим аспектам боли", to: "/professionals#ethics" },
  { title: "Комитет по фундаментальным аспектам боли", to: "/professionals#basics" },
  { title: "Комитет по профилактике боли", to: "/professionals#prevention" },
  { title: "Комитет по этике боли", to: "/professionals#ethics" },
];

export const REGIONS: { name: string; city: string; head: string; members: string }[] = [
  { name: "Московское региональное отделение", city: "Москва", head: "д.м.н., проф. Е. В. Подчуфарова", members: "1 240" },
  { name: "Северо-Западное отделение", city: "Санкт-Петербург", head: "к.м.н. С. А. Кукевич", members: "860" },
  { name: "Приволжское отделение", city: "Казань", head: "д.м.н. Р. Г. Ахметова", members: "540" },
  { name: "Уральское отделение", city: "Екатеринбург", head: "д.м.н. А. В. Синьков", members: "410" },
  { name: "Сибирское отделение", city: "Новосибирск", head: "д.м.н. И. А. Шапошникова", members: "380" },
  { name: "Дальневосточное отделение", city: "Владивосток", head: "д.м.н. П. П. Калинский", members: "260" },
  { name: "Южное отделение", city: "Ростов-на-Дону", head: "к.м.н. О. В. Коновалова", members: "320" },
  { name: "Северо-Кавказское отделение", city: "Махачкала", head: "к.м.н. М. А. Гаджиев", members: "190" },
];

export const GUIDELINES: { title: string; year: string; meta: string }[] = [
  { title: "Диабетическая дистальная симметричная полиневропатия", year: "2023", meta: "PDF · РОИБ" },
  { title: "Дискогенная пояснично-крестцовая радикулопатия", year: "2023", meta: "PDF · РОИБ" },
  { title: "Скелетно-мышечные (неспецифические) боли в нижней части спины", year: "2023", meta: "PDF · РОИБ" },
  {
    title: "Общие принципы лечения скелетно-мышечной боли: междисциплинарный консенсус",
    year: "2016",
    meta: "PDF · РОИБ",
  },
  {
    title: "Рациональное применение НПВП в клинической практике",
    year: "2015",
    meta: "PDF · Минздрав РФ",
  },
  { title: "Невропатическая боль: диагностика и лечение", year: "2021", meta: "PDF · РОИБ" },
  {
    title: "Неспецифическая боль в нижней части спины: методические рекомендации",
    year: "2014",
    meta: "PDF · Департамент здравоохранения Москвы",
  },
  {
    title: "Болевой синдром: патогенез, клиника, лечение",
    year: "2020",
    meta: "PDF · под ред. акад. Н. Н. Яхно",
  },
  {
    title: "Федеральные клинические рекомендации по предотвращению фантомного болевого синдрома",
    year: "2016",
    meta: "DOC · Минздрав РФ",
  },
  { title: "Мигрень", year: "2021", meta: "PDF · Минздрав РФ" },
  { title: "Головная боль напряжения", year: "2021", meta: "PDF · Минздрав РФ" },
  { title: "Гонартроз", year: "2021", meta: "PDF · Минздрав РФ" },
  { title: "Коксартроз", year: "2021", meta: "PDF · Минздрав РФ" },
  { title: "Хроническая боль у пациентов пожилого возраста", year: "2020", meta: "PDF · Минздрав РФ" },
  {
    title: "Методические рекомендации по диагностике и лечению хронической постампутационной боли",
    year: "2025",
    meta: "PDF · РОИБ",
  },
];

export const SPECIALIST_TOPICS: NavChild[] = [
  { title: "Организация противоболевой помощи", to: "/professionals#organization" },
  { title: "Послеоперационная боль", to: "/professionals#postop" },
  { title: "Фундаментальные аспекты боли", to: "/professionals#basics" },
  { title: "Мигрень", to: "/professionals#migraine" },
  { title: "Головные и лицевые боли", to: "/professionals#headache" },
  { title: "Невропатические боли", to: "/professionals#neuropathic" },
  { title: "Боль в спине", to: "/professionals#back" },
  { title: "Висцеральная боль", to: "/professionals#visceral" },
  { title: "Болевые синдромы в онкологической практике", to: "/professionals#oncology" },
  { title: "Боль в гематологии", to: "/professionals#hematology" },
  { title: "Этика боли", to: "/professionals#ethics" },
  { title: "Профилактика боли", to: "/professionals#prevention" },
];

export const SCALES = [
  { name: "Визуально-аналоговая шкала (ВАШ)", purpose: "Оценка интенсивности боли в баллах 0–10" },
  { name: "Цифровая рейтинговая шкала (ЦРШ)", purpose: "Самостоятельная оценка боли по шкале от 0 до 10" },
  { name: "McGill Pain Questionnaire", purpose: "Описательные характеристики боли: качество, интенсивность" },
  { name: "Шкала латентности боли (TSK)", purpose: "Страх движения и избегание активности" },
  { name: "Индекс депрессии CES-D", purpose: "Скрининг эмоциональных нарушений при хронической боли" },
  { name: "Опросник качества жизни SF-36", purpose: "Влияние боли на качество жизни пациента" },
];

export const PATIENT_TOPICS: NavChild[] = [
  { title: "Что такое головная боль напряжения?", to: "/patient#tension" },
  { title: "Что такое мигрень?", to: "/patient#migraine" },
  { title: "Что такое хроническая ежедневная головная боль?", to: "/patient#chronic-daily" },
  { title: "Что такое абузусная головная боль?", to: "/patient#abuse" },
  { title: "Что такое кластерная головная боль?", to: "/patient#cluster" },
  { title: "Диета при мигрени", to: "/patient#diet" },
  { title: "Сорок пять актуальных вопросов о мигрени", to: "/patient#migraine" },
];

export const EDUCATION_PROGRAMS = [
  {
    id: "roib-online",
    title: "РОИБ ONLINE",
    tag: "Вебинары",
    text: "Всероссийский образовательный проект: вебинары, школы и конференции в формате экспертной дискуссии.",
    meta: "Ежемесячно · онлайн",
  },
  {
    id: "course",
    title: "Онлайн-курс «Медицина боли»",
    tag: "Курс",
    text: "Системная программа по диагностике, классификации и лечению болевых синдромов.",
    meta: "12 модулей · с доступом",
  },
  {
    id: "videos",
    title: "Учебные видеоролики",
    tag: "Видео",
    text: "Короткие клинические разборы: анамнез, осмотр, тактика, ошибки терапии.",
    meta: "120+ роликов",
  },
  {
    id: "audio",
    title: "Учебные аудиозаписи",
    tag: "Аудио",
    text: "Лекции и подкасты для прослушивания по дороге, в клинике и на фоне практики.",
    meta: "45 записей",
  },
  {
    id: "communication",
    title: "Коммуникативное мастерство",
    tag: "Курс",
    text: "Курс Павла Павловича Калинского о работе с пациентом, испытывающим боль.",
    meta: "18 занятий",
  },
  {
    id: "nmo",
    title: "Аккредитация НМО",
    tag: "НМО",
    text: "Условия начисления баллов НМО для врачей, участие в программах Общества.",
    meta: "Залы на 500 мест",
  },
];

export const PARTNERS = [
  { name: "iasp-pain.org", label: "IASP" },
  { name: "europeanpainfederation.eu", label: "EFIC" },
  { name: "interpain.ru", label: "Interpain" },
  { name: "medurconsult.ru", label: "МедУР" },
  { name: "medznat.ru", label: "МедЗнание" },
  { name: "neurology-club.ru", label: "Neurology Club" },
];

export const CONTACTS = {
  address: "119334, г. Москва, Ленинский проспект, д. 40, помещение 3/1",
  emails: ["roibmail@gmail.com", "rusbolinet@yandex.ru"],
  socials: [
    { name: "ВКонтакте", handle: "vk.com/painrussia" },
    { name: "Telegram", handle: "t.me/painrussia" },
  ],
  site: "www.painrussia.ru",
  members: "10 000+",
  founded: 1991,
};

export const STATS = [
  { value: "35", label: "лет научной работы" },
  { value: "10 000+", label: "членов Общества" },
  { value: "8", label: "региональных отделений" },
  { value: "4", label: "журнала в год" },
];
