import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Footer from "../sections/Footer";

export default function Collection() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const title = category
    .replace("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <section className="pt-32 pb-20 bg-[#FFF9F4] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          <h1
            className="text-4xl md:text-5xl font-bold text-center text-[#3A2E2E]"
            style={{ fontFamily: "Playfair Display" }}
          >
            {title}
          </h1>

          <p className="mt-4 text-center text-gray-600">
            Handmade crochet creations crafted with love.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl bg-white shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">

                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {product.shortDescription}
                  </p>

                  <a
                    href="https://instagram.com/nurtured_knots"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block rounded-full bg-[#C97B84] px-5 py-2 text-white transition hover:scale-105"
                  >
                    Order via Instagram
                  </a>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}