import React from "react";
import "./PathVisualizer.css";
import Node from "./Node/Node.js";
import flag from "./finish.jpg";
import start from "./start.png";

const START_ROW = 12;
const START_COL = 4;
const END_ROW = 12;
const END_COL = 40;

class PathVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      mouseIsPressed: false,
      name: props.name,
      algorithm: props.algorithm,
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  visualize() {
    const { grid } = this.state;
    const startNode = grid[START_ROW][START_COL];
    const finishNode = grid[END_ROW][END_COL];
    const visitedNodesInOrder = this.state.algorithm(
      grid,
      startNode,
      finishNode
    );
    if (visitedNodesInOrder != null) {
      this.animate(visitedNodesInOrder);
    }
  }

  animate(visitedNodesInOrder) {
    for (let i = 0; i < visitedNodesInOrder.length - 1; i++) {
      setTimeout(() => {
        let node = visitedNodesInOrder[i];

        document.getElementById("node-" + node.row + "-" + node.col).className =
          "node node-visited";
        //this.setState({ grid: newGrid });
      }, 10 * i);
    }
  }

  clearGrid() {
    this.setState({ grid: getInitialGrid() });
    for (let i = 0; i < this.state.grid.length; i++) {
      for (let j = 0; j < this.state.grid[0].length; j++) {
        if (
          !(START_ROW == i && START_COL == j) &&
          !(END_ROW == i && END_COL == j)
        ) {
          document.getElementById("node-" + i + "-" + j).className = "node";
        }
      }
    }
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <div className="container">
        <div className="grid">
          {grid.map((row, rowIndex) => {
            return (
              <div key={rowIndex}>
                {row.map((node, nodeIndex) => {
                  const {
                    row,
                    col,
                    isStart,
                    isFinish,
                    isTraversable,
                    isVisited,
                  } = node;
                  return (
                    <Node
                      key={nodeIndex}
                      row={row}
                      col={col}
                      isStart={isStart}
                      isFinish={isFinish}
                      isTraversable={isTraversable}
                      isVisited={isVisited}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="controls">
          <h1 className="algorithm-name">{this.state.name}</h1>

          <div className="key">
            {/*
            <div className="visited">
              <div />
              <p>Visited Nodes</p>
            </div>
            */}
            <div className="start">
              <div className="keyIcon">
                <img src={start} alt="Start" />
              </div>
              <p>Start Node</p>
            </div>
            <div className="finish">
              <div className="keyIcon">
                <img src={flag} alt="Finish" />
              </div>
              <p>End Node</p>
            </div>
          </div>

          <div className="gridButtons">
            <button className="clear" onClick={() => this.clearGrid()}>
              Clear Grid
            </button>
            <button className="visualize" onClick={() => this.visualize()}>
              Visualize
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const getInitialGrid = () => {
  const nodeGrid = [];
  for (let row = 0; row < 26; row++) {
    const currentRow = [];
    for (let col = 0; col < 45; col++) {
      currentRow.push(createNode(row, col));
    }
    nodeGrid.push(currentRow);
  }
  return nodeGrid;
};

const createNode = (row, col) => {
  return {
    row,
    col,
    isStart: row === START_ROW && col === START_COL,
    isFinish: row === END_ROW && col === END_COL,
    isTraversable: true,
    gCost: 0,
    hCost: 0,
    parent: null,
    isVisited: false,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isTraversable: !node.isTraversable,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default PathVisualizer;
