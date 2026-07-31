import BrandLogo from "./BrandLogo";
import { mailtoHref, siteConfig, telHref } from "../site-config";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="footer-col footer-brand-col">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- next/link isn't supported on this Cloudflare/vinext runtime */}
          <a className="brand footer-brand" href="/">
            <BrandLogo variant="footer" />
          </a>
          <p className="footer-description">
            Çatı, cephe, çelik konstrüksiyon ve tamamlayıcı yapı
            uygulamalarında ihtiyaca özel çözümler.
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Hızlı Bağlantılar</span>
          <nav aria-label="Alt menü">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- next/link isn't supported on this Cloudflare/vinext runtime */}
            <a href="/">Ana Sayfa</a>
            <a href="/hakkimizda">Hakkımızda</a>
            <a href="/hizmetlerimiz">Hizmetlerimiz</a>
            <a href="/projelerimiz">Projelerimiz</a>
            <a href="/iletisim">İletişim</a>
          </nav>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Hizmet Kategorileri</span>
          <nav aria-label="Hizmet kategorileri">
            <a href="/hizmetlerimiz#kategori-1">Çatı Uygulamaları</a>
            <a href="/hizmetlerimiz#kategori-2">Cephe ve Kaplama</a>
            <a href="/hizmetlerimiz#kategori-3">Çelik ve Endüstriyel Yapılar</a>
            <a href="/hizmetlerimiz#kategori-4">Konut ve Yaşam Alanları</a>
          </nav>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">İletişim</span>
          <div className="footer-contact">
            {siteConfig.phone && <a href={telHref(siteConfig.phone)}>{siteConfig.phone}</a>}
            {siteConfig.email && <a href={mailtoHref(siteConfig.email)}>{siteConfig.email}</a>}
            {siteConfig.address && <span>{siteConfig.address}</span>}
            {!siteConfig.phone && !siteConfig.email && !siteConfig.address && (
              <a href="/iletisim">İletişim sayfasına git</a>
            )}
          </div>
        </div>

        <p className="footer-copyright">© {year} Yeşil Rota Yapı. Tüm hakları saklıdır.</p>
      </footer>

      <a className="mobile-fixed-cta" href="/iletisim">
        Teklif Al <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
