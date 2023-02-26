import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Countries from "./components/Countries.jsx";
import Book from "./components/Book.jsx";
import Selects from "./components/Selects.jsx";
import Cards from "./components/Cards.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Countries />
      <Selects />
      <Cards />
      <Book />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
