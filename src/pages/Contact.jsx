import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-2xl mx-auto px-8 py-16 text-center">
          <h1 className="text-3xl font-serif mb-8 text-gray-900">
            Contact
          </h1>
          <div className="space-y-6 text-gray-600 leading-relaxed">
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
                  className="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
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
