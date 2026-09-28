import { Link } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, SectionHeading, Tag } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { FEATURED_NEWS } from "@/data/site";
import { ArrowRight, FileText, Search } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/data/site";

export function News() {
  return (
    <>
      <PageHero
        eyebrow="Новости"
        title="Все новости Общества"
        description="Анонсы мероприятий, образовательные проекты и методические рекомендации рабочих групп."
        breadcrumb={[{ label: "Новости" }]}
      />
      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_NEWS.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <article className="group flex h-full flex-col rounded-3xl border border-ink-900/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <Tag className="border-coral-500/20 bg-coral-500/10 text-coral-700">
                    {item.tag}
                  </Tag>
                  <span className="text-[11.5px] font-semibold text-ink-500">
                    {item.date}
                  </span>
                </div>
                <h2 className="mt-4 text-[17px] font-bold leading-snug text-ink-900">
                  {item.title}
                </h2>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-700/75">
                  {item.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-900/[0.07] pt-4">
                  <span className="link-underline text-[13px]">Подробнее</span>
                  {item.cta && (
                    <span className="rounded-full bg-ink-900 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-sand-50">
                      {item.cta}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

const ISSUES = [
  { volume: "Том 24, №3", date: "2026", theme: "Хроническая тазовая боль" },
  { volume: "Том 24, №2", date: "2026", theme: "Нейропатическая боль: подходы к терапии" },
  { volume: "Том 24, №1", date: "2026", theme: "Мигрень: диагностика и профилактика" },
  { volume: "Том 23, №4", date: "2025", theme: "Боль в спине: междисциплинарный подход" },
  { volume: "Том 23, №3", date: "2025", theme: "Послеоперационная боль" },
];

export function Journal() {
  return (
    <>
      <PageHero
        eyebrow="Издание Общества"
        title="Российский журнал боли"
        description="Научно-практический междисциплинарный журнал по проблемам боли выходит 4 раза в год с 2003 года. Электронная версия — бесплатно для членов РОИБ."
        breadcrumb={[{ label: "Журнал" }]}
      />
      <section className="container-page py-14">
        <Reveal>
          <div className="rounded-3xl bg-ink-900 p-8 text-sand-50 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-coral-400">
              Текущий выпуск
            </p>
            <h2 className="display-title mt-3 text-3xl">Том 24, №3 — 2026</h2>
            <p className="mt-3 max-w-xl text-[15px] text-ink-200/80">
              Специальный выпуск: хроническая тазовая боль — практический алгоритм
              постановки диагноза и тактика ведения пациента.
            </p>
            <ButtonLink to="/auth?tab=login" variant="accent" className="mt-7">
              Получить PDF
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-8 space-y-3">
          {ISSUES.map((issue, i) => (
            <Reveal key={issue.volume} delay={i * 0.04}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink-900/[0.07] bg-white p-5">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900/[0.05] text-ink-600">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-ink-900">{issue.volume}</p>
                    <p className="text-[13px] text-ink-600">{issue.theme}</p>
                  </div>
                </div>
                <Tag>{issue.date}</Tag>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function Sitemap() {
  return (
    <>
      <PageHero
        eyebrow="Навигация"
        title="Карта сайта"
        description="Все разделы сайта РОИБ."
        breadcrumb={[{ label: "Карта сайта" }]}
      />
      <section className="container-page grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {NAV.map((section, i) => (
          <Reveal key={section.title} delay={i * 0.05}>
            <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6">
              <Link
                to={section.to ?? "/"}
                className="display-title text-lg text-ink-900 hover:text-coral-600"
              >
                {section.title}
              </Link>
              <ul className="mt-4 space-y-2">
                {section.groups
                  .flatMap((g) => g.items)
                  .map((item) => (
                    <li key={item.title + item.to}>
                      <Link
                        to={item.to}
                        className="group flex items-center justify-between text-[14px] text-ink-700 transition-colors hover:text-coral-600"
                      >
                        {item.title}
                        <ArrowRight className="h-3.5 w-3.5 text-ink-300 transition-all group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}

export function SearchPage() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = NAV.flatMap((s) =>
    s.groups.flatMap((g) => g.items),
  ).filter((item) => item.title.toLowerCase().includes(q));

  return (
    <>
      <PageHero
        eyebrow="Поиск"
        title="Поиск по сайту"
        description="Найдите раздел, материал или мероприятие Общества."
        breadcrumb={[{ label: "Поиск" }]}
      />
      <section className="container-page py-14">
        <div className="relative max-w-lg">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Начните вводить запрос"
            aria-label="Поисковый запрос"
            className="h-12 w-full rounded-full border border-ink-900/10 bg-white pl-11 pr-5 text-sm outline-none focus:border-coral-500/50"
          />
        </div>

        <div className="mt-8 space-y-2">
          {q && results.length === 0 && (
            <p className="text-[15px] text-ink-600">Ничего не найдено по запросу «{query}»</p>
          )}
          {results.map((item) => (
            <Link
              key={item.title + item.to}
              to={item.to}
              className="group flex items-center justify-between rounded-2xl border border-ink-900/[0.07] bg-white px-5 py-4 transition-colors hover:border-coral-500/30"
            >
              <span className="text-[14.5px] font-semibold text-ink-800">
                {item.title}
              </span>
              <ArrowRight className="h-4 w-4 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-coral-500" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <SectionHeading
        align="center"
        title="Страница не найдена"
        description="Возможно, раздел перемещён. Попробуйте начать с главной страницы или воспользуйтесь поиском."
        className="[&_span]:bg-ink-900/[0.05] [&_span]:text-ink-600"
      />
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/" variant="accent">
          На главную
        </ButtonLink>
        <ButtonLink to="/search" variant="outline">
          <Search className="h-4 w-4" />
          Поиск
        </ButtonLink>
      </div>
    </section>
  );
}
