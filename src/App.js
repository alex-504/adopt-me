import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div", {
      id: "something-important",
    },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Tarako",
        animal: "Egg",
        breed: "EggPasta",
      }),
      React.createElement(Pet, {
        name: "Nero",
        animal: "Bird",
        breed: "Flying cat",
      }),
      React.createElement(Pet, {
        name: "Neko",
        animal: "Cat",
        breed: "No breed",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));