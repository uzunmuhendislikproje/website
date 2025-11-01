import React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-muted-foreground",
        "border-secondary! w-full min-w-0 rounded-md border bg-transparent px-4 py-2 text-base shadow-xs",
        "transition-[color,box-shadow] outline-none",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:ring-secondary/45 focus-visible:ring-[3px]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
