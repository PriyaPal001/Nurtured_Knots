import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-3xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-16 bg-[#FFF9F4] min-h-screen">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Image */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-contain"
            />
          </div>

          {/* Details */}

          <div>

            <p className="text-[#C97B84] font-semibold">
              {product.code}
            </p>

            <h1
              className="mt-3 text-4xl font-bold text-[#3A2E2E]"
              style={{ fontFamily: "Playfair Display" }}
            >
              {product.name}
            </h1>

            <p className="mt-6 text-gray-600 leading-8">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F7E5E7] px-4 py-2 text-sm text-[#C97B84]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://instagram.com/nurtured_knots"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-[#C97B84] px-8 py-4 text-white transition hover:scale-105"
            >
              Order via Instagram DM
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}