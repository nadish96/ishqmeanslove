import { Link } from "react-router-dom";
import PageWrapper from "../../../../components/PageWrapper";
import PhotoGrid from "../../../../components/PhotoGrid";

const WeddingSnehaAndAkshay = () => {
  const weddingImages = [
    "/images/grid/image13.jpg",
    "/images/grid/image14.jpg",
    "/images/grid/image15.jpg",
    "/images/grid/image16.jpg",
    "/images/grid/image17.jpg",
    "/images/grid/image18.jpg",
    "/images/grid/image19.jpg",
    "/images/grid/image20.jpg",
    "/images/grid/image21.jpg",
    "/images/grid/image22.jpg",
    "/images/grid/image23.jpg",
    "/images/grid/image24.jpg",
  ];

  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="mb-8">
            <Link 
              to="/portfolio/weddings/albums"
              className="text-gray-600 hover:text-gray-900 "
            >
              ← Back to Albums
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif font-semibold text-gray-600 mb-4">
              Sneha & Akshay
            </h1>
            <p className="text-gray-600 text-lg  mb-2">
              Urban chic wedding with industrial charm
            </p>
            <p className="text-gray-600 ">
              Industrial Loft, San Francisco
            </p>
          </div>
          
          <PhotoGrid 
            images={weddingImages}
            galleryId="sneha-akshay-wedding-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default WeddingSnehaAndAkshay;