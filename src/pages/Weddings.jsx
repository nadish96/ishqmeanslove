import PageWrapper from "../components/PageWrapper";

const narrativeSections = [
  {
    title: "TRUST",
    image: "/images/photo1.jpg",
    text: `You’ll know in the first few moments. When working with you, I balance two intentions: 
first creating images which need no explanation, where the story, moment, and emotion is clear and powerful. 
Second is creating photos with a mystery behind them, where the circumstances aren’t obvious and your imagination is left to fill in the story.`,
  },
  {
    title: "INSPIRATION",
    image: "/images/photo2.jpg",
    text: `Inspired by, and created for, my clients. I strive to make completely original wedding photographs 
motivated by who you are together and as individuals. Of course, weddings are about more than just creative photos of two people, 
and I can share full wedding galleries upon inquiry.`,
  },
  {
    title: "BEING PHOTOGRAPHED",
    image: "/images/photo3.jpg",
    text: `Spoiler alert: it’s not like being photographed at all. I work in the background, like a ninja in sensible shoes. 
No cheesy direction, no grand productions, and absolutely no one shouting “SAY CHEESE!” Unless the buffet is open.

You’ll spend your wedding day doing the things that matter—hugging your people, laughing too loudly, and wondering where the time went. 
Meanwhile, I’ll be quietly capturing the magic (and the occasional mishap) as it unfolds.`,
  },
];

const Weddings = () => {
  return (
    <PageWrapper>
      <div className="bg-[#f9f6f3] min-h-screen text-[#1e1e1e]">
        {/* Top Hero Section with overlapping text */}
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-40">
          {/* Right-aligned image */}
          <div className="flex justify-end">
            <img
              src="/images/photo1.jpg"
              alt="Intro"
              className="w-full max-w-2xl rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Overlapping Text Block */}
          <div className="absolute top-12 left-4 sm:left-12 max-w-xl z-10">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-[#1e1e1e] leading-tight uppercase">
              For people in love
            </h1>
            <p className="mt-4 text-xl font-light text-[#4b4b4b] uppercase tracking-wide">
              I am your photographer
            </p>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-24 px-4 pb-24 max-w-6xl mx-auto">
          {narrativeSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-md object-cover aspect-[3/4] w-full max-w-md flex-shrink-0"
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
