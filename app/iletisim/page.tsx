import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { mailtoHref, siteConfig, telHref, whatsappHref } from "../site-config";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Çatı, cephe ve yapı uygulamaları için Yeşil Rota Yapı ile iletişime geçin.",
};

const contactItems = [
  {
    key: "phone" as const,
    label: "TELEFON",
    value: siteConfig.phone,
    href: siteConfig.phone ? telHref(siteConfig.phone) : undefined,
  },
  {
    key: "whatsapp" as const,
    label: "WHATSAPP",
    value: siteConfig.whatsapp,
    href: siteConfig.whatsapp ? whatsappHref(siteConfig.whatsapp) : undefined,
    external: true,
  },
  {
    key: "email" as const,
    label: "E-POSTA",
    value: siteConfig.email,
    href: siteConfig.email ? mailtoHref(siteConfig.email) : undefined,
  },
  {
    key: "address" as const,
    label: "ADRES",
    value: siteConfig.address,
  },
].filter((item) => item.value);

export default function ContactPage() {
  return (
    <main>
      <SiteHeader activePath="/iletisim" />
      <section className="contact-page-hero">
        <div>
          <p className="eyebrow">PROJENİZİ KONUŞALIM</p>
          <h1>
            Yapınız için doğru rotayı <span>birlikte belirleyelim.</span>
          </h1>
          <p>
            Projenizin yeri, yapı tipi, yaklaşık ölçüleri ve ihtiyaç duyduğunuz
            uygulamayı paylaşın; size en uygun teklif sürecini birlikte
            planlayalım.
          </p>
        </div>
      </section>

      <section className="contact-page-grid">
        <div className="contact-info-stack">
          {contactItems.length > 0 ? (
            contactItems.map((item, index) => (
              <article key={item.key}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{item.label}</small>
                {item.href ? (
                  <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
                    <strong>{item.value}</strong>
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </article>
            ))
          ) : (
            <article>
              <span>01</span>
              <small>İLETİŞİM BİLGİLERİ</small>
              <strong>Yakında eklenecek</strong>
            </article>
          )}
        </div>

        <div className="contact-prep">
          <p className="eyebrow dark">TEKLİF İÇİN HAZIRLAYABİLECEĞİNİZ BİLGİLER</p>
          <h2>İlk görüşmeyi hızlandıran dört bilgi.</h2>
          <ul>
            <li><span>01</span> Projenin bulunduğu şehir ve ilçe</li>
            <li><span>02</span> Yapının türü ve mevcut durumu</li>
            <li><span>03</span> Yaklaşık uygulama alanı veya ölçüler</li>
            <li><span>04</span> Varsa fotoğraf, çizim veya keşif notu</li>
          </ul>
          {contactItems.length === 0 && (
            <p className="contact-note">
              İletişim kanalları kısa süre içinde bu sayfaya eklenecek.
            </p>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
