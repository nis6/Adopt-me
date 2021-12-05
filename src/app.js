import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet";
import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DetailsWithErrorBoundary from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme] = useState("darkblue");
  return (
    <ThemeContext.Provider value={[theme]}>
      <StrictMode>
        <div>
          <Router>
            <header>
              <Link to="/">
                <h1 className="heading"> Adopt Me! </h1>
              </Link>
            </header>
            <Switch>
              {/*to only render the first match of route */}

              <Route path="/details/:id">
                <DetailsWithErrorBoundary />
              </Route>

              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </Router>
        </div>
      </StrictMode>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

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
