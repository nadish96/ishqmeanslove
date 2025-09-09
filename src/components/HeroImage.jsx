import { useState, useEffect } from "react";

// Probe natural image sizes at runtime
function probeSize(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
}

const HeroImage = ({ images = [], alt = "Hero Image", interval = 5000, landscapeRatio = 1.3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [landscapeImages, setLandscapeImages] = useState([]);
  const [ready, setReady] = useState(false);

  // If only one image is passed as a string, convert to array
  const imageArray = Array.isArray(images) ? images : [images];

  // Probe image dimensions and filter for landscape images
  useEffect(() => {
    const probeImages = async () => {
      try {
        const probed = await Promise.all(
          imageArray.map(async (src) => {
            const { w, h } = await probeSize(src);
            return { src, w, h, ratio: w / h };
          })
        );
        
        // Filter for landscape images (ratio >= landscapeRatio)
        const landscapes = probed.filter(img => img.ratio >= landscapeRatio);
        console.log('Hero: Probed images:', probed.map(img => ({ src: img.src, ratio: img.ratio.toFixed(2) })));
        console.log('Hero: Landscape images:', landscapes.length);
        console.log('Hero: Threshold:', landscapeRatio);
        
        // Temporary: if no landscapes found, use images with ratio > 1.0 (any landscape)
        const fallbackLandscapes = landscapes.length > 0 ? landscapes : probed.filter(img => img.ratio > 1.0);
        console.log('Hero: Using images:', fallbackLandscapes.length);
        setLandscapeImages(fallbackLandscapes);
        setReady(true);
      } catch (error) {
        console.error("Error probing image sizes:", error);
        // Fallback to all images if probing fails
        const fallbackImages = imageArray.map(src => ({ src }));
        console.log('Hero: Using fallback images:', fallbackImages.length);
        setLandscapeImages(fallbackImages);
        setReady(true);
      }
    };

    if (imageArray.length > 0) {
      probeImages();
    }
  }, [imageArray, landscapeRatio]);

  useEffect(() => {
    if (!ready || landscapeImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === landscapeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [landscapeImages.length, interval, ready]);

  if (!ready) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-gray-200">
        {/* Loading placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
            For People in Love
          </h1>
          <p className="text-sm md:text-base tracking-widest uppercase text-white/90">
            I am your photographer
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {landscapeImages.map((imageObj, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={imageObj.src} 
            alt={`${alt} ${index + 1}`} 
            className="w-full h-full object-cover" 
          />
        </div>
      ))}

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />

      {/* Simple hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
          For People in Love
        </h1>
        <p className="text-sm md:text-base tracking-widest uppercase text-white/90">
          I am your photographer
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
