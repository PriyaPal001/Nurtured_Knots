import Hero from "../sections/Hero";
import Products from "../sections/Products";
import WhyChooseUs from "../sections/WhyChooseUs";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}