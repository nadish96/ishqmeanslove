import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import HeroImage from "../components/HeroImage";
import ImageCarousel from "../components/ImageCarousel";

const heroImage = "/images/hero.jpg";

const curatedHighlights = [
  "/images/grid/image4.jpg",
  "/images/grid/image5.jpg",
  "/images/grid/image6.jpg",
  "/images/grid/image7.jpg",
];

const weddingGalleries = [
  { title: "Sarah & Mike", slug: "sarah-and-mike", cover: "/images/grid/image8.jpg" },
  { title: "Downtown Loft", slug: "downtown-loft", cover: "/images/grid/image9.jpg" },
  { title: "Fall Vineyard", slug: "fall-vineyard", cover: "/images/grid/image10.jpg" },
  { title: "Garden Ceremony", slug: "garden-ceremony", cover: "/images/grid/image11.jpg" },
];

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        {/* Hero Section */}
        <div className="mb-24">
          <HeroImage image={heroImage} alt="Nadish Sood Photography Hero" />
        </div>

        {/* First Section - Photo Left */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Photo */}
            <div className="aspect-[4/3] overflow-hidden rounded shadow-sm">
              <img
                src="/images/grid/image1.jpg"
                alt="Wedding Photography Sample"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-alt-heading font-semibold text-[#b8860b] mb-4">
                Your Wedding Story
              </h2>
              <h3 className="text-xl text-[#6b6b6b] mb-6 font-alt-body font-light">
                Let me capture the wedding photos you've always dreamed of
              </h3>
              <p className="text-[#4b4b4b] text-lg font-alt-body leading-relaxed mb-8">
                Your wedding day is one of the most important days of your life. I specialize in 
                capturing the authentic emotions, intimate moments, and joyful celebrations that 
                make your love story unique. From getting ready to your first dance, every precious 
                moment will be beautifully preserved.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center text-[#b8860b] hover:text-[#2c2c2c] font-medium transition-colors"
              >
                View Wedding Portfolio
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Second Section - Photo Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="flex flex-col justify-center lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-alt-heading font-semibold text-[#b8860b] mb-8">
                Your Wedding Photographer
              </h2>
              <p className="text-[#4b4b4b] text-lg font-alt-body leading-relaxed">
                I understand that your wedding day is filled with countless precious moments that 
                happen in the blink of an eye. My approach is unobtrusive yet comprehensive, ensuring 
                I capture both the grand celebrations and quiet intimate moments that make your day 
                uniquely yours. Every couple has a different story, and I'm here to tell yours beautifully.
              </p>
            </div>
            
            {/* Photo */}
            <div className="aspect-[4/3] overflow-hidden rounded shadow-sm lg:order-2">
              <img
                src="/images/grid/image2.jpg"
                alt="Portrait Photography Sample"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Wedding Portfolio Preview Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-4">
              Wedding Portfolio
            </h2>
            <p className="text-[#4b4b4b] text-lg font-alt-body">
              A preview of my favorite wedding moments and celebrations.
            </p>
          </div>
          <div className="group max-w-2xl mx-auto">
            <ImageCarousel images={curatedHighlights} autoPlay={true} autoPlayInterval={5000} />
          </div>
          <div className="mt-4">
            <Link
              to="/portfolio"
              className="text-[#b8860b] hover:text-[#2c2c2c] underline"
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>

        {/* Galleries Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-4">
              Wedding Galleries
            </h2>
            <p className="text-[#4b4b4b] text-lg font-alt-body">
              Recent wedding celebrations I've had the honor to capture.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {weddingGalleries.map((gallery, index) => (
              <Link
                key={index}
                to={`/portfolio/galleries/weddings/${gallery.slug}`}
                className="block"
              >
                <img
                  src={gallery.cover}
                  alt={gallery.title}
                  className="w-full h-auto object-cover rounded shadow-sm"
                />
                <h3 className="mt-2 text-lg font-alt-heading">{gallery.title}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/portfolio/galleries"
              className="text-[#b8860b] hover:text-[#2c2c2c] underline"
            >
              View All Wedding Galleries →
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;