import React from "react";
import bg from "../images/background-img.jpg";

function Main() {
  return (
    <div>
      <header className="header">
        <img src={bg} width="100%" alt="background" />
        <div className="headerTitle">
          <h2>WELCOME! Earn 100 coins.</h2>
          <h3>Just register and start having fun!</h3>
        </div>
      </header>
    </div>
  );
}

export default Main;
