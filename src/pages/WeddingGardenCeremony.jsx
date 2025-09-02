import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const WeddingGardenCeremony = () => {
  const weddingImages = [
    "/images/grid/image4.jpg",
    "/images/grid/image5.jpg",
    "/images/grid/image6.jpg",
    "/images/grid/image7.jpg",
    "/images/grid/image8.jpg",
    "/images/grid/image9.jpg",
    "/images/grid/image10.jpg",
    "/images/grid/image11.jpg",
    "/images/grid/image12.jpg",
    "/images/grid/image13.jpg",
    "/images/grid/image14.jpg",
    "/images/grid/image15.jpg",
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
              Garden Ceremony
            </h1>
            <p className="text-[#4b4b4b] text-lg font-alt-body mb-2">
              Intimate outdoor celebration in bloom
            </p>
            <p className="text-[#b8860b] font-alt-body">
              Botanical Gardens, Houston
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {weddingImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded shadow-sm">
                <img
                  src={image}
                  alt={`Garden Ceremony Wedding ${index + 1}`}
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

export default WeddingGardenCeremony;