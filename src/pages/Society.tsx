import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Tag } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACTS } from "@/data/site";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Target, ListChecks } from "lucide-react";

const TASKS = [
  "содействие развитию научных и клинических исследований в области физиологии, патофизиологии, эпидемиологии, диагностики, лечения и профилактики болевых синдромов",
  "содействие организации и развитию медицинских центров, специализированных отделений, лабораторий и кабинетов по лечению болевых синдромов",
  "содействие подготовке и повышению квалификации специалистов в области изучения и терапии болевых синдромов",
  "создание собственного банка данных по тематике",
  "пропаганда санитарно-просветительских знаний по вопросам оказания медицинской помощи больным, страдающим болевыми синдромами",
  "организация и проведение клинических испытаний лекарственных препаратов, используемых в лечении болевых синдромов",
  "развитие сотрудничества с международными и национальными обществами и организациями по изучению болевых синдромов",
  "организация международного обмена опытом специалистов в разработке стандартов лечения",
  "поддержка участия молодых учёных в школах, семинарах, образовательных программах и научных конференциях",
  "организация издательской деятельности: научно-практический журнал по проблемам боли и методические материалы",
];

export function Society() {
  return (
    <>
      <PageHero
        eyebrow="Информация об обществе"
        title="Общая информация о РОИБ"
        description="Межрегиональная общественная организация «Общество по изучению боли» — добровольная, самоуправляемая, некоммерческая общественная организация."
        breadcrumb={[{ label: "Общество" }, { label: "Общая информация" }]}
      />

      <section className="container-page grid gap-12 py-14 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-700/85 lg:col-span-8">
          <Reveal>
            <h2 className="display-title text-2xl text-ink-900 sm:text-3xl">
              «Российское межрегиональное общество по изучению боли» (РОИБ)
            </h2>
            <p className="mt-4">
              Свою деятельность Общество осуществляет в соответствии с Конституцией
              Российской Федерации, Федеральным законом РФ «Об общественных
              объединениях» № 82-ФЗ от 19.05.1995 г., действующим в Российской
              Федерации законодательством и настоящим Уставом.
            </p>
            <p className="mt-4">
              С 1991 г. Российское общество по изучению боли является коллективным
              членом Международной ассоциации по изучению боли (IASP), а с 1993 г. —
              коллективным членом Европейской федерации боли EFIC, и официально
              представляет Россию в этих организациях.
            </p>
            <p className="mt-4">
              Под эгидой Общества с 2003 г. издаётся научно-практический журнал
              «Российский журнал боли». Журнал выходит 4 раза в год; Президиум принял
              решение о бесплатной рассылке электронной версии в виде PDF-файла членам
              Общества.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Landmark, title: "Правовая основа", text: "ФЗ № 82-ФЗ и Устав Общества" },
                { icon: Target, title: "Миссия", text: "Содействие развитию противоболевой службы" },
                { icon: ListChecks, title: "Членство", text: "Более 10 000 регулярных членов" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ink-900/[0.07] bg-white p-5"
                >
                  <item.icon className="h-5 w-5 text-coral-500" />
                  <p className="mt-3 text-[14px] font-bold text-ink-900">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h3 className="display-title mt-8 text-xl text-ink-900">
              Задачи Общества
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {TASKS.map((task) => (
                <li
                  key={task}
                  className="flex gap-3 rounded-2xl bg-white p-4 text-[13.5px] leading-relaxed text-ink-700/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {task}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6 sm:p-8">
              <h3 className="display-title text-xl text-ink-900">Членство в РОИБ</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700/80">
                Членами Общества могут быть граждане Российской Федерации, достигшие
                18 лет, а также иностранные граждане, лица без гражданства, законно
                находящиеся в Российской Федерации, и общественные объединения —
                юридические лица, разделяющие уставные цели Организации.
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700/80">
                Основанием для рассмотрения вопроса о приёме в члены Организации
                физических лиц является заявление вступающего. Анкеты-заявления
                заполняются на сайте в режиме on-line.
              </p>
              <ButtonLink to="/auth?tab=register" variant="accent" className="mt-6">
                Подать заявление
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <aside className="lg:col-span-4">
          <Reveal className="sticky top-24 space-y-4">
            <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6">
              <Tag>Структура Общества</Tag>
              <ul className="mt-5 space-y-1">
                {[
                  { label: "Президиум РОИБ", to: "/society/presidium" },
                  { label: "Комитеты РОИБ", to: "/society/committees" },
                  { label: "Региональные отделения", to: "/society/regional" },
                  { label: "Секция молодых учёных", to: "/society/young-scientists" },
                  { label: "Российский журнал боли", to: "/journal" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-semibold text-ink-800 transition-colors hover:bg-coral-50"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-coral-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-ink-900 p-6 text-sand-50">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-300">
                Общество в цифрах
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Год основания", String(CONTACTS.founded)],
                  ["Регулярных членов", CONTACTS.members],
                  ["Региональных отделений", "8"],
                  ["Выпусков журнала в год", "4"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <dt className="text-ink-200/70">{label}</dt>
                    <dd className="font-display text-[15px] font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
