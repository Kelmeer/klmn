import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Tag } from "@/components/ui/Section";
import { PRESIDIUM, COMMITTEES, REGIONS } from "@/data/site";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";

export function Presidium() {
  return (
    <>
      <PageHero
        eyebrow="Информация об обществе"
        title="Президиум РОИБ"
        description="Руководство Общества: президент, вице-президенты и члены президиума — ведущие специалисты по медицине боли."
        breadcrumb={[
          { label: "Общество", to: "/society" },
          { label: "Президиум" },
        ]}
      />
      <section className="container-page py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRESIDIUM.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-ink-900/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-900 font-display text-[15px] font-bold text-sand-50 transition-colors group-hover:bg-coral-500">
                  {person.initials}
                </span>
                <h3 className="mt-4 text-[15.5px] font-bold text-ink-900">
                  {person.name}
                </h3>
                <p className="mt-1 text-[13px] text-coral-600">{person.role}</p>
                {person.degree && (
                  <p className="mt-2 text-[12.5px] text-ink-600">{person.degree}</p>
                )}
                {person.city && (
                  <p className="mt-3 flex items-center gap-1.5 text-[12px] text-ink-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {person.city}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function Committees() {
  return (
    <>
      <PageHero
        eyebrow="Информация об обществе"
        title="Комитеты РОИБ"
        description="Комитеты объединяют наиболее авторитетных специалистов по основным направлениям деятельности Общества."
        breadcrumb={[{ label: "Общество", to: "/society" }, { label: "Комитеты" }]}
      />
      <section className="container-page py-14">
        <Reveal>
          <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6 sm:p-8">
            <p className="text-[15px] leading-relaxed text-ink-700/85">
              В задачи комитетов РОИБ входит развитие профильного направления путём
              создания рабочих групп для разработки клинических рекомендаций для
              Минздрава РФ и методических пособий, участие в подготовке программ
              конференций и обучающих семинаров, взаимодействие с другими комитетами.
            </p>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {COMMITTEES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.03}>
              <Link
                to={c.to}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-900/[0.07] bg-white px-5 py-4 transition-all hover:border-coral-500/30 hover:bg-coral-50/40"
              >
                <span className="text-[14.5px] font-semibold text-ink-800">
                  {c.title}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-coral-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function Regional() {
  return (
    <>
      <PageHero
        eyebrow="Информация об обществе"
        title="Региональные отделения РОИБ"
        description="Восемь региональных отделений ведут работу с врачами и пациентами в своих регионах."
        breadcrumb={[{ label: "Общество", to: "/society" }, { label: "Региональные отделения" }]}
      />
      <section className="container-page py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <article className="h-full rounded-3xl border border-ink-900/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[15.5px] font-bold leading-snug text-ink-900">
                    {r.name}
                  </h3>
                  <Tag>
                    <Users className="mr-1 h-3 w-3" />
                    {r.members}
                  </Tag>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-[12.5px] text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {r.city}
                </p>
                <p className="mt-3 text-[13px] text-ink-700/80">
                  <span className="font-semibold text-ink-900">Руководитель: </span>
                  {r.head}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function YoungScientists() {
  return (
    <>
      <PageHero
        eyebrow="Информация об обществе"
        title="Секция молодых учёных «Будущее РОИБ»"
        description="Студенты, ординаторы, аспиранты и молодые исследователи в возрасте до 35 лет, интересующиеся проблемой изучения и лечения боли, могут стать активными участниками Общества."
        breadcrumb={[
          { label: "Общество", to: "/society" },
          { label: "Секция молодых учёных" },
        ]}
      />
      <section className="container-page grid gap-10 py-14 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-700/85 lg:col-span-7">
          <Reveal>
            <h2 className="display-title text-2xl text-ink-900">
              С чего начать путь в науку о боли
            </h2>
            <p className="mt-4">
              В Российском обществе по изучению боли создана и ведёт активную работу
              Секция молодых учёных «Будущее РОИБ». Мы помогаем начинающим исследователям
              выбрать тему, спроектировать исследование, найти наставника и представить
              результаты на конференциях Общества.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Семинары «Путь в науку: с чего начать?»",
                "Наставничество от ведущих специалистов",
                "Секционные выступления на конференциях РОИБ",
                "Публикации в «Российском журнале боли»",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-2xl bg-white p-4 text-[14px] font-semibold text-ink-800"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500">
                Ближайший семинар
              </p>
              <h3 className="display-title mt-2 text-xl text-ink-900">
                Семинар №6 «Путь в науку: с чего начать?»
              </h3>
              <p className="mt-2 text-[14px] text-ink-700/80">
                17 октября 2026 · онлайн · докладчик Мария Кутушева
              </p>
            </div>
          </Reveal>
        </div>
        <aside className="lg:col-span-5">
          <Reveal className="rounded-3xl bg-ink-900 p-7 text-sand-50">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-300">
              Кто может участвовать
            </p>
            <ul className="mt-5 space-y-3 text-[14.5px] text-ink-200/80">
              {[
                "Студенты медицинских вузов",
                "Ординаторы и аспиранты",
                "Молодые врачи до 35 лет",
                "Исследователи и PhD-соискатели",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/auth?tab=register"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-coral-600"
            >
              Зарегистрироваться
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
