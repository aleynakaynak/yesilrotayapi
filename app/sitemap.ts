import type { MetadataRoute } from "next";
import { services } from "./site-content";
import { siteConfig } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) {
    return [];
  }

  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const staticPaths = ["/", "/hakkimizda", "/hizmetlerimiz", "/projelerimiz", "/iletisim"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/hizmetler/${service.slug}`,
  }));

  return [...staticEntries, ...serviceEntries];
}
