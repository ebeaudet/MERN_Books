import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center text-white">
      <h1><span>Ed's Bookshelf </span></h1>
        <div className="tossing"> 
          <a target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Brought to You by Google Books
          </a>
        </div>
      
    </div>
  );
}

export default Jumbotron;
