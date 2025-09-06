import PageWrapper from "../../components/PageWrapper";
import PhotoGrid from "../../components/PhotoGrid";
import { getPortfolioCategory } from "../../lib/imageStore";

const birthdayImages = getPortfolioCategory("birthdays");

const PortfolioBirthdays = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-serif text-gray-900 mb-6">
              Birthday Portfolio
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Celebrating life's milestones with joy and laughter.
            </p>
          </div>
          
          <PhotoGrid 
            images={birthdayImages}
            galleryId="birthday-portfolio-gallery"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioBirthdays;
