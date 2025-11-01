"use client";

import React from "react";

import Link from "next/link";

import { AlertCircleIcon, HomeIcon } from "lucide-react";

import { Button } from "@/components/base/button";

import { ContentWrapper } from "@/components/content-wrapper";
import { FlexBox } from "@/components/flexbox";
import { Header } from "@/components/header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <section className="flex min-h-[calc(100vh-200px)] w-full items-center justify-center bg-neutral-50 py-16">
        <ContentWrapper className="mx-auto">
          <FlexBox asColumn className="items-center gap-6 text-center">
            <div className="bg-primary/10 flex size-20 items-center justify-center rounded-full">
              <AlertCircleIcon className="text-primary size-10" />
            </div>

            <div className="space-y-1">
              <h1 className="text-primary text-3xl font-bold md:text-4xl">Bir Hata Oluştu</h1>
              <p className="text-muted-foreground max-w-md text-base md:text-lg">
                Üzgünüz, beklenmeyen bir hata oluştu.
              </p>
            </div>

            <Button
              asChild
              className="from-primary to-secondary bg-linear-to-br px-6 py-2.5 text-white hover:opacity-90">
              <Link href="/">
                <HomeIcon className="mr-2 size-4" />
                Ana Sayfaya Dön
              </Link>
            </Button>
          </FlexBox>
        </ContentWrapper>
      </section>
    </>
  );
}
