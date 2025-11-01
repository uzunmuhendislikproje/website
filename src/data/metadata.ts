import type { LocalBusiness } from "schema-dts";

export function getOrganizationSchema(): LocalBusiness {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    "@type": "LocalBusiness",
    name: "Uzun Mühendislik ve Proje Tasarım",
    description:
      "Gelibolu'da güvenilir inşaat mühendisliği hizmetleri. Yapı denetimi, proje tasarımı, proje yönetimi ve mühendislik çözümleri konusunda hizmetinizdeyiz.",
    ...(baseUrl && { url: baseUrl }),
    ...(baseUrl && { logo: `${baseUrl}/images/uzun-muhendislik-logo.png` }),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gelibolu",
      addressRegion: "Çanakkale",
      addressCountry: "TR",
    },
    knowsAbout: [
      "Proje Yönetimi",
      "Proje Tasarımı",
      "Yapı Denetimi",
      "Teknik Danışmanlık",
      "Anahtar Teslim İnşaat",
      "Mühendislik Hizmetleri",
    ],
  };
}
