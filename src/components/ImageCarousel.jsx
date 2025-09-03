import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

const ImageCarousel = ({ images, autoPlay = false, autoPlayInterval = 4000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    containScroll: false,
    dragFree: true,
    slidesToScroll: 1,
    speed: 8,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  // Auto play - smooth continuous scroll
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [emblaApi, autoPlay, autoPlayInterval]);

  return (
    <div className="relative w-full mx-auto">
      {/* Main Carousel */}
      <div className="overflow-hidden h-[700px]" ref={emblaRef}>
        <div className="flex items-center h-full gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-none h-[650px] cursor-pointer"
              style={{ aspectRatio: 'auto' }}
            >
              <img
                src={image}
                alt={`Wedding highlight ${index + 1}`}
                className="h-full w-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>


    </div>
  );
};

export default ImageCarousel;