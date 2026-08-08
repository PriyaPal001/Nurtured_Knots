import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#FFF9F4] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-[#C97B84] font-semibold">
            Our Creations
          </p>

          <h2
            className="mt-3 text-4xl font-bold text-[#3A2E2E]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Handmade Crochet Collection
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}