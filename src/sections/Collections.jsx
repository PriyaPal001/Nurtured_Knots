import { Link } from "react-router-dom";
import { collections } from "../data/collections";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function Collections() {
  return (
    <section
      id="collections"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <Container className="max-w-7xl">
        <SectionTitle
          title="Explore Our Collections"
          subtitle="Discover our handmade crochet creations."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collection/${collection.slug}`}
              className="group overflow-hidden rounded-3xl bg-[#FFF9F4] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Collection Image */}
              <div className="overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-40 md:h-48 lg:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Collection Name */}
              <div className="py-4 px-2">
                <h3
                  className="text-center text-base md:text-lg font-semibold text-[#3A2E2E]"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {collection.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}