import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Destinations from "./components/Countries.jsx";
import Selects from "./components/Selects.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Selects />
    </div>
  );
}

export default App;
