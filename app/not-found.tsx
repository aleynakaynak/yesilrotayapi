import type { Metadata } from "next";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı.",
};

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="not-found-section">
        <p className="eyebrow dark">404</p>
        <h1>Aradığınız sayfa bulunamadı.</h1>
        <p>
          Bağlantı hatalı olabilir veya sayfa taşınmış olabilir. Aşağıdaki
          bağlantılardan devam edebilirsiniz.
        </p>
        <div className="not-found-links">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- next/link isn't supported on this Cloudflare/vinext runtime */}
          <a className="button button-primary" href="/">
            Ana Sayfaya Dön
          </a>
          <a className="button button-secondary" href="/hizmetlerimiz">
            Hizmetlerimiz
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
