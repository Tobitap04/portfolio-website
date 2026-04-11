import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-primary text-background font-semibold hover:bg-accent hover:-translate-y-[1px] glow-hover rounded-lg border border-transparent shadow-[0_0_20px_rgba(34,211,238,0.15)]",
      secondary:
        "bg-transparent text-accent border border-accent/40 hover:border-accent hover:text-accent-hover hover:-translate-y-[1px] glow-hover rounded-lg",
      ghost:
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg",
      glass:
        "glass text-text-primary hover:bg-surface-elevated/60 rounded-lg glow-hover hover:-translate-y-[1px]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-sm",
      lg: "px-8 py-3 text-base",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          className={combinedClassName}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
