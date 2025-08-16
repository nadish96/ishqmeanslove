import PageWrapper from "../components/PageWrapper";

const WeddingHighlights = () => {
  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e] max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-serif font-bold mb-8 text-[#8c735b]">
          Wedding Highlights
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 33 }).map((_, index) => (
            <img
              key={index}
              src={`/images/grid/image${index + 1}.jpg`}
              alt={`Highlight ${index + 1}`}
              className="w-full h-auto object-cover rounded shadow-sm hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default WeddingHighlights;
