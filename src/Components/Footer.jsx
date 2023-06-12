import React from "react";

function Footer() {
  return (
    <footer style={{background: "black", color: "#ccc"}}>
      <div className="container" style={{height: "10vh"}} >
        <span>
          © Copyright - Drielison Lopes -{" "}
          <a href="#">powered by React</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
