import { PageHero } from "@/components/ui/PageHero";
import { Reveal, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CONTACTS } from "@/data/site";
import { Check, Mail, MapPin, Printer, Send } from "lucide-react";
import { useState } from "react";

export function Contacts() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Связаться с Обществом"
        description="Все замечания и пожелания присылайте на roibmail@gmail.com. Редакция отвечает в течение трёх рабочих дней."
        breadcrumb={[{ label: "Контакты" }]}
      />

      <section className="container-page grid gap-10 py-14 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="space-y-4">
              <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6">
                <p className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ink-500">
                  <MapPin className="h-4 w-4 text-coral-500" />
                  Адрес
                </p>
                <p className="mt-3 text-[15px] font-semibold text-ink-900">
                  {CONTACTS.address}
                </p>
                <p className="mt-1 text-[13px] text-ink-500">
                  Почтовый индекс 119334
                </p>
              </div>

              <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6">
                <p className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ink-500">
                  <Mail className="h-4 w-4 text-coral-500" />
                  Электронная почта
                </p>
                <ul className="mt-3 space-y-2">
                  {CONTACTS.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="text-[15px] font-semibold text-ink-900 underline-offset-4 transition-colors hover:text-coral-600 hover:underline"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6">
                <p className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ink-500">
                  <Send className="h-4 w-4 text-coral-500" />
                  Мы в соцсетях
                </p>
                <ul className="mt-3 space-y-2">
                  {CONTACTS.socials.map((s) => (
                    <li key={s.handle}>
                      <a
                        href={`https://${s.handle}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[15px] font-semibold text-ink-900 transition-colors hover:text-coral-600"
                      >
                        {s.name}:{" "}
                        <span className="font-normal text-ink-600">{s.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-7 sm:p-9">
              <h2 className="display-title text-2xl text-ink-900">Написать нам</h2>
              <p className="mt-2 text-[14px] text-ink-600">
                Вопрос по мероприятию, публикации или членству?
              </p>

              {sent ? (
                <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-4 py-2.5 text-[14px] font-semibold text-teal-600">
                  <Check className="h-4 w-4" />
                  Сообщение отправлено — мы ответим на указанную почту
                </p>
              ) : (
                <form
                  className="mt-7 grid gap-4 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <input
                    required
                    placeholder="Имя"
                    aria-label="Имя"
                    className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                  />
                  <input
                    required
                    type="email"
                    placeholder="E-mail"
                    aria-label="Электронная почта"
                    className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                  />
                  <textarea
                    required
                    rows={5}
                    placeholder="Ваше сообщение"
                    aria-label="Сообщение"
                    className="w-full rounded-2xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm outline-none transition-colors focus:border-coral-500/50 sm:col-span-2"
                  />
                  <Button type="submit" variant="accent" className="sm:col-span-2 sm:w-fit">
                    Отправить
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-6 overflow-hidden rounded-3xl border border-ink-900/[0.07]">
              <iframe
                title="Карта"
                className="h-72 w-full border-0"
                loading="lazy"
                src="https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%2040&z=16"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-900/[0.07] bg-white py-14">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <SectionHeading
            title="Авторские права и реклама"
            description="Все материалы сайта защищены законом об авторском праве. Вопросы использования материалов — через редакцию."
          />
          <a
            href={`mailto:${CONTACTS.emails[0]}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 px-5 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-coral-500/30 hover:text-coral-600"
          >
            <Printer className="h-4 w-4" />
            Подробнее
          </a>
        </div>
      </section>
    </>
  );
}
