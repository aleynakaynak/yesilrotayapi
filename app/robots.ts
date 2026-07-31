import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.siteUrl) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  const base = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
