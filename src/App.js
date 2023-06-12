import React from "react";
import Header from "./Components/Header";
import GameList from "./Components/GameList";
import Footer from "./Components/Footer"

import "./sass/style.css";

function App() {
  return (
    <div>
      <Header/>
      <GameList/>
      <Footer/>
    </div>
  );
}

export default App;
