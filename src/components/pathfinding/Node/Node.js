import React from "react";
import "./Node.css";

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      row,
      col,
      isFinish,
      isStart,
      isTraversable,
      isVisited,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
    } = this.props;
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : !isTraversable
      ? "node-wall"
      : isVisited
      ? "node-visited"
      : "";

    return (
      <div
        className={"node " + extraClassName}
        id={"node-" + row + "-" + col}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp(row, col)}
      ></div>
    );
  }
}

export default Node;
