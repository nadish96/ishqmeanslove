// src/components/PhotoGrid.jsx  
// Justified (Flickr-style) photo grid with PhotoSwipe lightbox
// - No cropping (object-contain)
// - Occasional solo full-width rows for very-wide landscapes (auto or manual)
// - Fixes “weird spacing” in the last row by NOT force-filling remainder

import { useEffect, useMemo, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

/* -------------------- utilities -------------------- */

// Probe natural image sizes at runtime (for string[] sources)
function probeSize(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
}

// Normalize input: accepts string[] OR {src, w?, h?, alt?}[]
const normalizeImages = (input) =>
  input.map((it) => (typeof it === "string" ? { src: it } : it));

// Observe container width (for responsive layout math)
function useContainerWidth(ref) {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver((entries) =>
      setW(Math.round(entries[0].contentRect.width))
    );
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return w;
}

/* -------------------- layout math -------------------- */
/**
 * Build rows using justified layout with optional "feature" solo rows.
 *
 * Config:
 *  - targetH: desired row height for justified rows
 *  - featureRatio: if (w/h) >= featureRatio → make a solo full-width row
 *  - featureIndices: Set() of indices to force as solo rows
 *
 * Returns: array of { items: [{...it, _w, _h}], isLast, type }
 */
function layoutJustifiedWithFeatures(items, containerW, gap, config) {
  const {
    targetH = 320,
    featureRatio = 1.9,
    featureIndices = new Set(),
  } = config;

  const rows = [];
  let row = [];
  let rsum = 0;

  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const r = it.w / it.h;
    const isFeature = featureIndices.has(i) || r >= featureRatio;

    if (isFeature) {
      if (row.length) {
        rows.push({ type: "justify", items: row, isLast: false });
        row = [];
        rsum = 0;
      }
      rows.push({ type: "feature", items: [it], isLast: false });
      continue;
    }

    const testWidth = targetH * (rsum + r) + gap * row.length;
    if (row.length && testWidth > containerW) {
      rows.push({ type: "justify", items: row, isLast: false });
      row = [it];
      rsum = r;
    } else {
      row.push(it);
      rsum += r;
    }
  }
  if (row.length) rows.push({ type: "justify", items: row, isLast: true });

  // Size rows
  const out = rows.map((rData, idx) => {
    const arr = rData.items;

    if (rData.type === "feature") {
      const it = arr[0];
      const r = it.w / it.h;
      // Full-width solo row: exact height to fill width with no crop/letterbox
      const rowH = Math.round(containerW / r);
      return {
        type: "feature",
        isLast: idx === rows.length - 1,
        items: [
          {
            ...it,
            _w: containerW,
            _h: rowH,
          },
        ],
      };
    }

    // Justified rows
    const rowW = containerW - gap * (arr.length - 1);
    const sumR = arr.reduce((a, x) => a + x.w / x.h, 0);
    const rowH = rData.isLast
      ? Math.min(targetH, Math.round(rowW / sumR)) // don't stretch last row
      : Math.round(rowW / sumR);

    if (rData.isLast) {
      // LAST ROW: do NOT assign remainder to last item; keep exact widths
      return {
        type: "justify",
        isLast: true,
        items: arr.map((it) => ({
          ...it,
          _w: Math.round(rowH * (it.w / it.h)),
          _h: rowH,
        })),
      };
    }

    // Regular justified rows: fill exactly (assign remainder to last cell)
    let used = 0;
    const sized = arr.map((it, i) => {
      const w =
        i === arr.length - 1 ? rowW - used : Math.round(rowH * (it.w / it.h));
      used += i === arr.length - 1 ? 0 : w;
      return { ...it, _w: w, _h: rowH };
    });

    return { type: "justify", isLast: false, items: sized };
  });

  return out;
}

/* -------------------- component -------------------- */

export default function PhotoGrid({
  images, // string[] or [{src, w?, h?, alt?}, ...]
  galleryId = "gallery",
  gap = 12,
  targetRowHeight = 280,
  maxWidth = 1200,
  featureRatio = 1.9, // auto-feature very wide landscapes
  featureIndices = [], // force specific indices as solo rows
  centerLastRow = false, // optional: center the final row
}) {
  const [items, setItems] = useState(() => normalizeImages(images));
  const [ready, setReady] = useState(false);

  // Probe sizes for any items missing w/h
  useEffect(() => {
    let cancelled = false;
    const base = normalizeImages(images);
    Promise.all(
      base.map(async (it) => {
        if (it.w && it.h) return it;
        const { w, h } = await probeSize(it.src);
        return { ...it, w, h };
      })
    )
      .then((withSizes) => {
        if (!cancelled) {
          setItems(withSizes);
          setReady(true);
        }
      })
      .catch(() => {
        // Fallback: assume 3:2 so layout still renders (recommend fixing sources)
        if (!cancelled) {
          setItems(base.map((it) => ({ ...it, w: 3, h: 2 })));
          setReady(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [images]);

  // Init PhotoSwipe lightbox
  useEffect(() => {
    if (!ready) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "fade",
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, [galleryId, ready]);

  const wrapRef = useRef(null);
  const W = useContainerWidth(wrapRef);

  const laidOutRows = useMemo(() => {
    if (!ready || !W) return [];
    return layoutJustifiedWithFeatures(items, W, gap, {
      targetH: targetRowHeight,
      featureRatio,
      featureIndices: new Set(featureIndices),
    });
  }, [items, ready, W, gap, targetRowHeight, featureRatio, featureIndices]);

  return (
    <div ref={wrapRef} className="w-full mx-auto px-6" style={{ maxWidth }}>
      <div id={galleryId} className="flex flex-col" style={{ gap }}>
        {!ready && (
          <div className="text-center py-12 text-gray-500">Loading images…</div>
        )}

        {laidOutRows.map((row, rIdx) => (
          <div
            key={rIdx}
            className="flex"
            style={{
              gap,
              minWidth: 0,
              justifyContent:
                row.isLast && centerLastRow ? "center" : "flex-start",
            }}
          >
            {row.items.map((it, i) => (
              <a
                key={`${rIdx}-${i}`}
                href={it.src}
                data-pswp-width={it.w}
                data-pswp-height={it.h}
                className="block"
                style={{ width: it._w, height: it._h }}
              >
                <img
                  src={it.src}
                  alt={it.alt ?? `Photo ${rIdx + 1}-${i + 1}`}
                  className="w-full h-full block object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
