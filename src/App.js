import React from "react";
import "./App.css";
import Home from "./components/pages/Home/Home.js";
import "./Navigation.css";
import PathVisualizer from "./components/pathfinding/PathVisualizer.js";
import { AStar } from "./components/pages/AStar/AStar.js";
import { Dijkstra } from "./components/pages/Dijkstra/Dijkstra.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="navigation">
          <div className="algorithms" id="algorithms">
            <h2>Algorithms</h2>
            <button>
              <Link to="/Dijkstra">Dijkstra's Aglorithm</Link>
            </button>
            <button>
              <Link to="/AStar">A* Pathfinding</Link>
            </button>
          </div>
          <div className="menu" onClick={showAlgorithms}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="buttons">
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
          <div className="version">V1</div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AStar">
            <PathVisualizer key="1" name="A*" algorithm={AStar} />
          </Route>
          <Route path="/Dijkstra">
            <PathVisualizer key="2" name="Dijkstra" algorithm={Dijkstra} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function showAlgorithms() {
  var algorithmMenu = document.getElementById("algorithms");
  if (algorithmMenu.style.width === "250px") {
    algorithmMenu.style.width = "0px";
  } else {
    algorithmMenu.style.width = "250px";
  }
}

export default App;
