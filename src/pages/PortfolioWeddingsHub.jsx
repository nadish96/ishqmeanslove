import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const PortfolioWeddingsHub = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-4">
            Wedding Photography
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg font-alt-body">
            Love stories captured with artistry and emotion. Each wedding is a unique celebration, and I'm honored to document these precious moments.
          </p>
          
          {/* Back link */}
          <div className="mb-8">
            <Link 
              to="/portfolio/galleries"
              className="text-[#b8860b] hover:text-[#2c2c2c] font-alt-body"
            >
              ← Back to All Galleries
            </Link>
          </div>

          {/* Wedding portfolio content would go here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Sample wedding images */}
            {Array.from({ length: 16 }, (_, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded shadow-sm">
                <img
                  src={`/images/grid/image${index + 1}.jpg`}
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

export default PortfolioWeddingsHub;