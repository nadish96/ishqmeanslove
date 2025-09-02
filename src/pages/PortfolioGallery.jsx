import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const galleries = [
  { 
    title: "Wedding", 
    slug: "wedding", 
    cover: "/images/grid/image8.jpg",
    description: "Capturing the magic and emotion of your special day."
  },
  { 
    title: "Artists", 
    slug: "artists", 
    cover: "/images/grid/image9.jpg",
    description: "Creative portraits and artistic expression through the lens."
  },
  { 
    title: "Family", 
    slug: "family", 
    cover: "/images/grid/image10.jpg",
    description: "Cherished moments with your loved ones, captured forever."
  },
  { 
    title: "Birthdays", 
    slug: "birthdays", 
    cover: "/images/grid/image11.jpg",
    description: "Celebrating life's milestones with joy and laughter."
  },
];

const PortfolioGallery = () => {
  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <h1 className="text-4xl font-serif font-semibold uppercase text-[#8c735b] mb-4">
            Galleries
          </h1>
          <p className="text-[#4b4b4b] mb-12 text-lg">
            Explore my different photography collections, each telling unique stories through specialized styles and moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleries.map((gallery, index) => (
              <Link
                key={index}
                to={`/portfolio/galleries/${gallery.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded shadow-sm mb-4">
                  <img
                    src={gallery.cover}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#1e1e1e] mb-2">
                  {gallery.title}
                </h3>
                <p className="text-[#4b4b4b]">
                  {gallery.description}
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