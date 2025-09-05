import { Link } from "react-router-dom";
import PageWrapper from "../../../../components/PageWrapper";
import PhotoGrid from "../../../../components/PhotoGrid";

const WeddingAparnaAndRahul = () => {
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
  ];

  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <Link 
              to="/portfolio/weddings/albums"
              className="inline-block text-sm tracking-wide uppercase text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              ← Back to Albums
            </Link>
            <h1 className="text-3xl font-serif text-gray-900 mb-4">
              Aparna & Rahul
            </h1>
            <p className="text-gray-600 mb-2">
              Elegant garden ceremony with timeless romance
            </p>
            <p className="text-gray-500 text-sm">
              Garden Venue, San Francisco
            </p>
          </div>
          
          <PhotoGrid 
            images={weddingImages}
            galleryId="aparna-rahul-wedding-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default WeddingAparnaAndRahul;