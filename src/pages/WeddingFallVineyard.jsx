import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const WeddingFallVineyard = () => {
  const weddingImages = [
    "/images/grid/image25.jpg",
    "/images/grid/image26.jpg",
    "/images/grid/image27.jpg",
    "/images/grid/image28.jpg",
    "/images/grid/image29.jpg",
    "/images/grid/image30.jpg",
    "/images/grid/image31.jpg",
    "/images/grid/image32.jpg",
    "/images/grid/image33.jpg",
    "/images/grid/image1.jpg",
    "/images/grid/image2.jpg",
    "/images/grid/image3.jpg",
  ];

  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="mb-8">
            <Link 
              to="/portfolio/galleries"
              className="text-[#b8860b] hover:text-[#2c2c2c] font-alt-body"
            >
              ← Back to Wedding Galleries
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-alt-heading font-semibold text-[#b8860b] mb-4">
              Fall Vineyard
            </h1>
            <p className="text-[#4b4b4b] text-lg font-alt-body mb-2">
              Autumn celebration among the vines
            </p>
            <p className="text-[#b8860b] font-alt-body">
              Vineyard Estate, Texas Hill Country
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {weddingImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded shadow-sm">
                <img
                  src={image}
                  alt={`Fall Vineyard Wedding ${index + 1}`}
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

export default WeddingFallVineyard;