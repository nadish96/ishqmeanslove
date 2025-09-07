// src/components/FeaturedStories.jsx
import { Link } from "react-router-dom";

export default function FeaturedStories({ blogs = [], title = "Featured Stories" }) {
  const items = blogs.slice(0, 3);
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((b, idx) => (
          <Link key={idx} to={`/portfolio/weddings/blog/${b.slug}`} className="group block">
            <div className="aspect-[4/3] overflow-hidden mb-3">
              <img src={b.cover} alt={b.title} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
            </div>
            <h3 className="text-lg font-serif text-gray-900 group-hover:text-gray-600 transition-colors mb-1">{b.title}</h3>
            {b.description && (
              <p className="text-sm text-gray-600">{b.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

