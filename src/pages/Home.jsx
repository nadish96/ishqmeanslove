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

const galleries = [
  { title: "Wedding", slug: "wedding", cover: "/images/grid/image8.jpg" },
  { title: "Artists", slug: "artists", cover: "/images/grid/image9.jpg" },
  { title: "Family", slug: "family", cover: "/images/grid/image10.jpg" },
  { title: "Birthdays", slug: "birthdays", cover: "/images/grid/image11.jpg" },
];

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e]">
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
              <h2 className="text-3xl lg:text-4xl font-alt-heading font-semibold text-[#8c735b] mb-4">
                Timeless Photos
              </h2>
              <h3 className="text-xl text-[#6b6b6b] mb-6 font-alt-body font-light">
                Let me get you the photos you've always wanted
              </h3>
              <p className="text-[#4b4b4b] text-lg font-alt-body leading-relaxed mb-8">
                Photography is more than just capturing moments—it's about creating memories that 
                last forever. With years of experience and an eye for detail, I specialize in 
                turning ordinary moments into extraordinary keepsakes that tell your unique story.
              </p>
              <Link
                to="/portfolio/galleries/wedding"
                className="inline-flex items-center text-[#8c735b] hover:text-[#1e1e1e] font-medium transition-colors"
              >
                View Wedding Gallery
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
              <h2 className="text-3xl lg:text-4xl font-alt-heading font-semibold text-[#8c735b] mb-8">
                Your Photographer
              </h2>
              <p className="text-[#4b4b4b] text-lg font-alt-body leading-relaxed">
                Whether it's family portraits, artist headshots, or celebration photography, 
                I create images that reflect your unique personality and story. My goal is to 
                capture genuine emotions and natural connections in every frame.
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

        {/* Curated Highlights Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-alt-heading font-semibold uppercase text-[#8c735b] mb-4">
              Curated Highlights
            </h2>
            <p className="text-[#4b4b4b] text-lg font-alt-body">
              A handpicked selection of my favourite photos.
            </p>
          </div>
          <div className="group max-w-2xl mx-auto">
            <ImageCarousel images={curatedHighlights} autoPlay={true} autoPlayInterval={5000} />
          </div>
          <div className="mt-4">
            <Link
              to="/portfolio"
              className="text-[#8c735b] hover:text-[#1e1e1e] underline"
            >
              View All Highlights →
            </Link>
          </div>
        </div>

        {/* Galleries Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-alt-heading font-semibold uppercase text-[#8c735b] mb-4">
              Galleries
            </h2>
            <p className="text-[#4b4b4b] text-lg font-alt-body">
              Curated collections from different types of shoots.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {galleries.map((gallery, index) => (
              <Link
                key={index}
                to={`/portfolio/galleries/${gallery.slug}`}
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
              className="text-[#8c735b] hover:text-[#1e1e1e] underline"
            >
              View All Galleries →
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;