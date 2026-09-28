import { PageHero } from "@/components/ui/PageHero";
import { Reveal, SectionHeading, Tag } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { EDUCATION_PROGRAMS, EVENTS } from "@/data/site";
import { ArrowRight, Award, CalendarDays, CheckCircle2 } from "lucide-react";

export function Education() {
  return (
    <>
      <PageHero
        eyebrow="Образовательные программы"
        title="Образование РОИБ"
        description="Вебинары, онлайн-курсы, учебные видеоролики и аудиозаписи — всё, что помогает врачу работать с болью увереннее."
        breadcrumb={[{ label: "Образование" }]}
      />

      <section className="container-page py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EDUCATION_PROGRAMS.map((program, i) => (
            <Reveal
              key={program.id}
              delay={i * 0.05}
              className={program.id === "roib-online" ? "lg:col-span-2" : ""}
            >
              <article
                id={program.id}
                className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-ink-900/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <Tag className="border-coral-500/20 bg-coral-500/10 text-coral-700">
                    {program.tag}
                  </Tag>
                  <span className="text-[12px] font-semibold text-ink-500">
                    {program.meta}
                  </span>
                </div>
                <h3 className="display-title mt-4 text-xl leading-snug text-ink-900">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700/80">
                  {program.text}
                </p>
                <ButtonLink
                  to={program.id === "nmo" ? "/contacts" : "/auth?tab=register"}
                  variant="ghost"
                  className="mt-5 self-start"
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-900/[0.07] bg-white py-16" id="webinars">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Регистрация"
              title="Ближайшие вебинары"
              description="Онлайн-участие, запись выступления и материалы в личном кабинете."
            />
          </Reveal>
          <div className="mt-8 space-y-3">
            {EVENTS.filter((e) => e.format !== "Очно").map((event, i) => (
              <Reveal key={event.id} delay={i * 0.05}>
                <div className="flex flex-col gap-4 rounded-3xl border border-ink-900/[0.07] bg-sand-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[16px] font-bold text-ink-900">
                        {event.title}
                      </h3>
                      <Tag>{event.kind}</Tag>
                    </div>
                    {event.subtitle && (
                      <p className="mt-1 text-[13.5px] text-ink-600">
                        {event.subtitle}
                      </p>
                    )}
                    <p className="mt-2 flex items-center gap-1.5 text-[12.5px] text-ink-500">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {event.date}
                    </p>
                  </div>
                  <ButtonLink to="/auth?tab=register" variant="accent" className="shrink-0">
                    Зарегистрироваться
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16" id="nmo">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] border border-ink-900/[0.07] bg-white p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-600">
                <Award className="h-3.5 w-3.5" />
                Условия НМО
              </span>
              <h2 className="display-title mt-4 text-2xl text-ink-900 sm:text-3xl">
                Аккредитация образовательных программ
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700/85">
                Мероприятия РОИБ, включённые в федеральный реестр, засчитывают баллы
                НМО для медицинских и фармацевтических работников. Тестовый контроль
                проводится онлайн, сертификат выдаётся в личном кабинете сразу после
                завершения программы.
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-5">
              {[
                "Заявка на аккредитацию за 30 дней до события",
                "Залы до 500 участников, гибридный формат",
                "Баллы НМО начисляются по итогам тестирования",
                "Сертификат в личном кабинете в течение часа",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-sand-50 p-4 text-[14px] font-medium text-ink-800"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
