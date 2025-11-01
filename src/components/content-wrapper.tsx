import React from "react";

import { cn } from "@/lib/utils";

import type { WrapperProps } from "@/globals";

function ContentWrapper({ children, className }: WrapperProps) {
  return <div className={cn("max-w-6xl px-4", className)}>{children}</div>;
}

export { ContentWrapper };
