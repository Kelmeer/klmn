import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, X, LogIn, UserPlus, LogOut, LayoutDashboard } from "lucide-react";
import { NAV } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink, Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-900/[0.07] bg-sand-50/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-page">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link to="/" aria-label="На главную">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.map((section) => (
              <div key={section.title} className="relative">
                <button
                  onMouseEnter={() => setOpen(section.title)}
                  onFocus={() => setOpen(section.title)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors",
                    open === section.title
                      ? "bg-ink-900/[0.06] text-ink-900"
                      : "text-ink-700 hover:text-ink-900",
                  )}
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      open === section.title && "rotate-180",
                    )}
                  />
                </button>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/search")}
              aria-label="Поиск"
              className="hidden h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-ink-900/[0.06] sm:grid"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            {user ? (
              <div className="hidden items-center gap-2 sm:flex">
                <ButtonLink to="/account" size="sm" variant="outline">
                  <LayoutDashboard className="h-4 w-4" />
                  Кабинет
                </ButtonLink>
                <Button size="sm" variant="ghost" onClick={signOut} aria-label="Выйти">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="hidden items-center gap-2 sm:flex">
                <ButtonLink to="/auth?tab=login" size="sm" variant="ghost">
                  <LogIn className="h-4 w-4" />
                  Войти
                </ButtonLink>
                <ButtonLink to="/auth?tab=register" size="sm" variant="accent">
                  <UserPlus className="h-4 w-4" />
                  Регистрация
                </ButtonLink>
              </div>
            )}

            <button
              onClick={() => setMobile((v) => !v)}
              aria-label="Меню"
              className="grid h-10 w-10 place-items-center rounded-full text-ink-900 transition-colors hover:bg-ink-900/[0.06] xl:hidden"
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full hidden border-b border-ink-900/[0.07] bg-white/95 backdrop-blur-xl xl:block"
            onMouseEnter={() => setOpen(open)}
          >
            <div className="container-page grid grid-cols-4 gap-8 py-9">
              {NAV.find((s) => s.title === open)?.groups.map((group) => (
                <div key={group.heading}>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-400">
                    {group.heading}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.to}
                          className="group block rounded-xl px-3 py-2 transition-colors hover:bg-ink-900/[0.04]"
                        >
                          <span className="flex items-center gap-2 text-[14px] font-semibold text-ink-800 group-hover:text-coral-600">
                            {item.title}
                            {item.badge && (
                              <span className="rounded-full bg-coral-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-coral-700">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          {item.description && (
                            <span className="mt-0.5 block text-[12.5px] text-ink-500">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-sand-50 xl:hidden"
          >
            <div className="container-page space-y-6 py-6 pb-24">
              {NAV.map((section) => (
                <div key={section.title} className="border-b border-ink-900/[0.07] pb-5">
                  <Link
                    to={section.to ?? "#"}
                    className="display-title text-lg text-ink-900"
                  >
                    {section.title}
                  </Link>
                  <div className="mt-3 space-y-3">
                    {section.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink-400">
                          {group.heading}
                        </p>
                        <ul className="grid gap-1">
                          {group.items.map((item) => (
                            <li key={item.title}>
                              <NavLink
                                to={item.to}
                                className="block py-1 text-[15px] text-ink-700 transition-colors hover:text-coral-600"
                              >
                                {item.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="grid gap-2">
                {user ? (
                  <>
                    <ButtonLink to="/account" variant="outline">
                      Личный кабинет
                    </ButtonLink>
                    <Button variant="ghost" onClick={signOut}>
                      Выйти
                    </Button>
                  </>
                ) : (
                  <>
                    <ButtonLink to="/auth?tab=register" variant="accent">
                      Регистрация в РОИБ
                    </ButtonLink>
                    <ButtonLink to="/auth?tab=login" variant="outline">
                      Войти на сайт
                    </ButtonLink>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
