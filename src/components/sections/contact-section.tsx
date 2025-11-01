"use client";

import React from "react";

import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/base/button";

import { ContentWrapper } from "@/components/content-wrapper";
import { FlexBox } from "@/components/flexbox";
import { SectionHeader } from "@/components/section-header";

const contactDetailsItems: {
  icon: React.JSX.Element;
  title: string;
  detail: string;
  href: string;
}[] = [
  {
    icon: <MapPinIcon className="size-5 shrink-0 text-white" />,
    title: "Adres",
    detail: process.env.NEXT_PUBLIC_CONTACT_ADDRESS,
    href: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_LINK,
  },
  {
    icon: <PhoneIcon className="size-5 shrink-0 text-white" />,
    title: "Telefon",
    detail: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    href: "tel:" + process.env.NEXT_PUBLIC_CONTACT_PHONE,
  },
  {
    icon: <MailIcon className="size-5 shrink-0 text-white" />,
    title: "E-posta",
    detail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    href: "mailto:" + process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  },
];

function ContactSection() {
  return (
    <section id="bize-ulasin" className="from-primary via-primary bg-gradient-to-br to-[#042241] py-8 md:py-10">
      <ContentWrapper className="mx-auto flex flex-col items-center justify-start gap-6 md:gap-10">
        <SectionHeader title="Bize Ulaşın" color="white" />

        <div className="grid w-full gap-6 md:gap-8 md:grid-cols-2">
          {/* Contact Information Card */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
            <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-white">İletişim Bilgileri</h3>
            <div className="space-y-4 md:space-y-5">
              {contactDetailsItems.map((item) => (
                <FlexBox key={item.title} className="gap-3 md:gap-4">
                  <FlexBox className="bg-secondary size-8 md:size-9 shrink-0 justify-center rounded-md">{item.icon}</FlexBox>
                  <FlexBox asColumn className="items-start gap-0.5">
                    <div className="font-medium text-sm md:text-base text-white">{item.title}</div>
                    <a href={item.href} target="_blank" className="text-sm md:text-base text-wrap text-[#c7d2e0] hover:underline">
                      {item.detail}
                    </a>
                  </FlexBox>
                </FlexBox>
              ))}
            </div>
          </div>

          {/* WhatsApp Quick Contact Card */}
          <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
            <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-white">Hızlı İletişim</h3>
            <div className="flex flex-1 flex-col justify-center">
              <p className="mb-6 md:mb-8 text-sm md:text-base text-[#c7d2e0]">Sorularınız için WhatsApp üzerinden bize hemen ulaşabilirsiniz.</p>
              <Button
                asChild
                className="w-full bg-green-600 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold text-white shadow-lg shadow-gray-600/20 transition-all hover:bg-green-700">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <PhoneIcon className="size-4 md:size-5" />
                  WhatsApp ile İletişime Geç
                </a>
              </Button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}

export { ContactSection };
