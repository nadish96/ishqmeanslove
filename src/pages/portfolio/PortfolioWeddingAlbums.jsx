import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";

const weddingAlbums = [
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

const PortfolioWeddingAlbums = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <Link
              to="/portfolio/weddings"
              className="inline-block text-sm tracking-wide uppercase text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-3xl font-serif text-gray-900 mb-6">
              Wedding Albums
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Each wedding tells a unique love story. Explore these celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingAlbums.map((wedding, index) => (
              <Link
                key={index}
                to={`/portfolio/weddings/album/${wedding.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={wedding.cover}
                    alt={wedding.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h3 className="text-xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
                  {wedding.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  {wedding.description}
                </p>
                <p className="text-gray-500 text-sm">
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

export default PortfolioWeddingAlbums;