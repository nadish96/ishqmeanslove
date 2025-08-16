import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

const heroImages = ["/images/hero.jpg"];

const curatedHighlights = [
  "/images/grid/image4.jpg",
  "/images/grid/image5.jpg",
  "/images/grid/image6.jpg",
  "/images/grid/image7.jpg",
];

const weddingAlbums = [
  { title: "Album 1", cover: "/images/grid/image8.jpg" },
  { title: "Album 2", cover: "/images/grid/image9.jpg" },
  { title: "Album 3", cover: "/images/grid/image10.jpg" },
  { title: "Album 4", cover: "/images/grid/image11.jpg" },
];

const Weddings = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e]">
        {/* Hero Section with Fading Slideshow */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden mb-24">
          <img
            src={heroImages[currentHero]}
            alt="Wedding Hero"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center z-20 px-4 pt-[25vh]">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white uppercase">
              For people in love
            </h1>
            <p className="mt-4 text-xl font-light text-white uppercase tracking-wide">
              I am your photographer
            </p>
          </div>
        </div>

        {/* Curated Highlights Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <h2 className="text-3xl font-serif font-semibold uppercase text-[#8c735b] mb-4">
            Curated Highlights
          </h2>
          <p className="text-[#4b4b4b] mb-8">
            A handpicked selection of my favourite wedding photos.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {curatedHighlights.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Highlight ${index + 1}`}
                className="w-full h-auto object-cover rounded shadow-sm"
              />
            ))}
          </div>
          <div className="mt-4">
            <a
              href="/weddings/highlights"
              className="text-[#8c735b] hover:text-[#1e1e1e] underline"
            >
              View All Highlights →
            </a>
          </div>
        </div>

        {/* Wedding Albums Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
          <h2 className="text-3xl font-serif font-semibold uppercase text-[#8c735b] mb-4">
            Wedding Albums
          </h2>
          <p className="text-[#4b4b4b] mb-8">
            Curated sets from select weddings, telling complete stories.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {weddingAlbums.map((album, index) => (
              <a
                key={index}
                href={`/weddings/albums/${album.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="block"
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-auto object-cover rounded shadow-sm"
                />
                <h3 className="mt-2 text-lg font-serif">{album.title}</h3>
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="/weddings/albums"
              className="text-[#8c735b] hover:text-[#1e1e1e] underline"
            >
              View All Albums →
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Weddings;
