import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { serviceCategories, services } from "../site-content";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: `Çatı, cephe, çelik, endüstriyel yapı ve yaşam alanları için ${services.length} uygulama hizmeti.`,
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader activePath="/hizmetlerimiz" />
      <PageHero
        eyebrow={`${services.length} UYGULAMA ALANI`}
        title="Yapının her aşaması için"
        accent="uygulama çözümleri."
        text="Çatı ve cepheden çelik taşıyıcı sistemlere, endüstriyel yapılardan yaşam alanlarına kadar ihtiyaç duyulan uygulamaları tek bir çatı altında topluyoruz."
        image="/images/kenet-roof.webp"
        imageAlt="Kenet birleşimli metal çatı kaplamasının yakından görünümü"
      />

      <nav className="category-filter-bar" aria-label="Hizmet kategorileri">
        {serviceCategories.map((category, categoryIndex) => (
          <a key={category} href={`#kategori-${categoryIndex + 1}`}>
            {category}
          </a>
        ))}
      </nav>

      <section className="subpage-section service-directory">
        {serviceCategories.map((category, categoryIndex) => {
          const categoryServices = services.filter(
            (service) => service.category === category,
          );
          return (
            <div className="service-category" id={`kategori-${categoryIndex + 1}`} key={category}>
              <div className="service-category-heading">
                <span>{String(categoryIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{category}</h2>
                  <p>{categoryServices.length} hizmet</p>
                </div>
              </div>
              <div className="service-directory-grid">
                {categoryServices.map((service) => (
                  <a className="service-directory-card" href={`/hizmetler/${service.slug}`} key={service.slug}>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
                      <img src={service.image} alt={service.imageAlt} loading="lazy" />
                      {(service.imageRepresentative || service.imageConcept) && (
                        <span className="image-tag">
                          {service.imageConcept ? "Konsept Görsel" : "Temsili Görsel"}
                        </span>
                      )}
                    </div>
                    <span>{service.category}</span>
                    <h3>{service.shortTitle}</h3>
                    <p>{service.description}</p>
                    <strong>
                      Detayları İncele <i aria-hidden="true">↗</i>
                    </strong>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="subpage-cta">
        <div>
          <p className="eyebrow">HANGİ UYGULAMANIN UYGUN OLDUĞUNDAN EMİN DEĞİL MİSİNİZ?</p>
          <h2>Yapınızı ve ihtiyacınızı paylaşın, doğru başlığı birlikte belirleyelim.</h2>
        </div>
        <a className="button button-primary" href="/iletisim">
          Teklif Al <span aria-hidden="true">↗</span>
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
