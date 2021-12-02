import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement(
//     "div",
//     { class: "one" },
//     React.createElement("h1", { class: "heading" }, "Adopt ME!"),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "dog",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "dog",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, { name: "luna", animal: "dog", breed: "havanese" })
//   );
// };

const App = () => {
  return (
    <div>
      <h1 className="heading"> Adopt Me! </h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
