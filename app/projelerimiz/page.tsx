import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { projectCategories, projects } from "../site-content";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "Yeşil Rota Yapı çatı, cephe, kaplama, çelik ve teknik uygulama çalışmalarından seçkiler.",
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader activePath="/projelerimiz" />
      <PageHero
        eyebrow="UYGULAMALARIMIZ"
        title="Sahadan"
        accent="gerçek çalışmalar."
        text="Farklı yapı tiplerinde hayata geçirilen çatı, cephe, kaplama, çelik ve güvenlik uygulamalarımızdan seçilmiş örnekler."
        image="/images/hero.webp"
        imageAlt="Standing seam metal çatılı modern yapı"
      />

      <nav className="category-filter-bar" aria-label="Proje kategorileri">
        <a href="#tum-projeler" className="is-active">
          Tümü
        </a>
        {projectCategories.map((category) => (
          <a key={category} href={`#${slugify(category)}`}>
            {category}
          </a>
        ))}
      </nav>

      <section className="subpage-section projects-page" id="tum-projeler">
        <div className="subpage-heading">
          <p className="eyebrow dark">PROJE SEÇKİSİ</p>
          <h2>Farklı yapılara, farklı uygulama çözümleri.</h2>
        </div>

        {projectCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div className="project-category-block" id={slugify(category)} key={category}>
              <h3>{category}</h3>
              <div className="projects-masonry">
                {categoryProjects.map((project, index) => (
                  <figure className="project-tile" key={`${project.title}-${index}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime */}
                    <img src={project.image} alt={project.title} loading="lazy" width={640} height={480} />
                    {project.isConcept && <span className="image-tag">Konsept Görsel</span>}
                    <figcaption>
                      <span>{project.category}</span>
                      <strong>{project.title}</strong>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="subpage-cta">
        <div>
          <p className="eyebrow">YENİ PROJENİZ İÇİN</p>
          <h2>İhtiyacınızı paylaşın, uygulama kapsamını birlikte planlayalım.</h2>
        </div>
        <a className="button button-primary" href="/iletisim">
          Teklif Al <span aria-hidden="true">↗</span>
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}

function slugify(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
