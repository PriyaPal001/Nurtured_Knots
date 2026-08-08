import { useParams, Link } from "react-router-dom";
import { galleryData } from "../data/galleryData";

export default function ProductGallery() {
  const { slug } = useParams();

  const products = galleryData[slug];

  // Product gallery does not exist yet
  if (!products) {
    return (
      <section className="min-h-screen bg-[#FFF9F4] px-6 py-32 text-center">
        <p className="font-semibold uppercase tracking-[4px] text-[#C97B84]">
          Nurtured Knots
        </p>

        <h1
          className="mt-4 text-4xl font-bold text-[#3A2E2E]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Collection Coming Soon
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-gray-600">
          We're currently preparing the collection for this product.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#C97B84] px-6 py-3 text-white transition hover:scale-105"
        >
          Back to Collection
        </Link>
      </section>
    );
  }

  const productTitle = products[0].name.replace(/\s\d+$/, "");

  return (
    <section className="min-h-screen bg-[#FFF9F4] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-[#C97B84]">
            Handmade Collection
          </p>

          <h1
            className="mt-3 text-4xl font-bold text-[#3A2E2E] md:text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            {productTitle}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our handmade designs and choose your favorite.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-4 py-4 text-center">
                <h2 className="font-medium text-[#3A2E2E]">
                  {product.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Order */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Interested in one of these handmade creations?
          </p>

          <a
  href="https://instagram.com/"
  target="_blank"
  rel="noreferrer"
  className="mt-5 inline-block rounded-full bg-[#C97B84] px-8 py-3 font-semibold text-white transition hover:scale-105"
>
  Order on Instagram
</a>
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-[#C97B84] hover:underline"
          >
            ← Back to all creations
          </Link>
        </div>

      </div>
    </section>
  );
}