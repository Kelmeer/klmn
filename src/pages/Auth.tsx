import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, LogIn, ShieldCheck, UserPlus } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const BENEFITS = [
  "Доступ к образовательным программам и вебинарам РОИБ",
  "Клинические рекомендации рабочих групп",
  "Бесплатная электронная версия «Российского журнала боли»",
  "Скидки на участие в конференциях и очных школах",
  "Личный кабинет с записями и материалами",
];

export function Auth() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") === "register" ? "register" : "login";
  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/account", { replace: true });
  }, [user, navigate]);

  return (
    <div className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 10% 0%, rgba(249,84,51,.18), transparent 58%), radial-gradient(800px 400px at 90% 10%, rgba(42,157,149,.18), transparent 60%)",
        }}
      />
      <div className="grain absolute inset-0 opacity-40" />

      <div className="container-page relative grid gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-5">
          <Link to="/">
            <Logo />
          </Link>
          <h1 className="display-title mt-8 text-3xl leading-tight text-ink-900 sm:text-[2.5rem]">
            Членство в РОИБ открывает доступ к знаниям о боли
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-700/80">
            Заполните анкету — рассмотрение вопроса о приёме в члены Общества занимает
            не более 30 дней.
          </p>
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[14.5px] text-ink-700">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-500" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-surface overflow-hidden"
          >
            <div className="grid grid-cols-2 border-b border-ink-900/[0.07]">
              {(
                [
                  { id: "login", label: "Войти на сайт", icon: LogIn },
                  { id: "register", label: "Регистрация", icon: UserPlus },
                ] as const
              ).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setParams({ tab: t.id })}
                  className={cn(
                    "flex items-center justify-center gap-2 px-4 py-4 text-[14px] font-bold transition-colors",
                    tab === t.id
                      ? "bg-white text-coral-600"
                      : "bg-sand-50 text-ink-600 hover:text-ink-900",
                  )}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                </button>
              ))}
            </div>

            <div className="bg-white p-6 sm:p-8">
              {tab === "login" ? (
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    signIn(String(form.get("email")));
                    navigate("/account");
                  }}
                >
                  <div>
                    <h2 className="display-title text-xl text-ink-900">С возвращением</h2>
                    <p className="mt-1 text-[13.5px] text-ink-600">
                      Войдите, чтобы увидеть записи и материалы
                    </p>
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="E-mail"
                    aria-label="Электронная почта"
                    className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                  />
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Пароль"
                    aria-label="Пароль"
                    className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                  />
                  <div className="flex items-center justify-between text-[13px]">
                    <label className="flex items-center gap-2 text-ink-600">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-ink-900/20"
                      />
                      Запомнить меня
                    </label>
                    <a href="#" className="font-semibold text-coral-600">
                      Забыли пароль?
                    </a>
                  </div>
                  <Button type="submit" size="lg" className="mt-1 w-full">
                    Войти
                  </Button>
                  <p className="text-center text-[13px] text-ink-600">
                    Нет аккаунта?{" "}
                    <button
                      type="button"
                      onClick={() => setParams({ tab: "register" })}
                      className="font-semibold text-coral-600"
                    >
                      Зарегистрироваться
                    </button>
                  </p>
                </form>
              ) : (
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    signUp({
                      name: String(form.get("name")),
                      email: String(form.get("email")),
                      specialty: String(form.get("specialty")),
                    });
                    navigate("/account");
                  }}
                >
                  <div>
                    <h2 className="display-title text-xl text-ink-900">
                      Анкета вступающего
                    </h2>
                    <p className="mt-1 text-[13.5px] text-ink-600">
                      Заполните все поля — данные попадут в Президиум РОИБ
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="name"
                      required
                      placeholder="ФИО"
                      aria-label="ФИО"
                      className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="E-mail"
                      aria-label="Электронная почта"
                      className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                    />
                    <input
                      name="specialty"
                      required
                      placeholder="Специальность"
                      aria-label="Специальность"
                      className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                    />
                    <input
                      name="city"
                      required
                      placeholder="Город"
                      aria-label="Город"
                      className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                    />
                  </div>
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Пароль"
                    aria-label="Пароль"
                    className="h-12 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 text-sm outline-none transition-colors focus:border-coral-500/50"
                  />
                  <p className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-600">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                    Отправляя анкету, вы соглашаетесь с уставом Общества и обработкой
                    персональных данных.
                  </p>
                  <Button type="submit" variant="accent" size="lg" className="mt-1 w-full">
                    Отправить заявление
                  </Button>
                  <p className="text-center text-[13px] text-ink-600">
                    Уже член Общества?{" "}
                    <button
                      type="button"
                      onClick={() => setParams({ tab: "login" })}
                      className="font-semibold text-coral-600"
                    >
                      Войти
                    </button>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
