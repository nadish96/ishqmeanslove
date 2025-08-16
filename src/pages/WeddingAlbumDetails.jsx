import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const WeddingAlbumDetails = () => {
  const { albumSlug } = useParams();

  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-serif font-bold text-[#1e1e1e]">
          Album: {albumSlug}
        </h1>
      </div>
    </PageWrapper>
  );
};

export default WeddingAlbumDetails;
