import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-on-primary shadow-premium hover:shadow-glow-strong hover:-translate-y-0.5",
      secondary: "bg-secondary text-on-secondary shadow-premium hover:shadow-glow-strong hover:-translate-y-0.5",
      tertiary: "bg-tertiary text-on-tertiary shadow-premium hover:shadow-glow-strong hover:-translate-y-0.5",
      outline: "border border-outline bg-transparent hover:bg-surface-variant hover:border-primary/30 text-on-surface hover:-translate-y-0.5",
      ghost: "bg-transparent hover:bg-surface-variant text-on-surface",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs rounded-xl",
      md: "h-11 px-6 py-2 rounded-2xl",
      lg: "h-14 px-10 text-base rounded-2xl font-bold",
      icon: "h-10 w-10 rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
