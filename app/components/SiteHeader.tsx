import BrandLogo from "./BrandLogo";

const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Projelerimiz", href: "/projelerimiz" },
  { label: "İletişim", href: "/iletisim" },
];

type SiteHeaderProps = {
  activePath?: string;
};

export default function SiteHeader({ activePath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- next/link isn't supported on this Cloudflare/vinext runtime */}
      <a className="brand" href="/" aria-label="Yeşil Rota Yapı ana sayfa">
        <BrandLogo variant="header" />
      </a>

      <nav className="desktop-nav" aria-label="Ana menü">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={activePath === item.href ? "page" : undefined}
            className={activePath === item.href ? "is-active" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="/iletisim">
        Teklif Al <span aria-hidden="true">↗</span>
      </a>

      <details className="mobile-nav" style={{ position: "relative", zIndex: 1000 }}>
        <summary aria-label="Menüyü aç">
          <span />
          <span />
          <span />
        </summary>
        <nav
          aria-label="Mobil menü"
          style={{
            position: "fixed",
            top: "72px",
            right: "16px",
            left: "16px",
            zIndex: 1001,
            width: "auto",
            maxHeight: "calc(100vh - 88px)",
            overflowY: "auto",
          }}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activePath === item.href ? "page" : undefined}
              className={activePath === item.href ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="mobile-menu-cta" href="/iletisim">
            Teklif Al
          </a>
        </nav>
      </details>
    </header>
  );
}
