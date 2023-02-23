import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Destinations from "./components/Countries.jsx";
import Book from "./components/Book.jsx";
import Selects from "./components/Selects.jsx";
import Cards from "./components/Cards.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Selects />
      <Cards />
      <Book />
      <Carousel />
    </div>
  );
}

export default App;
