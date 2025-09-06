import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../../../components/PageWrapper';
import PhotoGrid from '../../../components/PhotoGrid';

// Blog metadata
const blogData = {
  'aparna-and-rahul': {
    title: 'Aparna & Rahul',
    description: 'Elegant garden ceremony with timeless romance',
    venue: 'Garden Venue, San Francisco',
    images: [
      "/images/grid/image1.jpg",
      "/images/grid/image2.jpg",
      "/images/grid/image3.jpg",
      "/images/grid/image4.jpg",
      "/images/grid/image5.jpg",
      "/images/grid/image6.jpg",
      "/images/grid/image7.jpg",
      "/images/grid/image8.jpg",
      "/images/grid/image9.jpg",
      "/images/grid/image10.jpg",
      "/images/grid/image11.jpg",
      "/images/grid/image12.jpg",
    ]
  },
  'sneha-and-akshay': {
    title: 'Sneha & Akshay',
    description: 'Urban chic wedding with industrial charm',
    venue: 'Industrial Loft, San Francisco',
    images: [
      "/images/grid/image13.jpg",
      "/images/grid/image14.jpg",
      "/images/grid/image15.jpg",
      "/images/grid/image16.jpg",
      "/images/grid/image17.jpg",
      "/images/grid/image18.jpg",
      "/images/grid/image19.jpg",
      "/images/grid/image20.jpg",
    ]
  },
  'florencias-wedding-dress': {
    title: "Florencia's Wedding Dress",
    description: 'Elegant bridal details and timeless beauty',
    venue: 'Bridal Studio, San Francisco',
    images: [
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
    ]
  }
};

const DynamicWeddingBlog = () => {
  const { slug } = useParams();
  const blog = blogData[slug];

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
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default DynamicWeddingBlog;