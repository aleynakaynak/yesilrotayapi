import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroMedia from "../../components/HeroMedia";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { services } from "../../site-content";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const serviceGalleries: Record<string, string[]> = {
  "kenet-cati-uygulamalari": [
    "WhatsApp Image 2026-08-20 at 14.45.09 (2).jpeg",
    "WhatsApp Image 2026-08-20 at 14.45.09 (3).jpeg",
    "WhatsApp Image 2026-08-20 at 14.45.10 (1).jpeg",
    "WhatsApp Image 2026-08-20 at 14.45.10.jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.30.jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.31 (1).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.31.jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.32.jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.33.jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.34 (1).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.34 (2).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.34 (3).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.34 (4).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.34 (5).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.34 (6).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.34.jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.35 (1).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.35 (2).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.35 (3).jpeg",
    "WhatsApp Image 2026-08-20 at 16.21.35.jpeg",
  ].map((fileName) => `/images/${encodeURIComponent(fileName)}`),
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const related = services
    .filter((item) => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3);

  const gallery = serviceGalleries[service.slug];

  return (
    <main>
      <SiteHeader activePath="/hizmetlerimiz" />
      <section className="hero-full hero-full-detail">
        <HeroMedia images={[{ src: service.image, alt: service.imageAlt }]} />
        <div className="hero-full-content">
          <nav className="breadcrumb" aria-label="Sayfa yolu">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- next/link isn't supported on this Cloudflare/vinext runtime */}
            <a href="/">Ana Sayfa</a>
            <span>/</span>
            <a href="/hizmetlerimiz">Hizmetlerimiz</a>
            <span>/</span>
            <strong>{service.shortTitle}</strong>
          </nav>
          <p className="eyebrow">{service.category.toUpperCase()}</p>
          <h1>{service.title}</h1>
          <p className="hero-full-text">{service.description}</p>
          <a className="button button-primary" href="/iletisim">
            Bu Hizmet İçin Teklif Al <span aria-hidden="true">↗</span>
          </a>
        </div>
        {(service.imageRepresentative || service.imageConcept) && (
          <span className="image-tag">
            {service.imageConcept ? "Konsept Görsel" : "Temsili Görsel"}
          </span>
        )}
      </section>

      <section className="subpage-section service-detail-body">
        <div>
          <p className="eyebrow dark">UYGULAMA KAPSAMI</p>
          <h2>Projenin ihtiyacına göre planlanan uygulama.</h2>
          <p>{service.scope}</p>
        </div>
        <aside>
          <span>Uygun kullanım alanları</span>
          <ul>
            {service.uses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </aside>
      </section>

      {gallery && (
        <section className="subpage-section service-gallery">
          <div className="subpage-heading">
            <p className="eyebrow dark">SAHADAN</p>
            <h2>{service.shortTitle} uygulama fotoğrafları.</h2>
          </div>
          <div className="projects-masonry">
            {gallery.map((src, index) => (
              <figure className="project-tile" key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
                <img
                  src={src}
                  alt={`${service.shortTitle} uygulaması ${index + 1}`}
                  loading="lazy"
                  width={640}
                  height={480}
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="detail-steps">
        <div>
          <span>01</span>
          <h3>İhtiyaç tespiti</h3>
          <p>Yapı tipi, ölçüler ve beklenen sonuç netleştirilir.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Detaylandırma</h3>
          <p>Malzeme, birleşim ve uygulama sırası planlanır.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Uygulama & kontrol</h3>
          <p>Saha uygulaması tamamlanır ve detaylar kontrol edilir.</p>
        </div>
      </section>

      <section className="subpage-section service-faq">
        <div className="subpage-heading">
          <p className="eyebrow dark">SIK SORULAN SORULAR</p>
          <h2>{service.shortTitle} hakkında merak edilenler.</h2>
        </div>
        <div className="faq-list">
          {service.faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                <span>{faq.q}</span>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="subpage-section related-services">
          <div className="subpage-heading">
            <p className="eyebrow dark">İLGİLİ HİZMETLER</p>
            <h2>Aynı uygulama grubundaki diğer çözümler.</h2>
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <a href={`/hizmetler/${item.slug}`} key={item.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
                <img src={item.image} alt="" loading="lazy" />
                <span>{item.category}</span>
                <h3>{item.shortTitle}</h3>
                <strong>İncele ↗</strong>
              </a>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
