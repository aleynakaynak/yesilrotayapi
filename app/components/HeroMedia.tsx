"use client";

import { useEffect, useState } from "react";

export type HeroImage = {
  src: string;
  alt: string;
};

type HeroMediaProps = {
  images: HeroImage[];
};

const SLIDE_INTERVAL_MS = 6500;

export default function HeroMedia({ images }: HeroMediaProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <>
      <div className="hero-full-media">
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element -- next/image's optimizer isn't supported on this Cloudflare/vinext runtime
          <img
            key={image.src}
            src={image.src}
            alt={index === active ? image.alt : ""}
            aria-hidden={index === active ? undefined : true}
            className={index === active ? "is-active" : undefined}
            loading={index === 0 ? undefined : "lazy"}
          />
        ))}
      </div>
      <div className="hero-full-overlay" />
    </>
  );
}
