import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const WeddingDowntownLoft = () => {
  const weddingImages = [
    "/images/grid/image13.jpg",
    "/images/grid/image14.jpg",
    "/images/grid/image15.jpg",
    "/images/grid/image16.jpg",
    "/images/grid/image17.jpg",
    "/images/grid/image18.jpg",
    "/images/grid/image19.jpg",
    "/images/grid/image20.jpg",
    "/images/grid/image21.jpg",
    "/images/grid/image22.jpg",
    "/images/grid/image23.jpg",
    "/images/grid/image24.jpg",
  ];

  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="mb-8">
            <Link 
              to="/portfolio/galleries"
              className="text-[#8c735b] hover:text-[#1e1e1e] font-alt-body"
            >
              ← Back to Wedding Galleries
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-alt-heading font-semibold text-[#8c735b] mb-4">
              Downtown Loft
            </h1>
            <p className="text-[#4b4b4b] text-lg font-alt-body mb-2">
              Urban chic wedding with industrial charm
            </p>
            <p className="text-[#8c735b] font-alt-body">
              Industrial Loft, Houston
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {weddingImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded shadow-sm">
                <img
                  src={image}
                  alt={`Downtown Loft Wedding ${index + 1}`}
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

export default WeddingDowntownLoft;