Image folders for the site. Drop your images here; pages auto-update.

Preferred format
- Use WebP for fastest loads. JPG/JPEG/PNG also work.
- Zero-pad filenames to control order: 01.webp, 02.webp, 10.webp, …

Folders
- hero: Full-screen hero slideshow on the home page
  - src/assets/hero/*.{webp,jpg,png}

- highlights: Small carousel on the home page
  - src/assets/highlights/*.{webp,jpg,png}

- portfolios: Category galleries
  - src/assets/portfolios/weddings/*.{webp,jpg,png}
  - src/assets/portfolios/artists/*.{webp,jpg,png}
  - src/assets/portfolios/family/*.{webp,jpg,png}
  - src/assets/portfolios/birthdays/*.{webp,jpg,png}
  - Optional per-category meta: src/assets/portfolios/<category>/meta.json
    {
      "title": "Weddings",
      "description": "A collection of timeless celebrations"
    }
  - Optional cover image: add a file named cover.webp (or jpg/png) in the folder

- blogs/weddings: One folder per wedding blog
  - src/assets/blogs/weddings/<slug>/*.{webp,jpg,png}
  - Optional explicit cover: src/assets/blogs/weddings/<slug>/cover.webp
  - Optional meta: src/assets/blogs/weddings/<slug>/meta.json
    {
      "title": "Aparna & Rahul",
      "description": "Elegant garden ceremony with timeless romance",
      "venue": "Garden Venue, San Francisco"
    }

Notes
- Adding/removing images requires a commit + build (Vite discovers files at build time).
- Existing public images under /public/images are used as fallbacks until you migrate here.
