import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white dark:ring-offset-black transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      intent: {
        primary: ["bg-brand-solid", "text-white", "border-brand"],
        secondary: ["bg-primary", "text-secondary", "border-primary"],
        tertiary: ["text-tertiary"],
        linkColor: ["text-brand-secondary"],
        linkGray: ["text-tertiary"],
      },
      size: {
        sm: ["text-sm", "py-2", "px-3"],
        md: ["text-sm", "py-[0.625rem]", "px-[0.875rem]"],
        lg: ["text-base", "py-[0.625rem]", "px-4"],
        xl: ["text-base", "py-3", "px-[1.125rem]"],
      },
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
      loading: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        disabled: false,
        class: "hover:bg-brand-solid-hover border-1 border-solid shadow-xs",
      },
      {
        intent: "primary",
        disabled: true,
        class:
          "bg-disabled text-disabled border-1 border-disabled-subtle shadow-xs",
      },
      {
        intent: "secondary",
        disabled: false,
        class: "hover:bg-primary-hover border-1 border-primary shadow-xs",
      },
      {
        intent: "secondary",
        disabled: true,
        class: "border-1 border-primary shadow-xs",
      },
      {
        intent: "tertiary",
        disabled: false,
        class: "hover:bg-primary-hover",
      },
      {
        intent: "tertiary",
        disabled: true,
        class: "",
      },
      {
        intent: "linkColor",
        disabled: false,
        class:
          "hover:text-brand-secondary-hover hover:underline p-0 h-fit rounded-xs",
      },
      {
        intent: "linkColor",
        disabled: true,
        class: "p-0 h-fit",
      },
      {
        intent: "linkGray",
        disabled: false,
        class: "hover:text-tertiary-hover hover:underline p-0 h-fit rounded-xs",
      },
      {
        intent: "linkGray",
        disabled: true,
        class: "p-0 h-fit",
      },
    ],
    defaultVariants: {
      disabled: false,
      loading: false,
      intent: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  loading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  loading,
  children,
  ref,
  ...props
}) => (
  <button
    ref={ref}
    className={twMerge(button({ intent, size, disabled, loading, className }))}
    disabled={disabled || loading}
    {...props}
  >
    {loading && (
      <svg
        className="animate-spin h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle
          className="opacity-75"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray={"20 1400"}
          strokeLinecap="round"
        />
      </svg>
    )}
    <span className={`flex items-center gap-2 ${loading ? "opacity-50" : ""}`}>
      {children}
    </span>
  </button>
);
