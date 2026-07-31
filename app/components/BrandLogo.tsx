type BrandLogoProps = {
  variant?: "header" | "footer";
};

export default function BrandLogo({ variant = "header" }: BrandLogoProps) {
  return (
    <span className={`brand-logo-group brand-logo-group-${variant}`}>
      <span className="brand-logo-icon-frame">
        {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
        <img
          className="brand-logo-icon"
          src="/brand/logo-mark.png"
          alt=""
          width={98}
          height={168}
        />
      </span>
      <span className="brand-copy">
        <strong>YEŞİL ROTA YAPI</strong>
        <small>Çatı, Cephe ve Yapı Sistemleri</small>
      </span>
    </span>
  );
}
