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

const Weddings = () => {
  return (
    <PageWrapper>
      <section className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 mb-2">
          I’m a wedding photographer based in San Jose, capturing real moments
          with a documentary approach. My style is warm, candid, and unobtrusive
          — focused on telling the emotional truth of your day as it unfolds
          naturally.
        </p>
      </section>

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

export default Weddings;
