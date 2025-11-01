import React from "react";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";

import { ContentWrapper } from "@/components/content-wrapper";
import { FlexBox } from "@/components/flexbox";
import { Header } from "@/components/header";

export default function RootPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />

      <footer className="bg-[#031329] py-6 text-white">
        <ContentWrapper className="mx-auto">
          <FlexBox className="flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <img
              src="/images/uzun-muhendislik-logo.png"
              alt="Uzun Mühendislik Logo"
              className="h-10 md:h-12 w-auto brightness-0 invert"
            />

            <div className="text-lighter-foreground text-center text-sm md:text-base">
              &copy; 2024 Uzun Mühendislik. Tüm hakları saklıdır.
            </div>
          </FlexBox>
        </ContentWrapper>
      </footer>
    </>
  );
}
