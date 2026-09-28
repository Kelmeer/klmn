import { PageHero } from "@/components/ui/PageHero";
import { Reveal, SectionHeading, Tag } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { SCALES, SPECIALIST_TOPICS } from "@/data/site";
import { ArrowRight, Download, ExternalLink, FileText } from "lucide-react";

const TOPIC_DESCRIPTIONS: Record<string, { title: string; text: string; items: string[] }> = {
  organization: {
    title: "Организация противоболевой помощи",
    text: "Принципы построения службы помощи пациентам с болью: уровни оказания помощи, маршрутизация, взаимодействие стационара и поликлиники.",
    items: [
      "Три уровня противоболевой помощи",
      "Организация кабинета и центра боли",
      "Маршрутизация пациента и преемственность",
      "Документирование и оценка эффективности",
    ],
  },
  postop: {
    title: "Послеоперационная боль",
    text: "Мультимодальная анальгезия, таргетные подходы к тканевой ноцицепции, профилактика хронической постоперационной боли.",
    items: [
      "Оценка боли перед, во время и после операции",
      "Мультимодальная анальгезия",
      "Нейроaxialные методики",
      "Профилактика хронической боли",
    ],
  },
  basics: {
    title: "Фундаментальные аспекты боли",
    text: "Ноцицепция, патофизиология болевых синдромов, классификация МКБ-11 и роль центральной сенситизации.",
    items: [
      "Классификация МКБ-11",
      "Периферические и центральные механизмы",
      "Феномен центральной сенситизации",
      "Психосоциальные факторы",
    ],
  },
  migraine: {
    title: "Мигрень",
    text: "Диагностика, профилактика и лечение мигрени, немедикаментозные методы и новые подходы к терапии.",
    items: [
      "Диагностические критерии",
      "Оценка тяжести и дневника боли",
      "Профилактика сосудистых и невазомоторных форм",
      "Триптаны, CGRP-таргетная терапия",
    ],
  },
  headache: {
    title: "Головные и лицевые боли",
    text: "Спектр первичных и вторичных головных болей, дифференциальная диагностика и тактика лечения.",
    items: [
      "Международная классификация головных болей",
      "Головная боль напряжения",
      "Кластерная головная боль",
      "Вторичные головные боли",
    ],
  },
  neuropathic: {
    title: "Невропатические боли",
    text: "Диагностические критерии, феноменалогический осмотр и терапия нейропатической боли.",
    items: [
      "Нейропатический болевой синдром",
      "Феноменалогия: аллодиния, гипералгезия",
      "Антидепрессанты и антиконвульсанты",
      "Нейростимуляция",
    ],
  },
  back: {
    title: "Боль в спине",
    text: "Неспецифическая боль в пояснице, дифференциальная диагностика, консервативная терапия и тактика ведения пациента.",
    items: [
      "Красные флаги",
      "Междисциплинарный подход",
      "НПВС и миорелаксанты",
      "Лечебная физкультура и реабилитация",
    ],
  },
  visceral: {
    title: "Висцеральная боль",
    text: "Механизмы висцеральной боли, клиника и современные подходы к диагностике и лечению.",
    items: [
      "Особенности висцеральной ноцицепции",
      "Синдром раздражённого кишечника",
      "Тазовые и абдоминальные синдромы",
      "Нейромодуляция",
    ],
  },
  oncology: {
    title: "Болевые синдромы в онкологической практике",
    text: "Оценка и лечение боли у онкологических пациентов, паллиативная помощь, вопросы опиоидной терапии.",
    items: [
      "Оценка боли и её интенсивности",
      "Ступенчатая схема терапии",
      "Нейропатический компонент",
      "Паллиативная помощь",
    ],
  },
  hematology: {
    title: "Боль в гематологии",
    text: "Болевые синдромы у пациентов с заболеваниями крови, в том числе связанные с терапией и трансфузиями.",
    items: [
      "Боль при лейкозах и лимфомах",
      "Постциклофосфамидовая нейропатия",
      "Гематологические кризы",
      "Паллиативная терапия",
    ],
  },
  ethics: {
    title: "Этика боли",
    text: "Правовые и этические аспекты обезболивания, информированное согласие, коммуникация с пациентом и его семьёй.",
    items: [
      "Право пациента на обезболивание",
      "Этика назначения опиоидов",
      "Работа с ожиданиями пациента",
      "Приказы и стандарты Минздрава РФ",
    ],
  },
  prevention: {
    title: "Профилактика боли",
    text: "Превентивный подход: предотвращение хронизации боли, реабилитация, работа с факторами риска.",
    items: [
      "Факторы хронизации боли",
      "Превентивная анальгезия",
      "Реабилитация и физическая активность",
      "Обучение пациента самопомощи",
    ],
  },
  centers: {
    title: "Центры, клиники и кабинеты по лечению боли",
    text: "Реестр профильных учреждений по России. Помощь в выборе специализированной клиники рядом с вами.",
    items: [
      "Москва — НМИЦ нервных болезней им. А. Я. Кожевникова",
      "Санкт-Петербург — городской клинический центр",
      "Региональные центры в отделениях РОИБ",
      "Частные клиники с лицензией",
    ],
  },
  links: {
    title: "Ссылки на полезные источники информации",
    text: "Официальные ресурсы профильных организаций и открытые базы знаний.",
    items: [
      "iasp-pain.org — Международная ассоциация по изучению боли",
      "europeanpainfederation.eu — Европейская федерация боли",
      "painresearch.ru — Российский журнал боли",
      "consultant.ru — клинические рекомендации Минздрава РФ",
    ],
  },
  scales: {
    title: "Опросники и шкалы для оценки боли",
    text: "Инструменты, рекомендуемые для оценки интенсивности и влияния боли на качество жизни пациента.",
    items: SCALES.map((s) => `${s.name} — ${s.purpose}`),
  },
};

const EXTRA_TOPICS = [
  { title: "Центры, клиники и кабинеты по лечению боли", to: "/professionals#centers" },
  { title: "Ссылки на полезные источники информации", to: "/professionals#links" },
  { title: "Опросники и шкалы для оценки боли", to: "/professionals#scales" },
];

const ALL_TOPICS = [...SPECIALIST_TOPICS, ...EXTRA_TOPICS];

export function Professionals() {
  return (
    <>
      <PageHero
        eyebrow="Специалистам"
        title="Материалы по клиническим темам"
        description="Справочные материалы и руководства рабочих групп РОИБ по основным болевым синдромам."
        breadcrumb={[{ label: "Специалистам" }]}
      />

      <section className="container-page py-14">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {ALL_TOPICS.map((topic) => {
              const id = topic.to.split("#")[1];
              return (
                <a
                  key={topic.title}
                  href={`#${id}`}
                  className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-[13px] font-semibold text-ink-700 transition-colors hover:border-coral-500/30 hover:bg-coral-50 hover:text-coral-700"
                >
                  {topic.title}
                </a>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 space-y-5">
          {ALL_TOPICS.map((topic, i) => {
            const id = topic.to.split("#")[1];
            const data = TOPIC_DESCRIPTIONS[id];
            if (!data) return null;
            return (
              <Reveal key={topic.title} delay={i * 0.02}>
                <article
                  id={id}
                  className="grid scroll-mt-28 gap-6 rounded-3xl border border-ink-900/[0.07] bg-white p-6 sm:p-8 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5">
                    <Tag>Рабочая группа</Tag>
                    <h2 className="display-title mt-3 text-xl leading-snug text-ink-900 sm:text-2xl">
                      {data.title}
                    </h2>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700/80">
                      {data.text}
                    </p>
                    <ButtonLink to="/guidelines" variant="outline" className="mt-5">
                      <Download className="h-4 w-4" />
                      Клинические рекомендации
                    </ButtonLink>
                  </div>
                  <ul className="grid gap-2.5 lg:col-span-7">
                    {data.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-sand-50 px-4 py-3 text-[14px] text-ink-700/85"
                      >
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

export function UsefulLinks() {
  return (
    <section className="container-page pb-16">
      <Reveal>
        <SectionHeading
          eyebrow="Ресурсы"
          title="Полезные источники информации"
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { label: "iasp-pain.org", desc: "International Association for the Study of Pain" },
            { label: "europeanpainfederation.eu", desc: "European Federation of IASP Chapters" },
            { label: "interpain.ru", desc: "Ресурс о боли и обезболивании" },
            { label: "consultant.ru", desc: "Клинические рекомендации Минздрава РФ" },
          ].map((item) => (
            <a
              key={item.label}
              href={`https://${item.label}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-900/[0.07] bg-white px-5 py-4 transition-colors hover:border-coral-500/30"
            >
              <span>
                <span className="block text-[14.5px] font-semibold text-ink-900">
                  {item.label}
                </span>
                <span className="block text-[12.5px] text-ink-500">{item.desc}</span>
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-coral-500" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function ToSpecialist() {
  return (
    <section className="border-t border-ink-900/[0.07] bg-white py-16">
      <div className="container-page flex flex-wrap items-center justify-between gap-6">
        <SectionHeading
          title="Нужны материалы по другой теме?"
          description="Напишите в редакцию — мы поможем найти документ или привлечём эксперта рабочей группы."
        />
        <ButtonLink to="/contacts" variant="accent">
          Связаться с редакцией
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </section>
  );
}
