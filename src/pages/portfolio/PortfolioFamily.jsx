import PageWrapper from "../../components/PageWrapper";
import PhotoGrid from "../../components/PhotoGrid";

const familyImages = [
  "/images/grid/image17.jpg",
  "/images/grid/image18.jpg",
  "/images/grid/image19.jpg",
  "/images/grid/image20.jpg",
  "/images/grid/image21.jpg",
  "/images/grid/image22.jpg",
  "/images/grid/image23.jpg",
  "/images/grid/image24.jpg",
];

const PortfolioFamily = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-serif text-gray-900 mb-6">
              Family Portfolio
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cherished moments with loved ones, captured forever.
            </p>
          </div>
          
          <PhotoGrid 
            images={familyImages}
            galleryId="family-portfolio-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioFamily;