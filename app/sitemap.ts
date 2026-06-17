import { MetadataRoute } from "next";
import { getServices } from "@/lib/woocommerce";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://housespa.mx";
  const allServices = await getServices();

  // Static routes map
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service details map
  const serviceRoutes = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
