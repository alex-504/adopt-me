const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Tarako"),
    React.createElement("h2", {}, "Egg"),
    React.createElement("h2", {}, "EggPasta")
  ]);
};


const App = () => {
  return React.createElement("div", { id: "something-important" }, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"))