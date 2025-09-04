import { Link } from "react-router-dom";
import PageWrapper from "../../../../components/PageWrapper";
import PhotoGrid from "../../../../components/PhotoGrid";

const WeddingFallVineyard = () => {
  const weddingImages = [
    "/images/grid/image25.jpg",
    "/images/grid/image26.jpg",
    "/images/grid/image27.jpg",
    "/images/grid/image28.jpg",
    "/images/grid/image29.jpg",
    "/images/grid/image30.jpg",
    "/images/grid/image31.jpg",
    "/images/grid/image32.jpg",
    "/images/grid/image33.jpg",
    "/images/grid/image1.jpg",
    "/images/grid/image2.jpg",
    "/images/grid/image3.jpg",
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
              Fall Vineyard
            </h1>
            <p className="text-gray-600 text-lg  mb-2">
              Autumn celebration among the vines
            </p>
            <p className="text-gray-600 ">
              Vineyard Estate, Texas Hill Country
            </p>
          </div>
          
          <PhotoGrid 
            images={weddingImages}
            galleryId="fall-vineyard-wedding-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default WeddingFallVineyard;