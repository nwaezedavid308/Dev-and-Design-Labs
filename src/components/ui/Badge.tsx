import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ 
  className, 
  variant = 'primary', 
  children, 
  ...props 
}) => {
  const variants = {
    primary: "bg-primary/5 text-primary border-primary/10",
    secondary: "bg-secondary/5 text-secondary border-secondary/10",
    tertiary: "bg-tertiary/5 text-tertiary border-tertiary/10",
    outline: "text-on-surface-variant border-outline/10 bg-surface-variant/30",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
