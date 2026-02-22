import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const DATA = join(ROOT, "src", "data");

const BASE_URL = "https://redstarhuts.com";
const URLS_PER_SITEMAP = 50000;
const TODAY = new Date().toISOString().split("T")[0];

function extractSlugs(filePath, arrayName) {
  const content = readFileSync(filePath, "utf-8");
  const slugRegex = new RegExp(`slug:\\s*["']([^"']+)["']`, "g");
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function xmlHeader() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n`;
}

function buildUrlEntry(url, lastmod, changefreq, priority) {
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}

function buildSitemapXml(urls) {
  let xml = xmlHeader();
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const u of urls) {
    xml += buildUrlEntry(u.url, u.lastmod, u.changefreq, u.priority);
  }
  xml += `</urlset>\n`;
  return xml;
}

function buildSitemapIndex(sitemapUrls) {
  let xml = xmlHeader();
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const s of sitemapUrls) {
    xml += `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>\n`;
  }
  xml += `</sitemapindex>\n`;
  return xml;
}

const staticPages = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/properties", changefreq: "daily", priority: "0.9" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/services/property-sales", changefreq: "monthly", priority: "0.7" },
  { path: "/services/buyer-advisory", changefreq: "monthly", priority: "0.7" },
  {
    path: "/services/investment-consulting",
    changefreq: "monthly",
    priority: "0.7",
  },
  { path: "/services/market-research", changefreq: "monthly", priority: "0.7" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/dholera-smart-city-plots-for-sale", changefreq: "weekly", priority: "0.9" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "/legal-disclaimer", changefreq: "yearly", priority: "0.3" },
];

const propertySlugs = extractSlugs(join(DATA, "properties.ts"));
const blogSlugs = extractSlugs(join(DATA, "blogs.ts"));

console.log(
  `Found ${propertySlugs.length} properties, ${blogSlugs.length} blogs`,
);

const staticXml = buildSitemapXml(
  staticPages.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastmod: TODAY,
    changefreq: p.changefreq,
    priority: p.priority,
  })),
);
writeFileSync(join(PUBLIC, "sitemap-static.xml"), staticXml);
console.log("Generated sitemap-static.xml");

const propertyChunks = [];
for (let i = 0; i < propertySlugs.length; i += URLS_PER_SITEMAP) {
  propertyChunks.push(propertySlugs.slice(i, i + URLS_PER_SITEMAP));
}
if (propertyChunks.length === 0) propertyChunks.push([]);

propertyChunks.forEach((chunk, idx) => {
  const suffix = propertyChunks.length > 1 ? `-${idx + 1}` : "";
  const filename = `sitemap-properties${suffix}.xml`;
  const xml = buildSitemapXml(
    chunk.map((slug) => ({
      url: `${BASE_URL}/properties/${slug}`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: "0.9",
    })),
  );
  writeFileSync(join(PUBLIC, filename), xml);
  console.log(`Generated ${filename} (${chunk.length} URLs)`);
});

const blogXml = buildSitemapXml(
  blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.7",
  })),
);
writeFileSync(join(PUBLIC, "sitemap-blogs.xml"), blogXml);
console.log(`Generated sitemap-blogs.xml (${blogSlugs.length} URLs)`);

const sitemapFiles = [
  { loc: `${BASE_URL}/sitemap-static.xml`, lastmod: TODAY },
];
propertyChunks.forEach((_, idx) => {
  const suffix = propertyChunks.length > 1 ? `-${idx + 1}` : "";
  sitemapFiles.push({
    loc: `${BASE_URL}/sitemap-properties${suffix}.xml`,
    lastmod: TODAY,
  });
});
sitemapFiles.push({ loc: `${BASE_URL}/sitemap-blogs.xml`, lastmod: TODAY });

const indexXml = buildSitemapIndex(sitemapFiles);
writeFileSync(join(PUBLIC, "sitemap.xml"), indexXml);
console.log(`Generated sitemap.xml (index with ${sitemapFiles.length} sitemaps)`);

console.log("Sitemap generation complete!");
