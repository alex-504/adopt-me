const Pet = ({ name, animal, breed }) => {
  // using destroctive method to replace 'props'
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {
      id: "something-important",
    },
    [
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
