import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Globe2,
  MapPin,
  Microscope,
  Award,
  Stethoscope,
  Video,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";
import {
  EVENTS,
  FEATURED_NEWS,
  SPECIALIST_TOPICS,
  STATS,
  PATIENT_TOPICS,
} from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, SectionHeading, Tag } from "@/components/ui/Section";
import { InlineSubscribe } from "@/components/layout/Footer";

const PRINCIPLES = [
  {
    icon: Microscope,
    title: "Доказательная база",
    text: "Клинические рекомендации, разработанные рабочими группами комитетов РОИБ.",
  },
  {
    icon: Users,
    title: "Сообщество врачей",
    text: "Более 10 000 специалистов в 8 региональных отделениях Общества.",
  },
  {
    icon: Stethoscope,
    title: "Клиническая помощь",
    text: "Центры, кабинеты и службы противоболевой помощи по всей стране.",
  },
  {
    icon: Globe2,
    title: "Международные связи",
    text: "Членство в IASP и EFIC, обмен опытом с мировым сообществом.",
  },
];

const EDUCATION_HIGHLIGHTS = [
  {
    icon: Video,
    title: "РОИБ ONLINE",
    text: "Вебинары и школы в формате экспертной дискуссии",
  },
  {
    icon: BookOpen,
    title: "Курс «Медицина боли»",
    text: "12 модулей по диагностике и лечению синдромов",
  },
  {
    icon: Award,
    title: "Клинические рекомендации",
    text: "15 документов, доступных для скачивания",
  },
];

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 460px at 8% -8%, rgba(249,84,51,.20), transparent 58%), radial-gradient(820px 400px at 92% 4%, rgba(42,157,149,.20), transparent 60%)",
          }}
        />
        <div className="grain absolute inset-0 opacity-40" />

        <div className="container-page relative pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-600 backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5 text-coral-500" />
                Russian Association for the Study of Pain
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                className="display-title mt-6 text-[2.6rem] leading-[1.04] text-ink-900 sm:text-[3.5rem] lg:text-[4.25rem]"
              >
                Медицина боли
                <span className="block text-ink-500">от научной идеи</span>
                <span className="block text-coral-600">до помощи пациенту</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14 }}
                className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-700/85 sm:text-lg"
              >
                «Российское межрегиональное общество по изучению боли» — ведущее
                объединение специалистов, занимающихся проблемой боли в России.
                С 1991 года мы объединяем врачей, исследователей и пациентов
                вокруг общей цели: боль должна быть понята и вылечена.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <ButtonLink to="/auth?tab=register" variant="accent" size="lg">
                  Вступить в РОИБ
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink to="/conferences" variant="outline" size="lg">
                  <CalendarDays className="h-4 w-4" />
                  Афиша мероприятий
                </ButtonLink>
              </motion.div>

              <motion.dl
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4"
              >
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl font-bold text-ink-900 sm:text-[1.75rem]">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-[12.5px] leading-tight text-ink-600">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* Visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-coral-500/20 via-transparent to-teal-500/20 blur-2xl" />
                <div className="card-surface relative overflow-hidden p-7">
                  <div className="flex items-center justify-between">
                    <Tag>Главная тема</Tag>
                    <span className="text-[11.5px] font-semibold text-ink-500">
                      31.08.2026
                    </span>
                  </div>
                  <h2 className="display-title mt-4 text-xl leading-snug text-ink-900">
                    «РОИБ ONLINE — Медицина боли в вопросах и ответах 2026»
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-700/80">
                    Эксперты представят современные клинические рекомендации и
                    найдут ответы на непростые, а иногда весьма спорные вопросы
                    дифференциальной диагностики и лечения боли.
                  </p>
                  <div className="mt-5 space-y-2.5 border-t border-ink-900/[0.07] pt-5 text-[13px]">
                    {[
                      "Вебинары, школы и конференции",
                      "Дискуссии с ведущими специалистами",
                      "Возможность задать вопрос экспертам",
                    ].map((item) => (
                      <p key={item} className="flex items-start gap-2.5 text-ink-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                        {item}
                      </p>
                    ))}
                  </div>
                  <ButtonLink to="/auth?tab=register" variant="accent" className="mt-6 w-full">
                    Регистрация
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>

                <div className="card-surface absolute -bottom-6 -left-4 hidden w-52 p-4 sm:block">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral-500" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-600">
                      Ближайшее событие
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] font-bold text-ink-900">
                    Боль в спине 2026
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[12px] text-ink-600">
                    <MapPin className="h-3.5 w-3.5" />
                    Москва · 3 октября
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Об обществе"
                title="35 лет исследуем боль вместе"
                description="Свою деятельность Общество осуществляет в соответствии с Конституцией РФ и Федеральным законом «Об общественных объединениях» № 82-ФЗ. Это добровольная, самоуправляемая, некоммерческая организация."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to="/society" variant="outline">
                  Подробнее об Обществе
                </ButtonLink>
                <ButtonLink to="/society/committees" variant="ghost">
                  Комитеты РОИБ
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-ink-900/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral-500/25 hover:shadow-lift">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-ink-900/[0.05] text-ink-700 transition-colors group-hover:bg-coral-500 group-hover:text-white">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-700/75">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-y border-ink-900/[0.07] bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Новости"
                title="Главное в жизни Общества"
                description="Анонсы мероприятий, образовательные проекты и материалы рабочих групп."
              />
              <ButtonLink to="/news" variant="ghost" className="shrink-0">
                Все новости
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_NEWS.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.07}>
                <article className="group flex h-full flex-col rounded-3xl border border-ink-900/[0.07] bg-sand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <Tag className="border-coral-500/20 bg-coral-500/10 text-coral-700">
                      {item.tag}
                    </Tag>
                    <span className="text-[11.5px] font-semibold text-ink-500">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[17px] font-bold leading-snug text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-700/75">
                    {item.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-900/[0.07] pt-4">
                    <Link
                      to="/news"
                      className="link-underline text-[13px]"
                    >
                      Подробнее
                    </Link>
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
        </div>
      </section>

      {/* Events */}
      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Календарь"
              title="Ближайшие события"
              description="Очные школы, вебинары, конференции и симпозиумы — российские и международные."
            />
            <ButtonLink to="/conferences" variant="outline" className="shrink-0">
              Полная афиша
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {EVENTS.slice(0, 3).map((event, i) => (
            <Reveal key={event.id} delay={i * 0.06}>
              <Link
                to="/conferences"
                className="group grid gap-4 rounded-3xl border border-ink-900/[0.07] bg-white p-5 transition-all duration-300 hover:border-ink-900/20 hover:shadow-soft sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6 sm:p-6"
              >
                <div className="flex w-fit flex-col items-center rounded-2xl bg-ink-900 px-4 py-3 text-sand-50">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-300">
                    {event.date.split(" ")[1] ?? ""}
                  </span>
                  <span className="font-display text-lg font-bold leading-tight">
                    {event.date.split(" ")[0]}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[16.5px] font-bold text-ink-900 transition-colors group-hover:text-coral-600">
                      {event.title}
                    </h3>
                    <Tag>{event.format}</Tag>
                  </div>
                  {event.subtitle && (
                    <p className="mt-1 text-[13.5px] text-ink-600">{event.subtitle}</p>
                  )}
                  <p className="mt-2 flex items-center gap-1.5 text-[12.5px] text-ink-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-700 transition-colors group-hover:text-coral-600">
                  Подробнее
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="relative overflow-hidden border-y border-ink-900/[0.07] bg-ink-900 py-16 text-sand-50 sm:py-20">
        <div className="grain absolute inset-0 opacity-[0.12]" />
        <div
          className="absolute -right-32 top-0 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(249,84,51,.35), transparent 65%)" }}
        />
        <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Образование"
                title="Непрерывное медицинское образование по теме боли"
                description="Лекции, вебинары, очные школы и видеокурсы. Знания, которые можно применить на следующей смене."
                className="[&_h2]:text-sand-50 [&_p]:text-ink-200/75"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/education" variant="accent">
                  Программы обучения
                </ButtonLink>
                <ButtonLink
                  to="/guidelines"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-sand-50 hover:border-white/40 hover:bg-white/10"
                >
                  Клинические рекомендации
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {EDUCATION_HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <Link
                  to="/education"
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral-500/40 hover:bg-white/[0.07]"
                >
                  <item.icon className="h-6 w-6 text-coral-400" />
                  <h3 className="mt-4 text-[15.5px] font-bold text-sand-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-200/70">
                    {item.text}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="Специалистам"
                title="Разделы по клиническим темам"
                description="Материалы рабочих групп: рекомендации, консенсусы, справочные руководства."
              />
              <ButtonLink to="/professionals" variant="ghost" className="mt-7">
                Все материалы
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {SPECIALIST_TOPICS.slice(0, 8).map((topic, i) => (
              <Reveal key={topic.title} delay={i * 0.04}>
                <Link
                  to={topic.to}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-900/[0.07] bg-white px-5 py-4 transition-all duration-200 hover:border-coral-500/30 hover:bg-coral-50/40"
                >
                  <span className="text-[14.5px] font-semibold text-ink-800">
                    {topic.title}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-coral-500" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Patient */}
      <section className="border-y border-ink-900/[0.07] bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="В помощь пациенту"
                title="Понятный разговор — ключ к медицинской грамотности"
                description="Раздел создан, чтобы помочь пациенту разобраться в сути своего заболевания, понять происхождение боли и получить квалифицированную помощь. Материалы основаны на принципах доказательной медицины."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to="/patient" variant="accent">
                  Материалы для пациентов
                </ButtonLink>
                <InlineSubscribe />
              </div>
            </Reveal>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {PATIENT_TOPICS.map((topic, i) => (
              <Reveal key={topic.title} delay={i * 0.04}>
                <Link
                  to={topic.to}
                  className="group flex h-full items-center justify-between gap-3 rounded-2xl bg-sand-50 px-5 py-4 text-[14px] font-semibold text-ink-800 transition-colors hover:bg-coral-50"
                >
                  {topic.title}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-coral-500" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-900 px-7 py-14 text-center sm:px-14 sm:py-20">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 260px at 20% 0%, rgba(249,84,51,.32), transparent 60%), radial-gradient(600px 260px at 80% 100%, rgba(42,157,149,.28), transparent 60%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="display-title text-3xl leading-tight text-sand-50 sm:text-4xl">
                Станьте частью Общества
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-200/80">
                Члены РОИБ получают доступ к образовательным программам, клиническим
                рекомендациям и бесплатной электронной версии «Российского журнала боли».
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink to="/auth?tab=register" variant="accent" size="lg">
                  Регистрация в РОИБ
                </ButtonLink>
                <ButtonLink
                  to="/contacts"
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-sand-50 hover:border-white/40 hover:bg-white/10"
                >
                  Связаться с нами
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
