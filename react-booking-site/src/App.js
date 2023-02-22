import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Destinations from "./components/Countries.jsx";
import Selects from "./components/Selects.jsx";
import Cards from "./components/Cards.jsx";
import Cardsdata from "./components/Cardsdata.json";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Destinations />
      <Selects />
    </div>
  );
}

export default App;
