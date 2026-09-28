import { PageHero } from "@/components/ui/PageHero";
import { Reveal, SectionHeading, Tag } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { InlineSubscribe } from "@/components/layout/Footer";
import {
  Download,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const TOPICS: { id: string; title: string; text: string; signs: string[] }[] = [
  {
    id: "tension",
    title: "Головная боль напряжения",
    text: "Самая распространённая форма головной боли: обычно описывается как давящая или стягивающая, чаще с двух сторон, без тошноты и усиления от физической нагрузки.",
    signs: [
      "Ощущение сдавливания, как обруч на голове",
      "Боль умеренной интенсивности, обычно 3–5 баллов",
      "Связь со стрессом и длительным напряжением мышц",
      "Отсутствие тошноты и светобоязни",
    ],
  },
  {
    id: "migraine",
    title: "Мигрень",
    text: "Невоспалительное заболевание с приступообразной сильной болью в области глаза и виска. Часто сопровождается тошнотой и непереносимостью света и звука.",
    signs: [
      "Боль с одной стороны головы, нарастает до 6–12 часов",
      "Тошнота, иногда рвота",
      "Непереносимость света, звуков и запахов",
      "Иногда предшествующая аура: зрительные или тактильные ощущения",
    ],
  },
  {
    id: "chronic-daily",
    title: "Хроническая ежедневная головная боль",
    text: "Головная боль, возникающая 15 и более дней в месяц на протяжении более трёх месяцев. Часто развивается как осложнение мигрени или частой головной боли напряжения.",
    signs: [
      "Боль через день и чаще",
      "Многие годы непрерывного анамнеза",
      "Нередко требует междисциплинарного подхода",
      "Высокий риск эмоционального выгорания",
    ],
  },
  {
    id: "abuse",
    title: "Абузусная головная боль",
    text: "Головная боль, связанная с частым приёмом обезболивающих. Возникает при приёме анальгетиков более 10–15 дней в месяц на протяжении трёх месяцев подряд.",
    signs: [
      "Приём обезболивающих 10 и более дней в месяц",
      "Головная боль носит постоянный характер",
      "Требует отмены препарата и специфической терапии",
      "Лечение — под контролем врача, постепенно",
    ],
  },
  {
    id: "cluster",
    title: "Кластерная головная боль",
    text: "Редкое, но крайне болезненное состояние с сериями приступов в течение дня. Приступы длятся от 15 минут до 3 часов и повторяются в течение недель или месяцев.",
    signs: [
      "Острая боль вокруг одного глаза",
      "Слезотечение, заложенность носа, отёк века",
      "Возникает в одно и то же время суток",
      "В периоды «обострения» — серии ежедневных приступов",
    ],
  },
  {
    id: "diet",
    title: "Диета при мигрени",
    text: "Отслеживание продуктов, которые провоцируют приступ, помогает сократить их частоту у значительной части пациентов.",
    signs: [
      "Ведите дневник: что ели, когда был приступ",
      "Типичные провокаторы: выдержанные сыры, копчёности, алкоголь",
      "Не отказывайтесь от еды: пропуск приёмов пищи сам по себе провоцирует боль",
      "Пейте достаточно воды и следите за режимом сна",
    ],
  },
];

export function Patient() {
  return (
    <>
      <PageHero
        eyebrow="В помощь пациенту"
        title="Понятный разговор — ключ к медицинской грамотности"
        description="Задача этого раздела — предоставить пациенту доступную и компетентную информацию по проблеме боли, основанную на принципах доказательной медицины."
        breadcrumb={[{ label: "В помощь пациенту" }]}
      />

      <section className="container-page py-14" id="about">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-700/85 lg:col-span-7">
            <Reveal>
              <h2 className="display-title text-2xl text-ink-900">
                Почему боль нужно понимать
              </h2>
              <p className="mt-4">
                Проблема лечения боли в России сегодня стоит очень остро. В условиях
                широкого распространения ложной, вводящей в заблуждение информации
                пациенту трудно разобраться, и он легко поддаётся на провокационные
                заявления «специалистов», имеющих низкую квалификацию в вопросах лечения
                боли.
              </p>
              <p className="mt-4">
                Этот раздел направлен на улучшение понимания пациентом сути своего
                заболевания — даёт возможность понять и разобраться в происхождении боли
                и получить квалифицированную помощь. Надеемся на благотворное
                сотрудничество.
              </p>
            </Reveal>
            <Reveal>
              <blockquote className="rounded-3xl border-l-4 border-coral-500 bg-white p-6">
                <p className="text-[15px] italic text-ink-700">
                  «Боль, как самостоятельная форма болезни»
                </p>
                <footer className="mt-2 text-[13px] font-semibold text-ink-900">
                  М. Л. Кукушкин
                </footer>
              </blockquote>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6">
                <h3 className="text-[16px] font-bold text-ink-900">
                  Материалы Российского Общества по изучению Головной Боли (РОИГБ)
                </h3>
                <ul className="mt-4 space-y-1.5 text-[13.5px] text-ink-700/80">
                  <li>Президент РОИГБ — проф., д.м.н. Г. Р. Табеева</li>
                  <li>Учёный секретарь — д.м.н. В. В. Осипова</li>
                  <li>Ответственный секретарь — к.м.н. А. В. Сергеев</li>
                  <li>119021, Москва, ул. Россолимо, 11</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl bg-ink-900 p-7 text-sand-50">
                <ShieldCheck className="h-6 w-6 text-coral-400" />
                <h3 className="display-title mt-4 text-xl">
                  Право на обезболивание
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-200/80">
                  Пациент имеет право на выбор лекарства, помощь в их подборе и
                  использование обезболивающих в полном объёме, если это необходимо
                  для облегчения боли.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <InlineSubscribe />
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-y border-ink-900/[0.07] bg-white py-16" id="headache">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Разборы"
              title="Головная боль: основные формы"
              description="Симптомы, на которые стоит обратить внимание, и когда обязательно обратиться к врачу."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {TOPICS.map((topic, i) => (
              <Reveal key={topic.id} delay={i * 0.05}>
                <article
                  id={topic.id}
                  className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-ink-900/[0.07] bg-sand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[17px] font-bold leading-snug text-ink-900">
                      {topic.title}
                    </h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-coral-500/10 text-coral-600">
                      <HeartHandshake className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-700/80">
                    {topic.text}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {topic.signs.map((sign) => (
                      <li key={sign} className="flex items-start gap-2.5 text-[13.5px] text-ink-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        {sign}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ink-900/12 bg-white px-4 py-2.5 text-[13px] font-semibold text-ink-700 transition-colors hover:border-coral-500/30 hover:text-coral-600">
                    <Download className="h-4 w-4" />
                    Скачать PDF
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16" id="support">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-ink-900/[0.07] bg-white p-7">
              <MessageCircle className="h-6 w-6 text-teal-500" />
              <h3 className="display-title mt-4 text-xl text-ink-900">
                Группы самопомощи
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700/80">
                Общество содействует созданию объединений и групп самопомощи пациентов,
                страдающих различными видами боли. В группах можно обменяться опытом,
                получить поддержку и узнать о специалистах в своём регионе.
              </p>
              <ButtonLink to="/contacts" variant="outline" className="mt-6">
                Узнать о группах
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-3xl border border-ink-900/[0.07] bg-white p-7">
              <Tag className="border-teal-500/25 bg-teal-500/10 text-teal-600">
                Важно
              </Tag>
              <h3 className="display-title mt-4 text-xl text-ink-900">
                Когда нужна срочная помощь
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700/80">
                Внезапная сильная головная боль, не похожая на обычную, боль после
                травмы, головная боль с температурой, спутанностью сознания или
                онемением — повод немедленно обратиться за скорой помощью. Материалы
                сайта не заменяют консультацию врача.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
