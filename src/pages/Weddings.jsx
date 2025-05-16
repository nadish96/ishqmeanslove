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
      <div className="space-y-24 px-4 py-16 max-w-6xl mx-auto">
        {narrativeSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg shadow-md object-cover aspect-[3/4] w-full max-w-md flex-shrink-0"
            />

            {/* Text */}
            <div className="max-w-xl text-left">
              <h2 className="text-2xl font-bold uppercase text-gray-800 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Weddings;
