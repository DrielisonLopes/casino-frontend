import React from "react";
import Header from "./Components/Header";
import Machine from "./Components/Machine";
import GameList from "./Components/GameList";
import Footer from "./Components/Footer"

import "./sass/style.css";

function App() {
  return (
    <div>
      <Header/>
      <Machine/>
      <GameList/>
      <Footer/>
    </div>
  );
}

export default App;
