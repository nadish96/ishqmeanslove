import PageWrapper from "../components/PageWrapper";

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  // Add more or replace with your own image paths
];

const Wedding = () => {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Wedding ${index + 1}`}
            className="rounded shadow-md object-cover aspect-[3/4] hover:scale-105 hover:brightness-110 transition-transform duration-300"
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Wedding;
