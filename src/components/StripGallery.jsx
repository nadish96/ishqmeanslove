// src/components/StripGallery.jsx
import { useRef, useEffect } from "react";

export default function StripGallery({
  images = [],
  rowHeight = 240,
  gap = 10,
  ariaLabel = "Highlights strip",
  autoPlay = true,
  mode = "snap", // 'snap' | 'drift'
  interval = 3500, // for 'snap' mode
  speed = 0.04, // px per ms for 'drift'
}) {
  const ref = useRef(null);

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
    if (!el || !autoPlay || images.length === 0) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let playing = false;
    let timer = null;
    let raf = null;

    const getSnaps = () => Array.from(el.children).map((c) => c.offsetLeft);

    const playSnap = () => {
      if (timer) return;
      timer = setInterval(() => {
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
        el.scrollLeft += speed * dt * 1000 * 0.001; // px/ms -> px/frame
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0; // wrap
        }
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
    const onLeave = () => start();
    const onPointerDown = () => stop();
    const onWheel = () => stop();
    const onVisibility = () => (document.hidden ? stop() : start());

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.25) start(); else stop();
    }, { threshold: [0, 0.25, 1] });

    io.observe(el);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('wheel', onWheel, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    // initial start if already in view
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
    if (inView) start();

    return () => {
      stop();
      io.disconnect();
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('wheel', onWheel);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [autoPlay, mode, interval, speed, images.length]);

  return (
    <div className="relative">
      <div
        ref={ref}
        className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        style={{ gap, display: "flex", paddingBottom: 6 }}
        tabIndex={0}
        role="region"
        aria-label={ariaLabel}
      >
        {images.map((src, i) => (
          <div key={i} className="flex-none snap-start" style={{ height: rowHeight, marginRight: gap }}>
            <img
              src={typeof src === "string" ? src : src.src}
              alt={typeof src === "string" ? `Highlight ${i + 1}` : src.alt || `Highlight ${i + 1}`}
              className="h-full w-auto object-contain block"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
