export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🧶",
      title: "Made by Hand",
      description:
        "Every piece is carefully handmade with love, patience, and attention to detail.",
    },
    {
      icon: "💗",
      title: "Made for You",
      description:
        "Choose your favorite designs, colors, and styles to make your piece feel truly yours.",
    },
    {
      icon: "✨",
      title: "Unique & Special",
      description:
        "No mass production here. Every crochet creation has its own little charm.",
    },
  ];

  return (
    <section
      id="why-us"
      className="bg-[#FFF9F4] px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#C97B84]">
            Why Nurtured Knots
          </p>

          <h2
            className="mt-3 text-3xl font-bold text-[#3A2E2E] md:text-4xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Little things, made with love
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Handmade crochet creations designed to add a little more warmth
            and personality to your everyday life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl">
                {reason.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#3A2E2E]">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}