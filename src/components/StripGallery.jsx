// src/components/StripGallery.jsx
import { useRef, useEffect, useState } from "react";

export default function StripGallery({
  images = [],
  rowHeight = 240,
  gap = 10,
  ariaLabel = "Highlights strip",
  autoPlay = true,
  mode = "snap", // 'snap' | 'drift'
  interval = 3500, // for 'snap' mode
  speed = 0.04, // px per ms for 'drift'
  duplicate = 2, // render multiple copies to ensure overflow for drift
  single = false, // show one image per view (full-width slide)
  landscapeOnly = false, // filter to landscape images only
  landscapeRatio = 1.3, // width/height threshold for landscape
}) {
  const ref = useRef(null);
  const [displayImages, setDisplayImages] = useState([]);

  // Probe natural image sizes at runtime
  function probeSize(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = reject;
      img.src = typeof src === 'string' ? src : src?.src || src;
    });
  }

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        if (!landscapeOnly) {
          if (!cancelled) setDisplayImages(images);
          return;
        }
        const probed = await Promise.all(
          images.map(async (src) => {
            try {
              const { w, h } = await probeSize(src);
              return { src, ratio: w / h };
            } catch (_) {
              return { src, ratio: 0 };
            }
          })
        );
        let filtered = probed.filter((p) => p.ratio >= landscapeRatio).map((p) => p.src);
        if (filtered.length === 0) {
          filtered = probed.filter((p) => p.ratio > 1.0).map((p) => p.src);
        }
        if (!cancelled) setDisplayImages(filtered.length ? filtered : images);
      } catch (_) {
        if (!cancelled) setDisplayImages(images);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [images, landscapeOnly, landscapeRatio]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Optional: arrow key scroll support when focused
    const onKey = (e) => {
      if (e.key === "ArrowRight") el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
      if (e.key === "ArrowLeft") el.scrollBy({ left: -el.clientWidth * 0.9, behavior: "smooth" });
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  // Autoplay: snap to next or drift, with pause-on-hover/interaction/visibility, only when in view
  useEffect(() => {
    const el = ref.current;
    if (!el || !autoPlay || displayImages.length === 0) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let playing = false;
    let timer = null;
    let raf = null;
    let isVisible = false;

    const getSnaps = () => Array.from(el.children).map((c) => c.offsetLeft);

    const playSnap = () => {
      if (timer) return;
      timer = setInterval(() => {
        if (!isVisible) return;
        const snaps = getSnaps();
        if (!snaps.length) return;
        const x = el.scrollLeft;
        const next = snaps.find((s) => s > x + 1);
        const target = typeof next === 'number' ? next : 0;
        el.scrollTo({ left: target, behavior: 'smooth' });
      }, interval);
    };

    const playDrift = () => {
      if (raf) return;
      let last = performance.now();
      const step = (t) => {
        raf = requestAnimationFrame(step);
        const dt = t - last; last = t;
        if (!isVisible) return;
        const content = Math.max(0, el.scrollWidth - el.clientWidth);
        if (content <= 0) return; // nothing to scroll
        const dx = speed * dt; // px/ms * ms = px
        const next = el.scrollLeft + dx;
        el.scrollLeft = next >= content ? 0 : next;
      };
      raf = requestAnimationFrame(step);
    };

    const stop = () => {
      if (timer) { clearInterval(timer); timer = null; }
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      playing = false;
    };

    const start = () => {
      if (playing) return;
      playing = true;
      if (mode === 'drift') playDrift(); else playSnap();
    };

    const onEnter = () => stop();
    const onLeave = () => { if (isVisible) start(); };
    const onPointerDown = () => stop();
    const onWheel = () => stop();
    const onVisibility = () => (document.hidden ? stop() : start());

    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      if (isVisible) start(); else stop();
    }, { threshold: [0, 0.25, 1] });

    io.observe(el);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('wheel', onWheel, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      io.disconnect();
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('wheel', onWheel);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [autoPlay, mode, interval, speed, displayImages.length]);

  const scrollToNext = () => {
    const el = ref.current;
    if (!el) return;
    const snaps = Array.from(el.children).map((c) => c.offsetLeft);
    if (!snaps.length) return;
    const x = el.scrollLeft;
    const next = snaps.find((s) => s > x + 1);
    const target = typeof next === 'number' ? next : 0;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const scrollToPrev = () => {
    const el = ref.current;
    if (!el) return;
    const snaps = Array.from(el.children).map((c) => c.offsetLeft);
    if (!snaps.length) return;
    const x = el.scrollLeft;
    const prev = [...snaps].reverse().find((s) => s < x - 1);
    const target = typeof prev === 'number' ? prev : snaps[snaps.length - 1];
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const showArrows = (displayImages?.length || 0) > 1;

  return (
    <div className="relative">
      <div
        ref={ref}
        className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        style={{ gap: single ? 0 : gap, display: "flex", paddingBottom: 6 }}
        tabIndex={0}
        role="region"
        aria-label={ariaLabel}
      >
        {Array.from({ length: Math.max(1, single ? 1 : duplicate) })
          .flatMap((_, d) => displayImages.map((src, i) => ({ src, key: `${d}-${i}` })))
          .map(({ src, key }, i) => (
          <div
            key={key}
            className="flex-none snap-start"
            style={{ height: rowHeight, marginRight: single ? 0 : gap, width: single ? '100%' : 'auto' }}
          >
            <img
              src={typeof src === "string" ? src : src.src}
              alt={typeof src === "string" ? `Highlight ${i + 1}` : src.alt || `Highlight ${i + 1}`}
              className="h-full w-auto object-contain block mx-auto"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Arrow controls */}
      {showArrows && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={scrollToPrev}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={scrollToNext}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
