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

const PortfolioWeddings = () => {
  return (
    <PageWrapper>
      <div className="bg-[#faf8f5] min-h-screen text-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-alt-heading font-semibold uppercase text-[#b8860b] mb-8">
              Wedding Photography Portfolio
            </h1>
            <p className="text-[#4b4b4b] mb-12 text-lg lg:text-xl font-alt-body max-w-4xl mx-auto leading-relaxed">
              Every wedding is a unique celebration of love. Here's a curated collection of my favorite 
              moments from the weddings I've had the privilege to capture. From intimate ceremonies to 
              grand celebrations, each image tells a part of someone's love story.
            </p>
            
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {weddingImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={image}
                  alt={`Wedding Portfolio ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl lg:text-3xl font-alt-heading font-semibold text-[#b8860b] mb-6">
              Ready to Explore More?
            </h2>
            <p className="text-[#4b4b4b] mb-8 text-lg font-alt-body max-w-2xl mx-auto leading-relaxed">
              Dive into complete wedding stories and see how each celebration unfolded through my lens.
            </p>
            <Link
              to="/portfolio/weddings/gallery"
              className="inline-flex items-center bg-[#b8860b] text-white px-10 py-4 rounded-lg font-alt-body font-medium hover:bg-[#daa520] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Browse Wedding Albums
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioWeddings;