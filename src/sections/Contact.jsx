export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] bg-[#F6E6E2] px-6 py-12 text-center md:px-12 md:py-16">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#C97B84]">
            Let's Create Something
          </p>

          <h2
            className="mt-4 text-3xl font-bold text-[#3A2E2E] md:text-4xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Have something special in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Looking for a custom crochet piece or want to know more about
            something you found here? Come say hello and let's talk about it.
          </p>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#C97B84] px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#B86D76]"
          >
            Message us on Instagram
          </a>

        </div>
      </div>
    </section>
  );
}