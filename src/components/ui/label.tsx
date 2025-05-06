import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const labelVariants = cva(
  " text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & {
    ref?: React.Ref<HTMLLabelElement>;
  };

function Label({ className, ref, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  );
}

export { Label };
