import React from "react";
import ReactDOM from "react-dom";

const imgs = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favorite Foods
    </h1>
    <div>
      <img alt="random" src={imgs + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
