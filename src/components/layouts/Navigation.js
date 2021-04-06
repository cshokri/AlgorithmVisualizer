import React from "react";
import "./Navigation.css";
import Home from "../pages/Home/Home.js";
import About from "../pages/About/About.js";
import PathVisualizer from "../pathfinding/PathVisualizer.js";
import { AStar } from "../pages/AStar/AStar.js";
import Dijkstra from "../pages/Dijkstra/Dijkstra.js";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newPage) {
    this.props.click(newPage);
  }

  // Algorithms:
  //      - A*
  //      - Breadth First Search
  //      - Dijkstra's Algorithm
  //      - AcylicSP
  //      - Bellmen Ford's Algorithm
  //      - Depth First Search
  //      - Binary Sort
  //      - Quick Sort
  //      - Quick Union Find
  //      - Heap Sort
  //      - Binary Tree

  render() {
    return (
      <div className="navigation">
        <div className="algorithms" id="algorithms">
          <h2>Algorithms</h2>
          <button onClick={() => this.handleClick(<Home />)}>
            Breadth First Search
          </button>
          <button onClick={() => this.handleClick(<Dijkstra />)}>
            Dijkstra's Aglorithm
          </button>
          <button
            onClick={() =>
              this.handleClick(<PathVisualizer name="A*" algorithm={AStar} />)
            }
          >
            A* Pathfinding
          </button>
          <button onClick={() => this.handleClick(<Home />)}>
            Depth First Search
          </button>
          <button onClick={() => this.handleClick(<Home />)}>AcyclicSP</button>
        </div>
        <div className="menu" onClick={showAlgorithms}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleClick(<Home />)}>Home</button>
          <button onClick={() => this.handleClick(<About />)}>About</button>
        </div>
        <div className="version">Version 0.9.0</div>
      </div>
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

export default Navigation;
