import { Link } from "react-router-dom";
import PageWrapper from "../../../../components/PageWrapper";
import PhotoGrid from "../../../../components/PhotoGrid";

const WeddingGardenCeremony = () => {
  const weddingImages = [
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
              Garden Ceremony
            </h1>
            <p className="text-gray-600 text-lg  mb-2">
              Intimate outdoor celebration in bloom
            </p>
            <p className="text-gray-600 ">
              Botanical Gardens, Houston
            </p>
          </div>
          
          <PhotoGrid 
            images={weddingImages}
            galleryId="garden-ceremony-wedding-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default WeddingGardenCeremony;