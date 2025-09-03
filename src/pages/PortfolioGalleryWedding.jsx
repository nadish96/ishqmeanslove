import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const weddingGalleries = [
  { 
    title: "Sarah & Mike", 
    slug: "sarah-and-mike", 
    cover: "/images/grid/image8.jpg",
    description: "Elegant garden ceremony with timeless romance",
    venue: "Garden Venue, Houston"
  },
  { 
    title: "Downtown Loft", 
    slug: "downtown-loft", 
    cover: "/images/grid/image9.jpg",
    description: "Urban chic wedding with industrial charm",
    venue: "Industrial Loft, Houston"
  },
  { 
    title: "Fall Vineyard", 
    slug: "fall-vineyard", 
    cover: "/images/grid/image10.jpg",
    description: "Autumn celebration among the vines",
    venue: "Vineyard Estate, Texas Hill Country"
  },
  { 
    title: "Garden Ceremony", 
    slug: "garden-ceremony", 
    cover: "/images/grid/image11.jpg",
    description: "Intimate outdoor celebration in bloom",
    venue: "Botanical Gardens, Houston"
  },
];

const PortfolioGalleryWedding = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20">
          <h1 className="text-4xl lg:text-5xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-6">
            Wedding Galleries
          </h1>
          <p className="text-[#4b4b4b] mb-16 text-lg lg:text-xl font-alt-body max-w-3xl mx-auto leading-relaxed">
            Each wedding tells a unique love story. Explore these celebrations of couples who trusted me to capture their most precious moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {weddingGalleries.map((wedding, index) => (
              <Link
                key={index}
                to={`/portfolio/weddings/gallery/${wedding.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 mb-6">
                  <img
                    src={wedding.cover}
                    alt={wedding.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-alt-heading font-semibold text-[#2c2c2c] mb-3 group-hover:text-[#b8860b] transition-colors duration-300">
                  {wedding.title}
                </h3>
                <p className="text-[#4b4b4b] font-alt-body mb-2 text-lg leading-relaxed">
                  {wedding.description}
                </p>
                <p className="text-[#b8860b] font-alt-body text-base font-medium">
                  {wedding.venue}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioGalleryWedding;