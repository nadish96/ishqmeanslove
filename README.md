# Nadish Sood — Photo Portfolio

Frontend built with React + Vite + Tailwind.

Images are hosted in-repo under `src/assets/**` and auto‑discovered at build time via Vite `import.meta.glob`. No manual arrays; adding/removing files updates the UI on next dev refresh/build.

## Image Folders

- Hero: `src/assets/hero/*.{webp,jpg,jpeg,png,avif}`
- Highlights (optional): `src/assets/highlights/*.{...}`
- Portfolios: `src/assets/portfolios/<category>/*.{...}`
  - Optional per‑category meta: `src/assets/portfolios/<category>/meta.json`
  - Optional cover image: `src/assets/portfolios/<category>/cover.*`
- Wedding Blogs: `src/assets/blogs/weddings/<slug>/*.{...}`
  - Optional meta per blog: `src/assets/blogs/weddings/<slug>/meta.json`
  - Optional cover image: `src/assets/blogs/weddings/<slug>/cover.*`

Notes:
- WebP preferred. JPG/JPEG/PNG/AVIF supported. Uppercase extensions work.
- Zero‑pad names to control order (01.webp, 02.webp…).
- Slugs: use lowercase-hyphen names (e.g. `aparna-and-rahul`). Apostrophes work but are not recommended.

## Loader API (src/lib/imageStore.js)

- `getHeroImages()` → string[]
- `getHighlights()` → string[] (optional helper)
- `getPortfolioCategory(category)` → string[]
- `getPortfolioCategories()` → [{ slug, title, description, cover, images }]
- `getPortfolioCategoryWithMeta(category)` → one category object
- `getWeddingBlogs()` → [{ slug, title, description, venue, cover, images }]
- `getWeddingBlogBySlug(slug)` → one blog object

Fallbacks: If a folder is empty, the loader returns a safe default list under `/images/...`. These can be removed once all images are migrated to `src/assets/**`.

## Key Screens

- Home
  - Hero crossfade: 3000ms
  - Highlights strip: horizontally scrollable, snap autoplay (~2800ms), no crop
- Portfolios
  - Wedding: dedicated page
  - Artists/Family/Birthdays: share `PortfolioCategoryPage`
  - Justified grid, max 3 images per row on wide screens (>=1024px)
- Blog detail
  - Uses folder slug; grid capped at 3 per row on wide screens

## Add A New Blog

1) Create folder: `src/assets/blogs/weddings/<slug>/`
2) Drop images (WebP recommended)
3) Optional `meta.json`:
```
{
  "title": "Aparna & Rahul",
  "description": "Elegant garden ceremony",
  "venue": "Garden Venue, San Francisco"
}
```
4) Optional `cover.webp` to control the card cover

The blog appears automatically on Home and in the blog listing. Detail route: `/portfolio/weddings/blog/<slug>`

## Add A New Portfolio Category

Option A (current routes):
- Create `src/assets/portfolios/<category>/*`
- Add a wrapper page (or reuse `PortfolioCategoryPage`)
- Add a route and link

Option B (fully dynamic — not enabled):
- Use `getPortfolioCategories()` and a generic `:category` route.

## Image Tools

Convert to WebP (deletes originals after successful conversion):
- Dry run: `npm run assets:webp:dry`
- Convert: `npm run assets:webp`
- Options: `--dir <path>` (default `src/assets`), `--quality 82`

Requires one of:
- `cwebp` (preferred): `brew install webp`
- `magick` (ImageMagick): `brew install imagemagick`

## Development

- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

Notes:
- Discovery is at build time. Adding files → commit and rebuild for production.
- `PhotoGrid` sanitizes gallery ids (safe with special characters in slugs).
