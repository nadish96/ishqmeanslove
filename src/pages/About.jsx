import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/grid/image1.jpg"
                alt="Nadish Sood"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:pt-8">
              <h1 className="text-3xl sm:text-4xl font-serif mb-8 text-gray-900">
                About
              </h1>
              <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Hi, I'm Nadish. I approach wedding photography differently—while others orchestrate moments, I believe the best shots happen when you forget I'm there.
                </p>
                <p>
                  This is your day, and I'm here to document every genuine emotion as it unfolds naturally. I work collaboratively with you and everyone involved to capture the authentic story of your celebration.
                </p>
                <p>
                  My style is documentary-focused, emphasizing real moments over posed perfection. The result is a collection of images that feel timeless and transport you back to exactly how your wedding day felt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
