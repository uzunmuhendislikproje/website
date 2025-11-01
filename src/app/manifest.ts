import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Uzun Mühendislik",
    short_name: "Uzun Mühendislik",
    description: "Gelibolu'da güvenilir inşaat mühendisliği hizmetleri. Yapı denetimi, proje yönetimi ve mühendislik çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#072142",
    theme_color: "#072142",
    icons: [
      {
        src: "/images/uzun-muhendislik-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
