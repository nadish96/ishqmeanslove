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
  "/images/grid/image8.jpg",
  "/images/grid/image9.jpg",
];

const weddingGalleries = [
  {
    title: "Sarah & Mike",
    slug: "sarah-and-mike",
    cover: "/images/grid/image8.jpg",
  },
  {
    title: "Downtown Loft",
    slug: "downtown-loft",
    cover: "/images/grid/image9.jpg",
  },
  {
    title: "Fall Vineyard",
    slug: "fall-vineyard",
    cover: "/images/grid/image10.jpg",
  },
  {
    title: "Garden Ceremony",
    slug: "garden-ceremony",
    cover: "/images/grid/image11.jpg",
  },
];

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        {/* Hero Section */}
        <div className="mb-32">
          <HeroImage image={heroImage} alt="Nadish Sood Photography Hero" />
        </div>

        {/* First Section - Photo Left */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/images/grid/image1.jpg"
                alt="Wedding Photography Sample"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center py-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-alt-heading font-semibold text-[#b8860b] mb-6">
                Why Me
              </h2>
              <p className="text-[#4b4b4b] text-lg lg:text-xl font-alt-body leading-relaxed mb-10">
                Hi, I'm Nadish. I approach wedding photography differently—while others orchestrate moments, I believe the best shots happen when you forget I'm there. This is YOUR day, and I'm here to help you in any way possible. I work cohesively with you and everyone involved to capture every genuine emotion.
              </p>
              <Link
                to="/portfolio/weddings"
                className="inline-flex items-center text-[#b8860b] hover:text-[#2c2c2c] font-medium transition-all duration-300 hover:translate-x-2"
              >
                View Wedding Portfolio
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Second Section - Photo Right */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="flex flex-col justify-center lg:order-1 py-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-alt-heading font-semibold text-[#b8860b] mb-10">
                What You Get
              </h2>
              <p className="text-[#4b4b4b] text-lg lg:text-xl font-alt-body leading-relaxed">
                You'll get timely delivery, private gallery, no hidden costs, and custom requests accepted. Cinematic, stunning images that feel timeless and transport you back to exactly how your wedding day felt.
              </p>
            </div>

            {/* Photo */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 lg:order-2">
              <img
                src="/images/grid/image2.jpg"
                alt="Portrait Photography Sample"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Wedding Portfolio Preview Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-6">
              Wedding Portfolio
            </h2>
            <p className="text-[#4b4b4b] text-lg lg:text-xl font-alt-body max-w-2xl mx-auto leading-relaxed">
              A preview of my favorite wedding moments and celebrations.
            </p>
          </div>
          <div className="group">
            <ImageCarousel
              images={curatedHighlights}
              autoPlay={true}
              autoPlayInterval={5000}
            />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/portfolio/weddings"
              className="text-[#b8860b] hover:text-[#2c2c2c] underline transition-all duration-300 hover:translate-x-1"
            >
              View Wedding Portfolio →
            </Link>
          </div>
        </div>

        {/* Galleries Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-6">
              Wedding Galleries
            </h2>
            <p className="text-[#4b4b4b] text-lg lg:text-xl font-alt-body max-w-2xl mx-auto leading-relaxed">
              Recent wedding celebrations I've had the honor to capture.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
            {weddingGalleries.map((gallery, index) => (
              <Link
                key={index}
                to={`/portfolio/weddings/gallery/${gallery.slug}`}
                className="block group"
              >
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={gallery.cover}
                    alt={gallery.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="mt-4 text-lg lg:text-xl font-alt-heading group-hover:text-[#b8860b] transition-colors duration-300">
                  {gallery.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/portfolio/weddings/gallery"
              className="text-[#b8860b] hover:text-[#2c2c2c] underline transition-all duration-300 hover:translate-x-1"
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
