import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-52 lg:h-56"
        />
      </div>

      <div className="py-4">
        <h3
          className="text-center text-lg font-semibold text-[#3A2E2E]"
          style={{ fontFamily: "Playfair Display" }}
        >
          {product.name}
        </h3>
      </div>
    </Link>
  );
}