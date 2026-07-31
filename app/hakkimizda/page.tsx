import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Yeşil Rota Yapı'nın çatı, cephe, çelik ve tamamlayıcı yapı uygulamalarındaki çalışma yaklaşımı.",
};

const process = [
  ["01", "İhtiyacı Dinliyoruz", "Yapının kullanım amacını, mevcut durumunu ve beklenen sonucu netleştiriyoruz."],
  ["02", "Keşif & Planlama", "Sahaya uygun malzemeyi, uygulama detaylarını ve iş sırasını belirliyoruz."],
  ["03", "Saha Uygulaması", "Planlanan imalatı koordineli ve kontrollü biçimde hayata geçiriyoruz."],
  ["04", "Kontrol & Teslim", "Uygulama detaylarını kontrol ederek işi düzenli biçimde teslim ediyoruz."],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader activePath="/hakkimizda" />
      <PageHero
        eyebrow="YEŞİL ROTA YAPI"
        title="Uygulamada netlik,"
        accent="sonuçta güven."
        text="Çatı, cephe, çelik konstrüksiyon ve tamamlayıcı yapı uygulamalarını projenin gerçek ihtiyacına göre planlıyor; süreci keşiften teslimata anlaşılır biçimde yönetiyoruz."
        image="/images/industrial-facade.webp"
        imageAlt="Yeşil Rota Yapı endüstriyel cephe uygulaması"
      />

      <section className="subpage-section split-story">
        <div>
          <p className="eyebrow dark">YAKLAŞIMIMIZ</p>
          <h2>Tek bir ürün değil, yapıya uygun çözüm.</h2>
        </div>
        <div className="story-copy">
          <p>
            Her yapının taşıyıcı sistemi, kullanım amacı, çevresel koşulları ve
            bütçesi farklıdır. Bu nedenle uygulama kararlarını hazır bir kalıba
            göre değil, projenin ihtiyaçlarına göre ele alıyoruz.
          </p>
          <p>
            Birbiriyle ilişkili çatı, cephe, çelik ve tamamlayıcı işleri aynı
            plan içinde değerlendirmek; sahadaki zaman ve detay kayıplarını
            azaltan daha düzenli bir süreç oluşturur.
          </p>
        </div>
      </section>

      <section className="values-band">
        <article>
          <span>01</span>
          <h3>Doğru uygulama</h3>
          <p>Malzeme ve sistem seçimini kullanım koşullarıyla birlikte değerlendiririz.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Net planlama</h3>
          <p>İş sırasını ve uygulama kapsamını başlangıçta anlaşılır hâle getiririz.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Saha koordinasyonu</h3>
          <p>Birbiriyle bağlantılı uygulamaları tek plan içinde takip ederiz.</p>
        </article>
      </section>

      <section className="subpage-section">
        <div className="subpage-heading">
          <p className="eyebrow dark">NASIL ÇALIŞIYORUZ?</p>
          <h2>Keşiften teslimata dört net adım.</h2>
        </div>
        <div className="process-grid process-grid-light">
          {process.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-cta">
        <div>
          <p className="eyebrow">PROJENİZİ KONUŞALIM</p>
          <h2>Yapınız için doğru rotayı birlikte belirleyelim.</h2>
        </div>
        <a className="button button-primary" href="/iletisim">
          İletişime Geç <span aria-hidden="true">↗</span>
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}

