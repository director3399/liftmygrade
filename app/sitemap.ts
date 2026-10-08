import { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const BASE_URL = "https://www.liftmygrade.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/career-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-we-work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/readiness-assessment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/what-to-expect`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => {
    let lastModified = new Date();
    if (blog.date) {
      const parsedDate = new Date(blog.date);
      if (!isNaN(parsedDate.getTime())) {
        lastModified = parsedDate;
      }
    }

    return {
      url: `${BASE_URL}/blogs/${blog.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
