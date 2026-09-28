import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink-900 text-sand-50">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
          <path
            d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.5 2.8c0 5.8-8.5 11.3-8.5 11.3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M4 13.6h4.2l1.6-3.2 2.4 6 1.8-3.4 1.3 1.6H20"
            stroke="#f95433"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {!compact && (
        <div className="leading-none">
          <div className="font-display text-[15px] font-bold tracking-tight text-ink-900">
            РОИБ
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
            Общество по изучению боли
          </div>
        </div>
      )}
    </div>
  );
}
