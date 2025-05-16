import PageWrapper from "../components/PageWrapper";

const narrativeSections = [
  {
    title: "IT'S YOUR DAY",
    image: "/images/photo1.jpg",
    text: `The best photos happen when you forget the camera is there.

I work quietly, intuitively — like a well-dressed ninja with a camera. You do your thing: laugh too loud, tear up, dance badly. I’ll be there in the background, catching it all — the real, the raw, and the ridiculous.

No stiff poses, no cheesy instructions. Just honest moments, timeless photos.`,
  },
  {
    title: "Don’t Worry, I Got You",
    image: "/images/photo2.jpg",
    text: `Yes — when it’s time for portraits or family photos, I’ll step in. I won’t leave you standing around like Sims waiting for direction. I’ll tell you where to put your hands, who to look at, and when to fix your cousin’s collar. We’ll keep it relaxed, fast, and painless.`,
  },
  {
    title: "WHAT YOU'LL REMEMBER",
    image: "/images/photo3.jpg",
    text: `You won’t remember every flower arrangement or appetizer — but you’ll remember how it felt.

That deep breath before walking in. The look your partner gave you when no one else was watching. Your uncle losing it on the dance floor. That’s what I look for — the stuff that lasts.

Years from now, I want your photos to feel like a memory — not a photoshoot.`,
  },
];

const Weddings = () => {
  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e]">
        {/* Top Hero Section: full-width background image with overlay text */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden mb-24">
          {/* Background Image */}
          <img
            src="/images/photo1.jpg"
            alt="Intro"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white uppercase">
              For people in love
            </h1>
            <p className="mt-4 text-xl font-light text-white uppercase tracking-wide">
              I am your photographer
            </p>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-24 px-4 pb-24 max-w-7xl mx-auto">
          {narrativeSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-md object-cover w-full h-auto max-w-2xl"
              />
              <div className="max-w-xl text-left">
                <h2 className="text-2xl font-serif font-semibold uppercase text-[#8c735b] mb-4 tracking-wide">
                  {section.title}
                </h2>
                <p className="text-[#4b4b4b] whitespace-pre-line leading-relaxed font-light">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Weddings;
