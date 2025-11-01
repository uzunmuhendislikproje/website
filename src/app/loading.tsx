import React from "react";

import { Loader2Icon } from "lucide-react";

import { ContentWrapper } from "@/components/content-wrapper";
import { FlexBox } from "@/components/flexbox";
import { Header } from "@/components/header";

export default function LoadingPage() {
  return (
    <>
      <Header />
      <section className="flex min-h-[calc(100vh-200px)] w-full items-center justify-center bg-neutral-50 py-16">
        <ContentWrapper className="mx-auto">
          <FlexBox asColumn className="items-center text-center">
            <Loader2Icon className="text-primary size-12 animate-spin" />
            <p className="text-muted-foreground text-lg font-medium">Yükleniyor...</p>
          </FlexBox>
        </ContentWrapper>
      </section>
    </>
  );
}