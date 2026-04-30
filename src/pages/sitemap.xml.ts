import { getCollection } from "astro:content";
import { portfolioData } from "../data/portfolio";

export async function GET() {
  const siteUrl = "https://zerojumpone.com";

  const pages = [
    { path: "/", changefreq: "weekly", priority: 1.0 },
    { path: "/faqs", changefreq: "monthly", priority: 0.8 },
    { path: "/nuestra-historia", changefreq: "monthly", priority: 0.7 },
    { path: "/aviso-de-privacidad", changefreq: "yearly", priority: 0.3 },
    { path: "/construyendo", changefreq: "monthly", priority: 0.5 },
    { path: "/ejemplo-procesos", changefreq: "monthly", priority: 0.5 },
  ];

  const soluciones = portfolioData.map((item) => ({
    path: `/solucion/${item.slug}`,
    changefreq: "monthly",
    priority: 0.9,
  }));

  const posts = await getCollection("blog");
  const blog = posts.map((post) => ({
    path: `/blog/${post.slug}`,
    changefreq: "monthly",
    priority: 0.7,
  }));

  const allRoutes = [...pages, ...soluciones, ...blog];

  const urlEntries = allRoutes.map(({ path, changefreq, priority }) => {
    const url = `${siteUrl}${path}`;
    const lastmod = new Date().toISOString().split("T")[0];
    return `\n  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries.join("")}\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
