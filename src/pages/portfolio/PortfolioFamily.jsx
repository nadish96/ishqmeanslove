import PageWrapper from "../../components/PageWrapper";
import PhotoGallery from "../../components/PhotoGallery";

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
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-serif font-semibold uppercase text-[#b8860b] mb-4">
            Family Photography
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg">
            Cherished moments with your loved ones, captured forever.
          </p>
          
          <PhotoGallery 
            images={familyImages}
            galleryId="family-portfolio-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioFamily;