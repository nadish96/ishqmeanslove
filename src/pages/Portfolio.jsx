import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const weddingImages = [
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
  "/images/grid/image13.jpg",
  "/images/grid/image14.jpg",
  "/images/grid/image15.jpg",
  "/images/grid/image16.jpg",
  "/images/grid/image17.jpg",
  "/images/grid/image18.jpg",
  "/images/grid/image19.jpg",
  "/images/grid/image20.jpg",
];

const Portfolio = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-6">
              Wedding Photography Portfolio
            </h1>
            <p className="text-[#4b4b4b] mb-8 text-lg font-alt-body max-w-3xl mx-auto">
              Every wedding is a unique celebration of love. Here's a curated collection of my favorite 
              moments from the weddings I've had the privilege to capture. From intimate ceremonies to 
              grand celebrations, each image tells a part of someone's love story.
            </p>
            
            <Link
              to="/portfolio/galleries"
              className="inline-flex items-center bg-[#b8860b] text-white px-8 py-3 rounded font-alt-body font-medium hover:bg-[#daa520] transition-colors"
            >
              Browse Wedding Albums
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {weddingImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded shadow-sm">
                <img
                  src={image}
                  alt={`Wedding Portfolio ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-alt-heading font-semibold text-[#b8860b] mb-4">
              Ready to see more?
            </h2>
            <p className="text-[#4b4b4b] mb-6 font-alt-body">
              Explore individual wedding albums to see complete love stories unfold.
            </p>
            <Link
              to="/portfolio/galleries"
              className="inline-flex items-center text-[#b8860b] hover:text-[#2c2c2c] font-alt-body font-medium transition-colors"
            >
              View Wedding Albums
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Portfolio;