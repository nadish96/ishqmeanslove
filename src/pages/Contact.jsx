import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4 text-[#1e1e1e] uppercase tracking-wide">
          Let’s Talk
        </h2>
        <p className="text-[#4b4b4b] text-lg leading-relaxed font-light">
          Whether you’re planning a wedding, a shoot, or just want to say hi —
          I’d love to hear from you.
        </p>
        <p className="mt-6 text-[#4b4b4b] text-md font-light">
          Text or WhatsApp me at <strong>+1 832-748-4040</strong> or DM me on{" "}
          <a
            href="https://www.instagram.com/nadishsood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8c735b] hover:text-[#1e1e1e] underline"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </PageWrapper>
  );
};

export default Contact;
