import React from "react";

import { FolderKanbanIcon, KeyIcon, LightbulbIcon, PencilRulerIcon, SearchIcon } from "lucide-react";

import { ContentWrapper } from "@/components/content-wrapper";
import { SectionHeader } from "@/components/section-header";

const servicesItems: {
  title: string;
  description: string;
  icon: React.JSX.Element;
}[] = [
  {
    title: "Proje Yönetimi",
    description:
      "İnşaatınız için gerekli tüm projeleri tek elden hazırlıyoruz. Böylece sürecinizi kolaylaştırıyor, zamandan ve maliyetten tasarruf etmenizi sağlıyoruz.",
    icon: <FolderKanbanIcon className="size-6 shrink-0 text-white" />,
  },
  {
    title: "Denetim",
    description:
      "Yapınızın proje ve yönetmeliklere uygun şekilde ilerleyip ilerlemediğini titizlikle kontrol ediyoruz. Amacımız, güvenli, sağlam ve uzun ömürlü yapılar elde etmenizi sağlamak.",
    icon: <SearchIcon className="size-6 shrink-0 text-white" />,
  },
  {
    title: "Teknik Danışmanlık",
    description:
      "Aklınızdaki tüm soru işaretlerini gideriyor, karşılaştığınız sorunlara en hızlı ve en doğru çözümleri sunuyoruz. Her aşamada yanınızda olup, size yol gösteriyoruz.",
    icon: <LightbulbIcon className="size-6 shrink-0 text-white" />,
  },
  {
    title: "Anahtar Teslim İnşaat",
    description:
      "Proje ve resmi prosedürlerden başlayarak oturum iznine kadar tüm süreci takip ediyoruz. Deneyimli ekibimizle inşaatınızı baştan sona uyguluyor, size yalnızca anahtarınızı teslim almanın rahatlığını yaşatıyoruz.",
    icon: <KeyIcon className="size-6 shrink-0 text-white" />,
  },
];

export function ServicesSection() {
  return (
    <section id="hizmetlerimiz" className="bg-gray-100 py-8 md:py-10">
      <ContentWrapper className="mx-auto flex flex-col items-center justify-start gap-6 md:gap-10">
        <SectionHeader title="Hizmetlerimiz" />

        <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 md:px-0 md:text-lg">
          İnşaat mühendisliği ve proje yönetimi alanında sunduğumuz profesyonel hizmetlerle projelerinizi güvenle
          tamamlayın. Her hizmetimiz, kalite ve güvenilirlik odaklıdır.
        </p>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {servicesItems.map((service, index) => (
            <div key={index} className="group border-primary/10 overflow-hidden rounded-xl border bg-white p-6 md:p-8">
              <div className="mb-4 flex items-center md:mb-6">
                <div className="bg-primary flex size-10 items-center justify-center rounded-md text-2xl text-white md:size-12">
                  {service.icon}
                </div>
                <h3 className="text-primary ml-3 text-lg font-bold md:ml-4 md:text-xl">{service.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}
