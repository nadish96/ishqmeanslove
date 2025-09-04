import PageWrapper from "../../components/PageWrapper";
import PhotoGallery from "../../components/PhotoGallery";

const artistImages = [
  "/images/grid/image9.jpg",
  "/images/grid/image10.jpg",
  "/images/grid/image11.jpg",
  "/images/grid/image12.jpg",
  "/images/grid/image13.jpg",
  "/images/grid/image14.jpg",
  "/images/grid/image15.jpg",
  "/images/grid/image16.jpg",
];

const PortfolioArtists = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-serif font-semibold uppercase text-[#b8860b] mb-4">
            Artist Photography
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg">
            Creative portraits and artistic expression through the lens.
          </p>
          
          <PhotoGallery 
            images={artistImages}
            galleryId="artist-portfolio-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioArtists;