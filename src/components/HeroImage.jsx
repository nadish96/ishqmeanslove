const HeroImage = ({ image, alt = "Hero Image" }) => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover" />

      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Simple hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
          Wedding Photography
        </h1>
        <p className="text-sm md:text-base tracking-widest uppercase text-white/90">
          Nadish Sood
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
