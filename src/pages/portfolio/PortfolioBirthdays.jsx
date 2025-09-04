import PageWrapper from "../../components/PageWrapper";
import PhotoGallery from "../../components/PhotoGallery";

const birthdayImages = [
  "/images/grid/image25.jpg",
  "/images/grid/image26.jpg",
  "/images/grid/image27.jpg",
  "/images/grid/image28.jpg",
  "/images/grid/image29.jpg",
  "/images/grid/image30.jpg",
  "/images/grid/image31.jpg",
  "/images/grid/image32.jpg",
];

const PortfolioBirthdays = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-serif font-semibold uppercase text-[#b8860b] mb-4">
            Birthday Photography
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg">
            Celebrating life's milestones with joy and laughter.
          </p>
          
          <PhotoGallery 
            images={birthdayImages}
            galleryId="birthday-portfolio-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioBirthdays;