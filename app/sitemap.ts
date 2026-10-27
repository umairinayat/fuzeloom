import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const routes = [
    "",
    "/services",
    "/industries",
    "/work",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...work.map((project) => `/work/${project.slug}`),
  ];
  return routes.map((r) => ({
    url: `${base}${r || "/"}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
