import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send, Printer } from "lucide-react";
import { CONTACTS, NAV, PARTNERS } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { SubscribeForm } from "@/components/ui/SubscribeForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink-900 text-ink-100">
      <div className="grain">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <div className="[&_div]:text-sand-50 [&_div_span]:text-ink-300">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-200/80">
              «Российское межрегиональное общество по изучению боли» — ведущее
              объединение специалистов, занимающихся проблемой боли в России.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${CONTACTS.emails[0]}`}
                className="flex items-start gap-3 text-ink-200/80 transition-colors hover:text-coral-300"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                {CONTACTS.emails[0]}
              </a>
              <p className="flex items-start gap-3 text-ink-200/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                {CONTACTS.address}
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {NAV.slice(0, 3).map((section) => (
              <div key={section.title}>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-400">
                  {section.title}
                </p>
                <ul className="space-y-2.5">
                  {section.groups.flatMap((g) => g.items).slice(0, 6).map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.to}
                        className="text-[13.5px] text-ink-200/75 transition-colors hover:text-coral-300"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-400">
              Подписка на новости
            </p>
            <p className="mt-3 text-sm text-ink-200/70">
              Анонсы конференций, вебинары и новые выпуски журнала.
            </p>
            <SubscribeForm className="mt-5" />

            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-400">
              Официальные партнёры
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {PARTNERS.map((p) => (
                <li
                  key={p.name}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[11.5px] font-medium text-ink-200/70"
                >
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-4 py-6 text-[12.5px] text-ink-300/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {CONTACTS.founded}–{year} РОИБ. Все права защищены.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link to="/contacts" className="transition-colors hover:text-coral-300">
                Контакты
              </Link>
              <Link to="/sitemap" className="transition-colors hover:text-coral-300">
                Карта сайта
              </Link>
              <a
                href="mailto:roibmail@gmail.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-coral-300"
              >
                <Printer className="h-3.5 w-3.5" />
                Авторские права
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                {CONTACTS.site}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function InlineSubscribe() {
  return (
    <div className="rounded-3xl border border-coral-500/15 bg-coral-50 p-6">
      <p className="flex items-center gap-2 text-sm font-bold text-coral-800">
        <Send className="h-4 w-4" />
        Подписаться на рассылку
      </p>
      <p className="mt-2 text-[13px] text-ink-700">
        Четыре выпуска «Российского журнала боли» в электронном виде — бесплатно
        для членов Общества.
      </p>
      <SubscribeForm className="mt-4" />
    </div>
  );
}
