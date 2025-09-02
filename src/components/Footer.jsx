const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-8 overflow-hidden">
      {/* Background Image with Heavy Fade */}
      <div className="absolute inset-0">
        <img
          src="/images/grid/image3.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <div className="space-y-2">
          {/* Line 1 */}
          <h3 className="text-lg md:text-xl font-alt-heading font-semibold tracking-wide">
            Nadish Sood Photography
          </h3>
          
          {/* Line 2 */}
          <p className="text-sm md:text-base font-alt-body font-light">
            All skin colors + Body types are welcomed!
          </p>
          
          {/* Line 3 */}
          <p className="text-sm md:text-base font-alt-body font-light">
            Houston, TX + Nationwide
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs font-alt-body opacity-60">
            © 2024 Nadish Sood Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;