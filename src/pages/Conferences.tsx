import { PageHero } from "@/components/ui/PageHero";
import { Reveal, SectionHeading, Tag } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ARCHIVE, EVENTS } from "@/data/site";
import { ArrowRight, MapPin, Monitor, Radio } from "lucide-react";

const formatIcon = {
  Очно: MapPin,
  Онлайн: Monitor,
  Гибрид: Radio,
} as const;

const formatTone = {
  Очно: "border-coral-500/20 bg-coral-500/10 text-coral-700",
  Онлайн: "border-teal-500/25 bg-teal-500/10 text-teal-600",
  Гибрид: "border-ink-900/10 bg-ink-900/[0.05] text-ink-700",
} as const;

export function Conferences() {
  return (
    <>
      <PageHero
        eyebrow="Конференции"
        title="Календарь конференций и школ"
        description="Российские и международные конференции, очные школы, вебинары и симпозиумы. Большинство мероприятий доступны для онлайн-участия."
        breadcrumb={[{ label: "Конференции" }]}
      />

      <section className="container-page py-14" id="calendar">
        <Reveal>
          <SectionHeading
            eyebrow="Ближайшие события"
            title="Афиша 2026"
            description="Регистрация открыта для членов Общества и всех желающих."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {EVENTS.map((event, i) => {
            const Icon = formatIcon[event.format];
            return (
              <Reveal key={event.id} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-3xl border border-ink-900/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${formatTone[event.format]}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {event.format}
                    </span>
                    <Tag>{event.kind}</Tag>
                  </div>
                  <h3 className="display-title mt-4 text-xl leading-snug text-ink-900">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="mt-1.5 text-[14px] font-medium text-ink-600">
                      {event.subtitle}
                    </p>
                  )}
                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-700/80">
                    {event.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-900/[0.07] pt-4 text-[13px] text-ink-600">
                    <span className="font-semibold text-ink-900">{event.date}</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-ink-400" />
                      {event.location}
                    </span>
                  </div>
                  <ButtonLink to="/auth?tab=register" variant="outline" className="mt-5">
                    Регистрация
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-16" id="international">
        <Reveal>
          <div className="rounded-[2rem] bg-ink-900 p-8 text-sand-50 sm:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-coral-400">
              Международные конференции
            </p>
            <h2 className="display-title mt-3 text-2xl leading-snug sm:text-3xl">
              IASP World Congress on Pain · EFIC Biennial Congress
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-200/80">
              Российское общество по изучению боли представляет сателлитные симпозиумы,
              организует поездки молодых учёных и помогает с оформлением виз и
              регистрацией. Члены РОИБ участвуют в международных конференциях по
              льготным условиям.
            </p>
            <ButtonLink
              to="/contacts"
              variant="accent"
              className="mt-7"
            >
              Уточнить условия участия
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-ink-900/[0.07] bg-white py-16" id="archive">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Архив"
              title="Архив российских конференций"
              description="Материалы прошедших мероприятий: программы, презентации и видеозаписи."
            />
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-3xl border border-ink-900/[0.07]">
            <table className="w-full border-collapse text-left text-[14px]">
              <thead className="bg-sand-100">
                <tr className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-600">
                  <th className="px-5 py-3.5">Год</th>
                  <th className="px-5 py-3.5">Мероприятие</th>
                  <th className="hidden px-5 py-3.5 sm:table-cell">Место</th>
                  <th className="px-5 py-3.5">Формат</th>
                </tr>
              </thead>
              <tbody>
                {ARCHIVE.map((row) => (
                  <tr
                    key={`${row.year}-${row.title}`}
                    className="border-t border-ink-900/[0.06] transition-colors hover:bg-sand-50"
                  >
                    <td className="px-5 py-4 font-display font-bold text-ink-900">
                      {row.year}
                    </td>
                    <td className="px-5 py-4 font-semibold text-ink-800">{row.title}</td>
                    <td className="hidden px-5 py-4 text-ink-600 sm:table-cell">
                      {row.place}
                    </td>
                    <td className="px-5 py-4">
                      <Tag>{row.format}</Tag>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
