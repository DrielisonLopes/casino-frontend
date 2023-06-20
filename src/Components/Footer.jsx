import React from "react";

function Footer() {
  return (
    <footer style={{background: "black", color: "#ccc"}}>
      <div className="container" style={{height: "10vh"}} >
        <span>
          © Copyright - By <a className="linkPortfolio" href="https://drielison-lopes.vercel.app/" target="_blank">Drielison Lopes</a> -{" "}
          with React
        </span>
      </div>
    </footer>
  );
}

export default Footer;
