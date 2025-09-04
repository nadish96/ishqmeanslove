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
    <div className="w-full max-w-4xl mx-auto px-6">
      <div id={galleryId} className="space-y-8">
        {images.map((image, index) => (
          <a
            key={index}
            href={image}
            data-pswp-width="1200"
            data-pswp-height="800"
            className="block flex justify-center"
          >
            <img
              src={image}
              alt={`Photo ${index + 1}`}
              className="max-w-full h-auto max-h-[70vh] object-contain"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;