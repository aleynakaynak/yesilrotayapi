import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ScrollTopButton from "./components/ScrollTopButton";
import WhatsAppButton from "./components/WhatsAppButton";
import { siteConfig } from "./site-config";

const manrope = Manrope({
  subsets: ["latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const defaultDescription =
  "Çatı, cephe, çelik konstrüksiyon ve yapı uygulamalarında ihtiyaca özel çözümler.";

export const metadata: Metadata = {
  ...(siteConfig.siteUrl ? { metadataBase: new URL(siteConfig.siteUrl) } : {}),
  title: {
    default: "Yeşil Rota Yapı | Çatı, Cephe ve Yapı Sistemleri",
    template: "%s | Yeşil Rota Yapı",
  },
  description: defaultDescription,
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [
      { url: "/brand/logo-mark.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body>
        {children}
        <WhatsAppButton />
        <ScrollTopButton />
      </body>
    </html>
  );
}
