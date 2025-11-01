import React from "react";

import Link from "next/link";

import { ChevronsDownIcon } from "lucide-react";

import { Button } from "@/components/base/button";

import { ContentWrapper } from "@/components/content-wrapper";
import { FlexBox } from "@/components/flexbox";

function HeroSection() {
  return (
    <section className="relative min-h-[400px] md:min-h-[550px] w-full overflow-hidden text-white">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="from-primary/80 to-secondary/60 absolute inset-0 bg-linear-to-br"></div>

      {/* Content */}
      <ContentWrapper className="relative z-10 mx-auto flex min-h-[400px] md:min-h-[550px] items-center py-10 md:py-0">
        <FlexBox asColumn className="items-start gap-4 md:gap-6 pb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
            Her projede kalite
            <br />
            Her yapıda uzun ömür
          </h1>

          <p className="max-w-lg text-sm md:text-base text-wrap">
            Uzun Mühendislik olarak, sağlam temeller üzerine inşa edilen güvenilir projeler üretiyoruz. Her adımda
            kaliteyi ön planda tutuyor, uzun yıllar ayakta kalacak yapılarla geleceğe değer katıyoruz.
          </p>
        </FlexBox>
      </ContentWrapper>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <Button asChild className="rounded-full bg-white/20 p-3 backdrop-blur-sm hover:bg-white/30">
          <Link href="#hakkımızda" aria-label="Scroll down">
            <ChevronsDownIcon className="size-6 shrink-0" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export { HeroSection };
