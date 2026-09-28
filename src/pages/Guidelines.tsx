import { PageHero } from "@/components/ui/PageHero";
import { Reveal, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { GUIDELINES } from "@/data/site";
import { Download, FileText, Search } from "lucide-react";
import { useState } from "react";

export function Guidelines() {
  const [query, setQuery] = useState("");
  const filtered = GUIDELINES.filter((g) =>
    g.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="Материалы"
        title="Клинические рекомендации РОИБ"
        description="Рекомендации разработаны рабочими группами комитетов Общества и одобрены профильными экспертами."
        breadcrumb={[{ label: "Клинические рекомендации" }]}
      />

      <section className="container-page py-14">
        <Reveal>
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по названию"
              aria-label="Поиск по рекомендациям"
              className="h-12 w-full rounded-full border border-ink-900/10 bg-white pl-11 pr-5 text-sm outline-none transition-colors focus:border-coral-500/50"
            />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {filtered.map((doc, i) => (
            <Reveal key={doc.title} delay={Math.min(i, 8) * 0.03}>
              <article className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-ink-900/[0.07] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-coral-500/25 hover:shadow-soft">
                <div>
                  <h3 className="text-[14.5px] font-bold leading-snug text-ink-900">
                    {doc.title}
                  </h3>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-[12px] text-ink-500">
                    <span className="rounded-full bg-ink-900/[0.05] px-2.5 py-0.5 font-semibold text-ink-700">
                      {doc.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5" />
                      {doc.meta}
                    </span>
                  </p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-900/[0.05] text-ink-600 transition-colors group-hover:bg-coral-500 group-hover:text-white">
                  <Download className="h-4 w-4" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-[15px] text-ink-600">
            Ничего не найдено. Попробуйте другой запрос или напишите нам.
          </p>
        )}
      </section>

      <section className="border-t border-ink-900/[0.07] bg-white py-16">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <SectionHeading
            title="Нужна версия документа в другом формате?"
            description="Напишите нам — вышлем рекомендации в PDF или DOC, а при необходимости — с кратким комментарием эксперта."
          />
          <ButtonLink to="/contacts" variant="outline">
            Запросить документ
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
