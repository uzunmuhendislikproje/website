import React from "react";

import type { Metadata } from "next";

import { getOrganizationSchema } from "@/data/metadata";
import type { WrapperProps } from "@/globals";
import "@/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Uzun Mühendislik",
    default: "Uzun Mühendislik",
  },
};

export default function RootLayout({ children }: Pick<WrapperProps, "children">) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Uzun Mühendislik - Gelibolu'da güvenilir inşaat mühendisliği hizmetleri. Yapı denetimi, proje yönetimi ve mühendislik çözümleri konusunda hizmetinizdeyiz."
        />
        <meta
          name="keywords"
          content="inşaat mühendisliği, yapı denetimi, proje yönetimi, mühendislik hizmetleri, gelibolu, çanakkale, yapı güvenliği, teknik kontrolör, inşaat danışmanlığı"
        />
        <meta name="author" content="Uzun Mühendislik" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
