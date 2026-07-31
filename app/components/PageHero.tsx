import HeroMedia from "./HeroMedia";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  accent,
  text,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="hero-full hero-full-page">
      <HeroMedia images={[{ src: image, alt: imageAlt }]} />
      <div className="hero-full-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title} <span>{accent}</span>
        </h1>
        <p className="hero-full-text">{text}</p>
      </div>
    </section>
  );
}
