import React from "react";

import { CheckIcon } from "lucide-react";

import { ContentWrapper } from "@/components/content-wrapper";
import { FlexBox } from "@/components/flexbox";
import { SectionHeader } from "@/components/section-header";

const rightSectionItems: { title: string; description: string }[] = [
  {
    title: "Uzun Ömürlü Yapılar",
    description: "Projelerimizde kalıcılık, sağlamlık ve güven önceliğimiz",
  },
  {
    title: "Modern Teknoloji",
    description: "En güncel yazılımlar ve yöntemlerle, size en uygun çözümleri sunuyoruz",
  },
  {
    title: "Sizi Dinliyoruz",
    description:
      "Her aşamada sizinle iletişimdeyiz, sorularınızı yanıtlıyoruz ve ihtiyaçlarınıza özel çözümler üretiyoruz",
  },
];

function AboutSection() {
  return (
    <section id="hakkımızda" className="bg-white py-8 md:py-10">
      <ContentWrapper className="mx-auto flex flex-col items-center justify-start gap-6 md:gap-10">
        <SectionHeader title="Hakkımızda" />

        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2 w-full">
          <div className="space-y-3">
            <h3 className="text-primary text-lg md:text-xl font-semibold">Güvenle Başlayan, Uzun Ömürlü Yapılar</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Uzun Mühendislik olarak, sağlam temeller üzerine inşa edilen güvenilir projeler üretiyoruz. Her adımda
              sizin ihtiyaçlarınızı ve kaliteyi ön planda tutuyor; sadece bugünü değil, geleceği de düşünerek uzun
              ömürlü ve güvenli yapılar inşa ediyoruz.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Her yapı bizim için bir değer; sadece bir proje değil, yıllar boyunca sizinle olacak bir güven kaynağı.
              Modern teknolojiyi ve mühendislik bilgimizi birleştirerek size özel çözümler üretiyoruz.
            </p>
          </div>

          <div className="from-primary/5 to-secondary/5 border-primary/10 space-y-4 md:space-y-6 rounded-lg border bg-linear-to-br p-6 md:p-8">
            <h4 className="text-primary text-lg font-semibold">Neden Uzun Mühendislik?</h4>
            <FlexBox asColumn className="items-start gap-5">
              {rightSectionItems.map((item) => (
                <FlexBox key={item.title} className="flex items-start gap-4">
                  <FlexBox className="bg-primary size-8 shrink-0 justify-center rounded-full">
                    <CheckIcon className="size-5 shrink-0 text-white" />
                  </FlexBox>
                  <div>
                    <div className="text-primary font-medium">{item.title}</div>
                    <div className="text-muted-foreground text-sm text-wrap">{item.description}</div>
                  </div>
                </FlexBox>
              ))}
            </FlexBox>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}

export { AboutSection };
