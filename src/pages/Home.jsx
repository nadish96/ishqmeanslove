import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import HeroImage from "../components/HeroImage";
import ImageCarousel from "../components/ImageCarousel";
import { getHeroImages, getWeddingBlogs, getPortfolioCategory } from "../lib/imageStore";

const heroImages = getHeroImages();
// Use images from weddings portfolio for the homepage carousel
const curatedHighlights = getPortfolioCategory('weddings').slice(0, 12);
const weddingBlogs = getWeddingBlogs();

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        {/* Hero Section with Carousel */}
        <div>
          <HeroImage images={heroImages} alt="Nadish Sood Photography Hero" />
        </div>

        {/* Philosophy + Portfolio Integration */}
        <div className="max-w-7xl mx-auto px-8 py-24">
          {/* Integrated Philosophy + Portfolio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-serif mb-8 text-gray-900">
                While You Live It, I'll Capture It
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                HELLO! I just want to say thank you for considering me to capture your special moments. 
                It is my passion to tell your story through the lens of a camera. 
                Just come as you are and I will do the rest of the work!
              </p>
              
              {/* Dual call-to-action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio/weddings"
                  className="inline-block px-6 py-3 text-sm tracking-wide uppercase text-white bg-gray-900 hover:bg-gray-800 transition-colors text-center"
                >
                  View Full Portfolio
                </Link>
                <Link
                  to="/portfolio/weddings/blogs"
                  className="inline-block px-6 py-3 text-sm tracking-wide uppercase text-gray-900 border border-gray-300 hover:border-gray-900 transition-colors text-center"
                >
                  Browse Blog
                </Link>
              </div>
            </div>

            {/* Photo Carousel Showcase */}
            <div className="lg:col-span-3">
              <ImageCarousel
                images={curatedHighlights}
                autoPlay={true}
                autoPlayInterval={4000}
              />
            </div>
          </div>
        </div>

        {/* Recent Work Blogs */}
        <div className="max-w-6xl mx-auto px-8 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4">
              Wedding Blog
            </h2>
            <p className="text-sm sm:text-base text-gray-600">I had the honor of capturing these beautiful celebrations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {weddingBlogs.map((blog, index) => (
              <Link
                key={index}
                to={`/portfolio/weddings/blog/${blog.slug}`}
                className="block group"
              >
                <div className="aspect-square overflow-hidden mb-3">
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h3 className="text-sm tracking-wide uppercase text-gray-600 group-hover:text-gray-900 transition-colors">
                  {blog.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="max-w-4xl mx-auto px-8 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
              Kind Words
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic">
                "Nadish captured our day exactly as it happened—no forced poses, just pure emotion. 
                Looking at our photos feels like reliving every perfect moment."
              </p>
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                — Sarah & Mike
              </p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic">
                "We barely noticed Nadish was there, but somehow he caught every meaningful glance 
                and genuine smile. These photos tell our story better than we ever could."
              </p>
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                — Priya & James
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
