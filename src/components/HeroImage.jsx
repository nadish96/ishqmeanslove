const HeroImage = ({ image, alt = "Hero Image" }) => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-start text-left z-20 px-4 pt-[25vh] pl-9">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-alt-heading font-bold text-white uppercase">
          For couples in love
        </h1>
        <h2 className="text-2xl sm:text-5xl lg:text-6xl font-alt-heading font-bold text-white uppercase">
          For your wedding day
        </h2>
        <p className="mt-4 text-sm sm:text-xl font-alt-body font-light text-white uppercase tracking-wide">
          I am your wedding photographer
        </p>
      </div>
    </div>
  );
};

export default HeroImage;