import PageWrapper from "../../components/PageWrapper";
import PhotoGrid from "../../components/PhotoGrid";

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
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-serif text-gray-900 mb-6">
              Artist Portfolio
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Creative portraits and artistic expression captured through the lens.
            </p>
          </div>
          
          <PhotoGrid 
            images={artistImages}
            galleryId="artist-portfolio-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioArtists;