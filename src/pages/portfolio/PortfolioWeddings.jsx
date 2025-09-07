import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import PhotoGrid from "../../components/PhotoGrid";
import { getPortfolioCategory } from "../../lib/imageStore";

const weddingImages = getPortfolioCategory("weddings");

const PortfolioWeddings = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6">
              Wedding Portfolio
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of moments from celebrations I've had the privilege to document.
            </p>
            
          </div>
          
          <PhotoGrid 
            images={weddingImages}
            galleryId="wedding-portfolio-gallery"
            maxItemsPerRowWide={3}
            wideBreakpoint={1024}
          />

          {/* Simple CTA */}
          <div className="text-center mt-16">
            <Link
              to="/portfolio/weddings/albums"
              className="inline-block text-xs sm:text-sm tracking-wide uppercase text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
            >
              View Wedding Albums
            </Link>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioWeddings;
