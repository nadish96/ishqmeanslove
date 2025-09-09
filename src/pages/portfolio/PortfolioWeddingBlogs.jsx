import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { getWeddingBlogs } from "../../lib/imageStore";

const weddingBlogs = getWeddingBlogs();

const PortfolioWeddingBlogs = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-ink">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            {/* Back link removed for cleaner UX; header nav provides path */}
            <h1 className="text-3xl font-heading text-gray-900 mb-2">
              Wedding Blog
            </h1>
            <div className="h-px w-12 bg-gold/60 mx-auto mb-6" />
            <p className="text-ink/80 max-w-2xl mx-auto leading-relaxed">
              Each wedding tells a unique love story. Explore these celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingBlogs.map((wedding, index) => (
              <Link
                key={index}
                to={`/portfolio/weddings/blog/${wedding.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={wedding.cover}
                    alt={wedding.title}
                    className="w-full h-full object-cover object-top group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h3 className="text-xl font-heading text-gray-900 group-hover:text-clay transition-colors mb-2">
                  {wedding.title}
                </h3>
                <p className="text-ink/70 text-sm mb-1">
                  {wedding.description}
                </p>
                <p className="text-ink/60 text-sm">
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

export default PortfolioWeddingBlogs;
