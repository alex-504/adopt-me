const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};


const App = () => {
  return React.createElement("div", {
    id: "something-important"
  }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Tarako",
      animal: "Egg",
      breed: "EggPasta"
    }),
    React.createElement(Pet, {
      name: "Nero",
      animal: "Bird",
      breed: "Flying cat"
    }),
    React.createElement(Pet, {
      name: "Neko",
      animal: "Cat",
      breed: "No breed"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"))