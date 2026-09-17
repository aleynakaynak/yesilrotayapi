import HeroMedia from "./components/HeroMedia";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { mailtoHref, siteConfig, telHref, whatsappHref } from "./site-config";
import { projects, serviceCategories, services } from "./site-content";

const highlights = [
  {
    number: "01",
    title: "Kenet Çatı Sistemleri",
    description: "Profesyonel kenet çatı uygulamaları ve detay çözümleri",
    href: "/hizmetler/kenet-cati-uygulamalari",
  },
  {
    number: "02",
    title: "Cephe ve Kaplama",
    description: "Panel, Corten, kompozit ve giydirme cephe",
    href: "/hizmetlerimiz",
  },
  {
    number: "03",
    title: "Çelik Yapılar",
    description: "Ağır çelik ve kutu profil sistemleri",
    href: "/hizmetlerimiz",
  },
  {
    number: "04",
    title: "Yaşam Alanları",
    description: "Konut, villa ve bungalov projeleri",
    href: "/hizmetlerimiz",
  },
];

const categoryGroups = serviceCategories.map((category, index) => {
  const categoryServices = services.filter((service) => service.category === category);
  const cover =
    categoryServices.find((service) => !service.imageRepresentative && !service.imageConcept) ??
    categoryServices[0];

  return {
    index,
    category,
    count: categoryServices.length,
    image: cover.image,
    alt: cover.imageAlt,
    examples: categoryServices.slice(0, 4).map((service) => service.shortTitle),
    remaining: Math.max(0, categoryServices.length - 4),
  };
});

const featuredProjects = projects.filter((project) => !project.isConcept).slice(0, 6);

const process = [
  {
    number: "01",
    title: "İhtiyacı Dinliyoruz",
    text: "Yapının kullanım amacı, mevcut durumu ve beklenen sonucu netleştiriyoruz.",
  },
  {
    number: "02",
    title: "Keşif & Planlama",
    text: "Sahaya ve uygulamaya uygun malzeme ile iş programını belirliyoruz.",
  },
  {
    number: "03",
    title: "Saha Uygulaması",
    text: "Planlanan imalatı doğru detaylarla ve koordineli şekilde uyguluyoruz.",
  },
  {
    number: "04",
    title: "Kontrol & Teslim",
    text: "Uygulama detaylarını kontrol ederek işi düzenli biçimde teslim ediyoruz.",
  },
];

const hasContactInfo = Boolean(siteConfig.phone || siteConfig.whatsapp || siteConfig.email || siteConfig.address);

export default function Home() {
  return (
    <main>
      <SiteHeader activePath="/" />

      <section className="hero-full hero-full-home" id="anasayfa">
        <HeroMedia
          images={[
            {
              src: "/images/WhatsApp%20Image%202026-08-20%20at%2016.21.32.jpeg",
              alt: "Yeşil Rota Yapı büyük ölçekli kenet çatı uygulaması",
            },
            { src: "/images/hero.webp", alt: "Yeşil Rota Yapı tarafından uygulanan modern çatı ve cephe projesi" },
            { src: "/images/industrial-facade.webp", alt: "Endüstriyel yapı cephe uygulaması" },
          ]}
        />
        <div className="hero-full-content">
          <p className="eyebrow">KENET ÇATI · ÇATI · CEPHE · YAPI SİSTEMLERİ</p>
          <h1>
            Çatı, Cephe ve Yapı
            <span>Uygulamalarında</span>
            Güvenilir Çözümler
          </h1>
          <p className="hero-full-text">
            Kenet çatı başta olmak üzere; endüstriyel yapılardan konut ve villa
            projelerine kadar çatı, cephe, çelik ve tamamlayıcı yapı uygulamalarını
            tek noktadan planlıyor ve uyguluyoruz.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/hizmetler/kenet-cati-uygulamalari">
              Kenet Çatı Uygulamalarını İnceleyin <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="/hizmetlerimiz">
              Tüm Hizmetlerimiz
            </a>
          </div>
          <div className="hero-badges" aria-label="Öne çıkan bilgiler">
            <span>
              <strong>{services.length}</strong> uygulama alanı
            </span>
            <span>Proje bazlı çözümler</span>
            <span>Keşiften uygulamaya</span>
          </div>
        </div>
        <div className="hero-project-label">
          <span>Öne Çıkan Uygulama</span>
          <strong>Kenet Çatı Sistemleri</strong>
        </div>
      </section>

      <section className="highlight-strip" aria-label="Hizmet grupları">
        {highlights.map((item) => (
          <a href={item.href} className="highlight-item" key={item.number}>
            <span className="highlight-number">{item.number}</span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.description}</small>
            </span>
            <span className="highlight-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>

      <section className="services-section section-shell" id="hizmetler">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">HİZMETLERİMİZ</p>
            <h2>
              Yapının her aşaması için{" "}
              <span>uygulama çözümleri.</span>
            </h2>
          </div>
          <p>
            Çatı ve cepheden çelik taşıyıcı sistemlere, endüstriyel yapılardan
            yaşam alanlarına kadar {services.length} farklı uygulama alanında
            çözüm sunuyoruz.
          </p>
        </div>

        <div className="service-card-grid">
          {categoryGroups.map((group) => (
            <a
              className="service-card"
              key={group.category}
              href={`/hizmetlerimiz#kategori-${group.index + 1}`}
            >
              <div className="service-image">
                {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
                <img src={group.image} alt={group.alt} loading="lazy" width={640} height={480} />
                <span>{String(group.index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-card-copy">
                <h3>{group.category}</h3>
                <ul>
                  {group.examples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {group.remaining > 0 && <li>+{group.remaining} diğer hizmet</li>}
                </ul>
              </div>
            </a>
          ))}
        </div>

        <div className="services-cta">
          <a className="button button-primary" href="/hizmetlerimiz">
            Tüm Hizmetleri İnceleyin <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="projects-section" id="projeler">
        <div className="section-shell">
          <div className="section-heading light">
            <div>
              <p className="eyebrow">UYGULAMALARIMIZ</p>
              <h2>
                Sahadan{" "}
                <span>gerçek çalışmalar.</span>
              </h2>
            </div>
            <p>
              Farklı yapı tiplerinde hayata geçirilen çatı, cephe, kaplama ve
              güvenlik uygulamalarından seçkiler.
            </p>
          </div>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <figure
              className={`project-item project-item-${index + 1}`}
              key={`${project.title}-${index}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
              <img src={project.image} alt={project.title} loading="lazy" width={640} height={480} />
              <figcaption>
                <span>{project.category}</span>
                <strong>{project.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="section-shell projects-more">
          <a className="button button-secondary" href="/projelerimiz">
            Tüm Projeleri Görün <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="about-section section-shell" id="hakkimizda">
        <div className="about-image">
          {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
          <img
            src="/images/industrial-facade.webp"
            alt="Yeşil Rota Yapı endüstriyel yapı cephe uygulaması"
            loading="lazy"
            width={900}
            height={670}
          />
          <div>
            <strong>{services.length}</strong>
            <span>farklı uygulama alanı</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow dark">NEDEN YEŞİL ROTA YAPI?</p>
          <h2>
            Uygulamada netlik,{" "}
            <span>sonuçta güven.</span>
          </h2>
          <p>
            Yeşil Rota Yapı; çatı, cephe, çelik konstrüksiyon ve tamamlayıcı
            yapı uygulamalarını projenin ihtiyacına göre planlar. Malzeme
            seçiminden saha koordinasyonuna kadar süreci anlaşılır ve düzenli
            biçimde yönetmeyi hedefler.
          </p>
          <div className="about-points">
            <div>
              <span aria-hidden="true">01</span>
              <strong>İhtiyaca uygun çözüm</strong>
              <p>Her projeyi yapı tipi ve kullanım amacına göre ele alırız.</p>
            </div>
            <div>
              <span aria-hidden="true">02</span>
              <strong>Tek noktadan koordinasyon</strong>
              <p>Birbiriyle ilişkili uygulamaları aynı plan içinde yönetiriz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell">
          <div className="process-heading">
            <p className="eyebrow">NASIL ÇALIŞIYORUZ?</p>
            <h2>Keşiften teslimata dört net adım.</h2>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="iletisim">
        <div className="contact-copy">
          <p className="eyebrow">PROJENİZİ KONUŞALIM</p>
          <h2>
            Yapınız için doğru rotayı{" "}
            <span>birlikte belirleyelim.</span>
          </h2>
          <p>
            İhtiyacınızı ve projenizin temel bilgilerini paylaşın; uygun
            uygulama başlığı üzerinden ilerleyelim.
          </p>
        </div>
        <div className="contact-panel">
          <p>İLETİŞİM KANALLARI</p>
          {siteConfig.phone && (
            <div className="contact-row">
              <span>Telefon</span>
              <a href={telHref(siteConfig.phone)}>
                <strong>{siteConfig.phone}</strong>
              </a>
            </div>
          )}
          {siteConfig.whatsapp && (
            <div className="contact-row">
              <span>WhatsApp</span>
              <a href={whatsappHref(siteConfig.whatsapp)} target="_blank" rel="noreferrer">
                <strong>{siteConfig.whatsapp}</strong>
              </a>
            </div>
          )}
          {siteConfig.email && (
            <div className="contact-row">
              <span>E-posta</span>
              <a href={mailtoHref(siteConfig.email)}>
                <strong>{siteConfig.email}</strong>
              </a>
            </div>
          )}
          {siteConfig.address && (
            <div className="contact-row">
              <span>Adres</span>
              <strong>{siteConfig.address}</strong>
            </div>
          )}
          {!hasContactInfo && (
            <p className="contact-panel-note">
              İletişim bilgileri kısa süre içinde eklenecek. Bu sırada{" "}
              <a href="/iletisim">iletişim sayfasından</a> ulaşabilirsiniz.
            </p>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
