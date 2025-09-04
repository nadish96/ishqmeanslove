import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const PhotoGallery = ({ images, galleryId = 'gallery' }) => {
  useEffect(() => {
    let lightbox;

    lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryId]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div 
        id={galleryId} 
        className="columns-1 md:columns-2 lg:columns-3 gap-6"
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image}
            data-pswp-width="1200"
            data-pswp-height="800"
            className="block mb-6 break-inside-avoid hover:opacity-90 transition-opacity"
          >
            <img
              src={image}
              alt={`Photo ${index + 1}`}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;