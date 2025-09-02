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

const PortfolioGallery = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-4">
            Wedding Galleries
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg font-alt-body">
            Each wedding tells a unique love story. Explore these celebrations of couples who trusted me to capture their most precious moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingGalleries.map((wedding, index) => (
              <Link
                key={index}
                to={`/portfolio/galleries/weddings/${wedding.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded shadow-sm mb-4">
                  <img
                    src={wedding.cover}
                    alt={wedding.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-alt-heading font-semibold text-[#2c2c2c] mb-2">
                  {wedding.title}
                </h3>
                <p className="text-[#4b4b4b] font-alt-body mb-1">
                  {wedding.description}
                </p>
                <p className="text-[#b8860b] font-alt-body text-sm">
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

export default PortfolioGallery;