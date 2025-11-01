import React from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/base/separator";
import { FlexBox } from "@/components/flexbox";

interface SectionHeaderProps {
  title: string;
  color?: "primary" | "white";
}

export function SectionHeader({ title, color = "primary" }: SectionHeaderProps) {
  return (
    <FlexBox asColumn className="gap-2 md:gap-3">
      <h2 className={cn("text-2xl md:text-3xl font-bold", color === "primary" ? "text-primary" : "text-white")}>{title}</h2>
      <Separator className={cn("mx-auto h-1 w-16 md:w-20", color === "primary" ? "bg-primary" : "bg-white")} />
    </FlexBox>
  );
}
