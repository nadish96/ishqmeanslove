import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import PhotoGallery from "../components/PhotoGallery";

const WeddingDowntownLoft = () => {
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
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="mb-8">
            <Link 
              to="/portfolio/weddings/gallery"
              className="text-[#b8860b] hover:text-[#2c2c2c] font-alt-body"
            >
              ← Back to Wedding Galleries
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-alt-heading font-semibold text-[#b8860b] mb-4">
              Downtown Loft
            </h1>
            <p className="text-[#4b4b4b] text-lg font-alt-body mb-2">
              Urban chic wedding with industrial charm
            </p>
            <p className="text-[#b8860b] font-alt-body">
              Industrial Loft, Houston
            </p>
          </div>
          
          <PhotoGallery 
            images={weddingImages}
            galleryId="downtown-loft-wedding-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default WeddingDowntownLoft;