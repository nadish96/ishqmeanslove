import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import PhotoGrid from "../../components/PhotoGrid";

const weddingImages = [
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
  "/images/grid/image20.jpg",
];

const PortfolioWeddings = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-serif text-gray-900 mb-6">
              Wedding Portfolio
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of moments from celebrations I've had the privilege to document.
            </p>
            
          </div>
          
          <PhotoGrid 
            images={weddingImages}
            galleryId="wedding-portfolio-gallery"
          />

          {/* Simple CTA */}
          <div className="text-center mt-16">
            <Link
              to="/portfolio/weddings/albums"
              className="inline-block text-sm tracking-wide uppercase text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
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