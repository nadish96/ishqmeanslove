import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import HeroImage from "../components/HeroImage";
import ImageCarousel from "../components/ImageCarousel";

const heroImages = [
  "/images/hero.jpg",
  "/images/grid/image1.jpg",
  "/images/grid/image2.jpg",
  "/images/grid/image3.jpg",
  "/images/grid/image4.jpg",
  "/images/grid/image5.jpg",
  "/images/grid/image6.jpg",
  "/images/grid/image7.jpg",
  "/images/grid/image8.jpg",
  "/images/grid/image9.jpg",
  "/images/grid/image10.jpg",
  "/images/grid/image11.jpg",
  "/images/grid/image12.jpg",
  "/images/grid/image13.jpg",
  "/images/grid/image14.jpg",
  "/images/grid/image15.jpg",
  "/images/grid/image16.jpg",
  "/images/grid/image17.jpg",
  "/images/grid/image18.jpg",
  "/images/grid/image19.jpg",
  "/images/grid/image20.jpg"
];

const curatedHighlights = [
  "/images/grid/image4.jpg",
  "/images/grid/image5.jpg",
  "/images/grid/image6.jpg",
  "/images/grid/image7.jpg",
  "/images/grid/image8.jpg",
  "/images/grid/image9.jpg",
];

const weddingAlbums = [
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
      <div className="bg-white min-h-screen text-gray-900">
        {/* Minimal Hero Section */}
        <div>
          <HeroImage images={heroImages} alt="Nadish Sood Photography Hero" />
        </div>

        {/* Clean intro section */}
        <div className="max-w-4xl mx-auto px-8 py-24">
          {/* Minimal intro text */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Capturing authentic moments and genuine emotions through a
              documentary approach to wedding photography.
            </p>
          </div>

          {/* Simple two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/grid/image1.jpg"
                alt="Wedding Photography"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:pt-8">
              <h2 className="text-2xl font-serif mb-8 text-gray-900">
                About the Work
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                I approach wedding photography differently—while others
                orchestrate moments, I believe the best shots happen when you
                forget I'm there. This is your day, and I'm here to document
                every genuine emotion as it unfolds naturally.
              </p>
              <Link
                to="/portfolio/weddings"
                className="inline-block text-sm tracking-wide uppercase text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal portfolio preview */}
        <div className="max-w-4xl mx-auto px-8 pb-24">
          <div className="mb-12">
            <ImageCarousel
              images={curatedHighlights}
              autoPlay={true}
              autoPlayInterval={5000}
            />
          </div>
        </div>

        {/* Clean albums grid */}
        <div className="max-w-6xl mx-auto px-8 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">
              Recent Work
            </h2>
            <p className="text-gray-600">Recent wedding albums</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {weddingAlbums.map((album, index) => (
              <Link
                key={index}
                to={`/portfolio/weddings/album/${album.slug}`}
                className="block group"
              >
                <div className="aspect-square overflow-hidden mb-3">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h3 className="text-sm tracking-wide uppercase text-gray-600 group-hover:text-gray-900 transition-colors">
                  {album.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
