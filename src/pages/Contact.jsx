import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-ink">
        <div className="max-w-2xl mx-auto px-8 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-heading mb-2 text-gray-900">
            Contact
          </h1>
          <div className="h-px w-12 bg-gold/60 mx-auto mb-8" />
          <div className="space-y-6 text-base sm:text-lg text-ink/80 leading-relaxed">
            <p>
              Whether you're planning a wedding, a portrait session, or just want to say hello — I'd love to hear from you.
            </p>
            <div className="pt-4">
              <p className="mb-2">
                Text or WhatsApp: <span className="text-gray-900">+1 832-748-4040</span>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/nadishsood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink border-b border-gray-300 hover:text-clay hover:border-clay transition-colors"
                >
                  @nadishsood
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
