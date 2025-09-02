import PageWrapper from "../components/PageWrapper";

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
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-serif font-semibold uppercase text-[#8c735b] mb-4">
            Family Photography
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg">
            Cherished moments with your loved ones, captured forever.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {familyImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded shadow-sm">
                <img
                  src={image}
                  alt={`Family ${index + 1}`}
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

export default PortfolioFamily;