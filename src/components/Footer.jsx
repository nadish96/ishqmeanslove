const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-8">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <div className="space-y-4">
          {/* Business Name */}
          <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-wide text-white">
            Rumi Has a Camera
          </h3>
          
          {/* Subtext Lines */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-light text-white">
              Emotive wedding photography.
            </p>
            <p className="text-xs sm:text-sm font-light text-white">
              Edited like fine art.
            </p>
            <p className="text-xs sm:text-sm font-light text-white">
              Made to last a lifetime.
            </p>
            <p className="text-xs sm:text-sm font-light text-white italic">
              By Nadish Sood.
            </p>
          </div>
          
          {/* Location & Inclusivity */}
          <div className="space-y-1 pt-2">
            <p className="text-xs sm:text-sm font-light text-white">
              San Francisco, CA + Nationwide
            </p>
            <p className="text-xs sm:text-sm font-light text-white">
              All skin colors + Body types are welcomed!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-[10px] sm:text-xs text-white opacity-60">
            © 2024 Nadish Sood Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
