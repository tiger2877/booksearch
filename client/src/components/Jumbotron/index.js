import React from "react";
import './style.css';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: "url(./images/books.jpg)" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;