import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import ProductGallery from "./pages/ProductGallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:slug"
          element={<ProductGallery />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;