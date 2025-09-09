import PageWrapper from "../../components/PageWrapper";
import PhotoGrid from "../../components/PhotoGrid";
import { getPortfolioCategory } from "../../lib/imageStore";

export default function PortfolioCategoryPage({
  category,
  title,
  description = "",
  galleryId,
}) {
  const images = getPortfolioCategory(category);
  const gid = galleryId || `${category}-portfolio-gallery`;

  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-ink">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-heading text-gray-900 mb-2">
              {title}
            </h1>
            <div className="h-px w-12 bg-gold/60 mx-auto mb-6" />
            {description && (
              <p className="text-ink/80 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <PhotoGrid
            images={images}
            galleryId={gid}
            maxItemsPerRowWide={3}
            wideBreakpoint={1024}
          />
        </div>
      </div>
    </PageWrapper>
  );
}
