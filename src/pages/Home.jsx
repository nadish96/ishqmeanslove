import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import HeroImage from "../components/HeroImage";
import StripGallery from "../components/StripGallery";
import { getHeroImages, getWeddingBlogs, getPortfolioCategory } from "../lib/imageStore";

const heroImages = getHeroImages();
const curatedHighlights = getPortfolioCategory('weddings');
const weddingBlogs = getWeddingBlogs();

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-ink">
        {/* Hero Section with Carousel */}
        <div>
          <HeroImage images={heroImages} alt="ishqmeanslove Hero" interval={3000} />
        </div>

        {/* Philosophy + Portfolio Integration */}
        <div className="max-w-7xl mx-auto px-8 py-24">
          {/* Integrated Philosophy + Portfolio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-4xl font-heading mb-2 text-gray-900 whitespace-nowrap">
                While You Live It, I'll Capture It
              </h2>
              <div className="h-px w-12 bg-gold/60 mb-6" />
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                HELLO! I just want to say thank you for considering me to capture your special moments. 
                It is my passion to tell your story through the lens of a camera. 
                Just come as you are and I will do the rest of the work!
              </p>
              
              {/* Primary call-to-action (desktop) */}
              <div className="hidden lg:flex gap-4">
                <Link
                  to="/portfolio/weddings"
                  className="inline-block px-6 py-3 text-sm tracking-wide uppercase text-white bg-clay hover:bg-clay/90 transition-colors text-center"
                >
                  View Full Portfolio
                </Link>
              </div>
            </div>

            {/* Highlights Strip (default) */}
            <div className="lg:col-span-3">
              <StripGallery 
                images={curatedHighlights.slice(0, 18)} 
                rowHeight={320} 
                gap={10}
                mode="snap"
                interval={2800}
                autoPlay={true}
              />
              <div className="mt-2 text-center">
                <span className="text-xs tracking-wide uppercase text-gray-500 select-none">
                  Scroll to see more →
                </span>
              </div>
              {/* Mobile-only CTA placed below the strip */}
              <div className="mt-4 flex lg:hidden justify-center">
                <Link
                  to="/portfolio/weddings"
                  className="inline-block px-6 py-3 text-sm tracking-wide uppercase text-white bg-clay hover:bg-clay/90 transition-colors text-center"
                >
                  View Full Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Work Blogs */}
        <div className="max-w-6xl mx-auto px-8 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading text-gray-900 mb-2">
              Wedding Blog
            </h2>
            <div className="h-px w-12 bg-gold/60 mx-auto mb-4" />
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
                    className="w-full h-full object-cover object-top group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h3 className="text-sm tracking-wide uppercase text-gray-600 group-hover:text-clay transition-colors">
                  {blog.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="max-w-4xl mx-auto px-8 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading text-gray-900 mb-2">
              Kind Words
            </h2>
            <div className="h-px w-12 bg-gold/60 mx-auto mb-6" />
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
