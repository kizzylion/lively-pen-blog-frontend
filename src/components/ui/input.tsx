import * as React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  ref?: React.Ref<HTMLInputElement>;
}

function Input({ className, type, ref, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-primary bg-primary px-3 py-2 text-base ring-offset-white dark:ring-offset-black file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary placeholder:text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}

export { Input };
