import PageWrapper from "../components/PageWrapper";

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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artistImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded shadow-sm">
                <img
                  src={image}
                  alt={`Artist ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioArtists;