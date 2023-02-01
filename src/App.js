import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Singleproduct from "./components/Singleproduct";
import Cart from "./components/Cart";
import "./App.css"
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<Singleproduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
