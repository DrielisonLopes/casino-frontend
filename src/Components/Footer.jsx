import React from "react";

function Footer() {
  return (
    <footer style={{background: "black", color: "#ccc"}}>
      <div className="container" style={{height: "10vh"}} >
        <span>
          © Copyright - By Drielison Lopes -{" "}
          <a href="https://react.dev/" target="_blank">with React</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
