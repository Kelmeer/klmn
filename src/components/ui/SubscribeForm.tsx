import { useState } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function SubscribeForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-4 py-2.5 text-[13px] font-semibold text-teal-600",
          className,
        )}
      >
        <Check className="h-4 w-4" />
        Готово — письмо с подтверждением отправлено
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className={cn("flex w-full gap-2", className)}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ваш e-mail"
        aria-label="Электронная почта"
        className="h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-sand-50 outline-none transition-colors placeholder:text-ink-300/60 focus:border-coral-400"
      />
      <button
        type="submit"
        className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-coral-500 px-5 text-sm font-bold text-white transition-colors hover:bg-coral-600"
      >
        <Send className="h-4 w-4" />
        <span className="hidden sm:inline">Подписаться</span>
      </button>
    </form>
  );
}
