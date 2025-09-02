import PageWrapper from "../components/PageWrapper";

const weddingImages = [
  "/images/grid/image1.jpg",
  "/images/grid/image2.jpg",
  "/images/grid/image3.jpg",
  "/images/grid/image4.jpg",
  "/images/grid/image5.jpg",
  "/images/grid/image6.jpg",
  "/images/grid/image7.jpg",
  "/images/grid/image8.jpg",
];

const PortfolioWedding = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-serif font-semibold uppercase text-[#b8860b] mb-4">
            Wedding Photography
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg">
            Capturing the magic and emotion of your special day.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {weddingImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded shadow-sm">
                <img
                  src={image}
                  alt={`Wedding ${index + 1}`}
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

export default PortfolioWedding;