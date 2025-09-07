import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { getWeddingBlogs } from "../../lib/imageStore";

const weddingBlogs = getWeddingBlogs();

const PortfolioWeddingBlogs = () => {
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
              Wedding Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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

export default PortfolioWeddingBlogs;
