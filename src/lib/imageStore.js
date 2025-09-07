// src/lib/imageStore.js
// Centralized, scalable image loader using Vite's import.meta.glob
//
// Folder structure (all .webp preferred, jpg/png supported):
// - src/assets/hero/*.webp
// - src/assets/highlights/*.webp
// - src/assets/portfolios/<category>/*.webp
// - src/assets/portfolios/<category>/meta.json (optional: { title, description })
// - src/assets/blogs/weddings/<slug>/cover.webp (optional)
// - src/assets/blogs/weddings/<slug>/*.webp
// - src/assets/blogs/weddings/<slug>/meta.json (optional: { title, description, venue })

// Vite import.meta.glob requires literal patterns; we inline the extensions.

function naturalSort(a, b) {
  const ax = [];
  const bx = [];
  a.replace(/(\d+)|(\D+)/g, (_, $1, $2) => ax.push([$1 || Infinity, $2 || ""]));
  b.replace(/(\d+)|(\D+)/g, (_, $1, $2) => bx.push([$1 || Infinity, $2 || ""]));
  while (ax.length && bx.length) {
    const an = ax.shift();
    const bn = bx.shift();
    const nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
    if (nn) return nn;
  }
  return ax.length - bx.length;
}

function toUrlMap(globResult) {
  return Object.keys(globResult)
    .sort(naturalSort)
    .map((key) => ({ path: key, url: globResult[key] }));
}

function titleCaseFromSlug(slug) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

// -------------- HERO --------------
export function getHeroImages() {
  const hero = import.meta.glob('../assets/hero/*.{webp,WEBP,webm,WEBM,avif,AVIF,jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, import: "default" });
  const urls = toUrlMap(hero).map((x) => x.url);
  if (urls.length) return urls;
  return [
    "/images/hero.jpg",
    "/images/grid/image1.jpg",
    "/images/grid/image2.jpg",
    "/images/grid/image3.jpg",
    "/images/grid/image4.jpg",
    "/images/grid/image5.jpg",
    "/images/grid/image6.jpg",
    "/images/grid/image7.jpg",
    "/images/grid/image8.jpg",
    "/images/grid/image9.jpg",
    "/images/grid/image10.jpg",
    "/images/grid/image11.jpg",
    "/images/grid/image12.jpg",
    "/images/grid/image13.jpg",
    "/images/grid/image14.jpg",
    "/images/grid/image15.jpg",
    "/images/grid/image16.jpg",
    "/images/grid/image17.jpg",
    "/images/grid/image18.jpg",
    "/images/grid/image19.jpg",
    "/images/grid/image20.jpg",
  ];
}

// -------------- HIGHLIGHTS --------------
export function getHighlights() {
  const highlights = import.meta.glob('../assets/highlights/*.{webp,WEBP,webm,WEBM,avif,AVIF,jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, import: "default" });
  const urls = toUrlMap(highlights).map((x) => x.url);
  if (urls.length) return urls;
  return [
    "/images/grid/image4.jpg",
    "/images/grid/image5.jpg",
    "/images/grid/image6.jpg",
    "/images/grid/image7.jpg",
    "/images/grid/image8.jpg",
    "/images/grid/image9.jpg",
  ];
}

// -------------- PORTFOLIO (basic) --------------
export function getPortfolioCategory(category) {
  // Vite requires a static pattern; glob all and filter by folder name
  const all = import.meta.glob('../assets/portfolios/*/*.{webp,WEBP,webm,WEBM,avif,AVIF,jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, import: "default" });
  const urls = Object.keys(all)
    .filter((p) => p.includes(`/portfolios/${category}/`))
    .sort(naturalSort)
    .map((p) => all[p]);
  if (urls.length) return urls;
  const fallbacks = {
    weddings: [
      "/images/grid/image1.jpg",
      "/images/grid/image2.jpg",
      "/images/grid/image3.jpg",
      "/images/grid/image4.jpg",
      "/images/grid/image5.jpg",
      "/images/grid/image6.jpg",
      "/images/grid/image7.jpg",
      "/images/grid/image8.jpg",
      "/images/grid/image9.jpg",
      "/images/grid/image10.jpg",
      "/images/grid/image11.jpg",
      "/images/grid/image12.jpg",
      "/images/grid/image13.jpg",
      "/images/grid/image14.jpg",
      "/images/grid/image15.jpg",
      "/images/grid/image16.jpg",
      "/images/grid/image17.jpg",
      "/images/grid/image18.jpg",
      "/images/grid/image19.jpg",
      "/images/grid/image20.jpg",
    ],
    artists: [
      "/images/grid/image9.jpg",
      "/images/grid/image10.jpg",
      "/images/grid/image11.jpg",
      "/images/grid/image12.jpg",
      "/images/grid/image13.jpg",
      "/images/grid/image14.jpg",
      "/images/grid/image15.jpg",
      "/images/grid/image16.jpg",
    ],
    family: [
      "/images/grid/image17.jpg",
      "/images/grid/image18.jpg",
      "/images/grid/image19.jpg",
      "/images/grid/image20.jpg",
      "/images/grid/image21.jpg",
      "/images/grid/image22.jpg",
      "/images/grid/image23.jpg",
      "/images/grid/image24.jpg",
    ],
    birthdays: [
      "/images/grid/image25.jpg",
      "/images/grid/image26.jpg",
      "/images/grid/image27.jpg",
      "/images/grid/image28.jpg",
      "/images/grid/image29.jpg",
      "/images/grid/image30.jpg",
      "/images/grid/image31.jpg",
      "/images/grid/image32.jpg",
    ],
  };
  return fallbacks[category] || [];
}

// -------------- PORTFOLIO (with meta) --------------
export function getPortfolioCategories() {
  const imgModules = import.meta.glob('../assets/portfolios/*/*.{webp,WEBP,webm,WEBM,avif,AVIF,jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, import: "default" });
  const metaModules = import.meta.glob(`../assets/portfolios/*/meta.json`, { eager: true, import: "default" });

  const byCat = new Map();
  Object.keys(imgModules).forEach((path) => {
    const m = path.match(/portfolios\/([^/]+)\//);
    if (!m) return;
    const slug = m[1];
    if (!byCat.has(slug)) byCat.set(slug, []);
    byCat.get(slug).push({ path, url: imgModules[path] });
  });

  const out = [];
  for (const [slug, arr] of byCat.entries()) {
    arr.sort((a, b) => naturalSort(a.path, b.path));
    const metaKey = Object.keys(metaModules).find((p) => p.includes(`/${slug}/`));
    const meta = metaKey ? metaModules[metaKey] : null;
    const cover = arr.find((x) => /cover\./i.test(x.path))?.url || arr[0]?.url || "";
    out.push({
      slug,
      title: meta?.title || titleCaseFromSlug(slug),
      description: meta?.description || "",
      cover,
      images: arr.map((x) => x.url),
    });
  }

  return out;
}

export function getPortfolioCategoryWithMeta(category) {
  const cats = getPortfolioCategories();
  const found = cats.find((c) => c.slug === category);
  if (found) return found;
  const images = getPortfolioCategory(category);
  return {
    slug: category,
    title: titleCaseFromSlug(category),
    description: "",
    cover: images[0] || "",
    images,
  };
}

// -------------- WEDDING BLOGS --------------
export function getWeddingBlogs() {
  const imgModules = import.meta.glob('../assets/blogs/weddings/*/*.{webp,WEBP,webm,WEBM,avif,AVIF,jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, import: "default" });
  const metaModules = import.meta.glob(`../assets/blogs/weddings/*/meta.json`, { eager: true, import: "default" });

  const bySlug = new Map();
  Object.keys(imgModules).forEach((path) => {
    const m = path.match(/blogs\/weddings\/([^/]+)\//);
    if (!m) return;
    const slug = m[1];
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push({ path, url: imgModules[path] });
  });

  const out = [];
  for (const [slug, arr] of bySlug.entries()) {
    arr.sort((a, b) => naturalSort(a.path, b.path));
    const metaKey = Object.keys(metaModules).find((p) => p.includes(`/${slug}/`));
    const meta = metaKey ? metaModules[metaKey] : null;
    const cover = arr.find((x) => /cover\./i.test(x.path))?.url || arr[0]?.url;
    out.push({
      slug,
      title: meta?.title || titleCaseFromSlug(slug),
      description: meta?.description || "",
      venue: meta?.venue || "",
      cover,
      images: arr.map((x) => x.url),
    });
  }

  if (out.length) return out;

  // Fallback seed data
  return [
    {
      title: "Aparna & Rahul",
      slug: "aparna-and-rahul",
      cover: "/images/grid/image8.jpg",
      description: "Elegant garden ceremony with timeless romance",
      venue: "Garden Venue, San Francisco",
      images: [
        "/images/grid/image1.jpg",
        "/images/grid/image2.jpg",
        "/images/grid/image3.jpg",
        "/images/grid/image4.jpg",
        "/images/grid/image5.jpg",
        "/images/grid/image6.jpg",
        "/images/grid/image7.jpg",
        "/images/grid/image8.jpg",
        "/images/grid/image9.jpg",
        "/images/grid/image10.jpg",
        "/images/grid/image11.jpg",
        "/images/grid/image12.jpg",
      ],
    },
    {
      title: "Sneha & Akshay",
      slug: "sneha-and-akshay",
      cover: "/images/grid/image9.jpg",
      description: "Urban chic wedding with industrial charm",
      venue: "Industrial Loft, San Francisco",
      images: [
        "/images/grid/image13.jpg",
        "/images/grid/image14.jpg",
        "/images/grid/image15.jpg",
        "/images/grid/image16.jpg",
        "/images/grid/image17.jpg",
        "/images/grid/image18.jpg",
        "/images/grid/image19.jpg",
        "/images/grid/image20.jpg",
      ],
    },
    {
      title: "Florencia's Wedding Dress",
      slug: "florencias-wedding-dress",
      cover: "/images/grid/image10.jpg",
      description: "Elegant bridal details and timeless beauty",
      venue: "Bridal Studio, San Francisco",
      images: [
        "/images/grid/image4.jpg",
        "/images/grid/image5.jpg",
        "/images/grid/image6.jpg",
        "/images/grid/image7.jpg",
        "/images/grid/image8.jpg",
        "/images/grid/image9.jpg",
        "/images/grid/image10.jpg",
        "/images/grid/image11.jpg",
        "/images/grid/image12.jpg",
        "/images/grid/image13.jpg",
        "/images/grid/image14.jpg",
        "/images/grid/image15.jpg",
      ],
    },
  ];
}

export function getWeddingBlogBySlug(slug) {
  const blogs = getWeddingBlogs();
  return blogs.find((b) => b.slug === slug);
}
