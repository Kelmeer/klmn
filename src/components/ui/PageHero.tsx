import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/[0.07] bg-white">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(900px 340px at 12% -10%, rgba(249,84,51,.16), transparent 60%), radial-gradient(700px 300px at 88% 0%, rgba(42,157,149,.16), transparent 62%)",
        }}
      />
      <div className="container-page relative py-14 sm:py-18 lg:py-20">
        <nav className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-ink-500">
          <Link to="/" className="transition-colors hover:text-coral-600">
            Главная
          </Link>
          {breadcrumb.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
              {item.to ? (
                <Link to={item.to} className="transition-colors hover:text-coral-600">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink-700">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-coral-700">
          <span className="h-1.5 w-1.5 rounded-full bg-coral-500" />
          {eyebrow}
        </span>
        <h1 className="display-title mt-4 max-w-4xl text-3xl leading-[1.1] text-ink-900 sm:text-4xl lg:text-[3.25rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-700/80 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
