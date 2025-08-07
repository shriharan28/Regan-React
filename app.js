import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement(
    "div", 
    {id: "parent"},[
    React.createElement("div", {id: "child"},
    [React.createElement("h1",{},"Regan React ###"),
     React.createElement("h2",{},"I'm a h2 tag")]),

         React.createElement("div", {id: "child2"},
        [React.createElement("h1",{},"I'm a h1 tag"),
         React.createElement("h2",{},"I'm a h2 tag")])
]);



console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);