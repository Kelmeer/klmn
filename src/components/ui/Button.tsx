import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-sand-50 hover:bg-ink-800 active:bg-ink-950 shadow-soft",
  accent:
    "bg-coral-500 text-white hover:bg-coral-600 active:bg-coral-700 shadow-soft",
  outline:
    "border border-ink-900/15 bg-white/70 text-ink-900 hover:border-ink-900/35 hover:bg-white",
  ghost: "text-ink-700 hover:bg-ink-900/[0.06] hover:text-ink-900",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export const Button = forwardRef<
  HTMLButtonElement,
  CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = "primary", size = "md", className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(base, variants[variant], sizes[size], className)}
    {...props}
  />
));

export function ButtonLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & { to: string; children: React.ReactNode } & Omit<
  React.ComponentProps<typeof Link>,
  "to"
>) {
  return (
    <Link to={to} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}
