import { Navigate, useNavigate } from "react-router-dom";
import {
  BookOpen,
  CalendarCheck,
  FileText,
  LogOut,
  Mail,
  Video,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { EVENTS, GUIDELINES } from "@/data/site";
import { Button, ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Tag } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth?tab=login" replace />;
  return <>{children}</>;
}

export function Account() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  if (!user) return null;

  const tiles = [
    { icon: CalendarCheck, label: "Мои регистрации", value: "2 события", to: "/conferences" },
    { icon: BookOpen, label: "Российский журнал боли", value: "Том 24, №3", to: "/journal" },
    { icon: FileText, label: "Рекомендации", value: `${GUIDELINES.length} документа`, to: "/guidelines" },
    { icon: Video, label: "Записи вебинаров", value: "4 записи", to: "/education" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Личный кабинет"
        title={user.name}
        description={`Член РОИБ с ${user.memberSince}. Специальность: ${user.specialty}.`}
        breadcrumb={[{ label: "Личный кабинет" }]}
      />

      <section className="container-page py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.05}>
              <button
                onClick={() => navigate(tile.to)}
                className="group h-full w-full rounded-3xl border border-ink-900/[0.07] bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <tile.icon className="h-5 w-5 text-coral-500" />
                <p className="mt-4 text-[13px] font-semibold text-ink-600">
                  {tile.label}
                </p>
                <p className="display-title mt-1 text-lg text-ink-900">{tile.value}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-ink-900/[0.07] bg-white p-6 sm:p-8">
              <h2 className="display-title text-xl text-ink-900">Ближайшие события</h2>
              <ul className="mt-5 space-y-3">
                {EVENTS.slice(0, 3).map((event) => (
                  <li
                    key={event.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-sand-50 p-4"
                  >
                    <div>
                      <p className="text-[14.5px] font-bold text-ink-900">{event.title}</p>
                      <p className="mt-0.5 text-[12.5px] text-ink-600">
                        {event.date} · {event.location}
                      </p>
                    </div>
                    <Tag
                      className={cn(
                        event.format === "Очно"
                          ? "border-coral-500/20 bg-coral-500/10 text-coral-700"
                          : "border-teal-500/25 bg-teal-500/10 text-teal-600",
                      )}
                    >
                      {event.format}
                    </Tag>
                  </li>
                ))}
              </ul>
              <ButtonLink to="/conferences" variant="outline" className="mt-6">
                Вся афиша
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="h-full rounded-3xl bg-ink-900 p-6 text-sand-50 sm:p-8">
              <h2 className="display-title text-xl">Данные членства</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["ФИО", user.name],
                  ["E-mail", user.email],
                  ["Специальность", user.specialty],
                  ["Членство с", user.memberSince],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-400">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[15px] font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to="/education" variant="accent" size="sm">
                  Мои программы
                </ButtonLink>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 bg-white/5 text-sand-50 hover:border-white/40 hover:bg-white/10"
                  onClick={signOut}
                >
                  <LogOut className="h-4 w-4" />
                  Выйти
                </Button>
              </div>
              <p className="mt-6 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-200/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                Электронная версия журнала приходит на {user.email}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
