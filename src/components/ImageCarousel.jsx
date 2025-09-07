// src/components/ImageCarousel.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const toItems = (images) =>
  images.map((it) => (typeof it === "string" ? { src: it, alt: "" } : it));

export default function ImageCarousel({
  images,
  autoPlay = false,
  autoPlayInterval = 4000,
}) {
  const items = toItems(images);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    dragFree: true,
    slidesToScroll: 1,
    speed: 8,
  });

  const rootRef = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i) => {
      if (emblaApi) emblaApi.scrollTo(i);
    },
    [emblaApi]
  );

  // Init + events
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Preload neighbors
  useEffect(() => {
    if (!items.length) return;
    const i1 = (selectedIndex + 1) % items.length;
    const i2 = (selectedIndex - 1 + items.length) % items.length;
    [i1, i2].forEach((i) => {
      const img = new Image();
      img.src = items[i]?.src;
    });
  }, [selectedIndex, items]);

  // Robust autoplay (pause on hover/drag/visibility, only when in view)
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    let timer = null;
    const root = rootRef.current || emblaApi.rootNode();

    const play = () => {
      if (timer) return;
      timer = setInterval(() => emblaApi.scrollNext(), autoPlayInterval);
    };
    const stop = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };

    const onPointerDown = () => stop();
    const onSettle = () => play();
    const onEnter = () => stop();
    const onLeave = () => play();
    const onVisibility = () => (document.hidden ? stop() : play());

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? play() : stop()),
      { threshold: 0.25 }
    );
    io.observe(root);

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("settle", onSettle);
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    play();
    return () => {
      stop();
      io.disconnect();
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("settle", onSettle);
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [emblaApi, autoPlay, autoPlayInterval]);

  // Keyboard nav
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  };

  return (
    <div
      ref={rootRef}
      className="relative group w-full mx-auto focus:outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {/* Track */}
      <div
        className="overflow-hidden h-[450px] sm:h-[500px] md:h-[550px] lg:h-[650px] xl:h-[700px] rounded-xl"
        ref={emblaRef}
      >
        <div className="flex items-center h-full gap-2 sm:gap-3 md:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative flex-none h-full cursor-pointer"
              aria-hidden={selectedIndex !== i}
            >
              <img
                src={item.src}
                alt={item.alt || `Slide ${i + 1}`}
                className="h-full w-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows (parent has 'group' so hover works) */}
      <button
        onClick={scrollPrev}
        disabled={!canPrev && !emblaApi?.options?.loop}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 disabled:opacity-40 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Previous image"
        type="button"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        disabled={!canNext && !emblaApi?.options?.loop}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 disabled:opacity-40 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Next image"
        type="button"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === selectedIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
