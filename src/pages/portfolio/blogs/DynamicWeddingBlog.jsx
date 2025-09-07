import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../../../components/PageWrapper';
import PhotoGrid from '../../../components/PhotoGrid';
import { getWeddingBlogBySlug } from '../../../lib/imageStore';

const DynamicWeddingBlog = () => {
  const { slug } = useParams();
  const blog = getWeddingBlogBySlug(slug);

  if (!blog) {
    return (
      <PageWrapper>
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-gray-900 mb-4">Blog not found</h1>
            <Link to="/portfolio/weddings/blogs" className="text-gray-600 hover:text-gray-900">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <Link 
              to="/portfolio/weddings/blogs"
              className="inline-block text-sm tracking-wide uppercase text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              ← Back to Blog
            </Link>
            <h1 className="text-3xl font-serif text-gray-900 mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-600 mb-2">
              {blog.description}
            </p>
            <p className="text-gray-500 text-sm">
              {blog.venue}
            </p>
          </div>
          
          <PhotoGrid 
            images={blog.images}
            galleryId={`${slug}-wedding-gallery`}
            maxItemsPerRowWide={3}
            wideBreakpoint={1024}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default DynamicWeddingBlog;
