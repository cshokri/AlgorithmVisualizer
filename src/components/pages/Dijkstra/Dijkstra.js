import PriorityQueue from "../imports/PriorityQueue";
import HashSet from "../imports/js-hashset/hashset";

export function Dijkstra(grid, startNode, finishNode) {
  let openSet = new Map();
  let closedSet = new HashSet();

  openSet.set(key(startNode), startNode);

  while (openSet.size > 0) {
    let iterator = openSet.values();
    let currentNode = iterator.next().value;
    for (let item of iterator) {
      let openSetFCost = item.gCost + item.hCost;
      let currentFCost = currentNode.gCost + currentNode.hCost;
      if (
        openSetFCost < currentFCost ||
        (openSetFCost == currentFCost && item.hCost < currentNode.hCost)
      ) {
        currentNode = item;
      }
    }

    openSet.delete(key(currentNode));
    closedSet.add(currentNode.row + "" + currentNode.col);

    if (
      currentNode.row === finishNode.row &&
      currentNode.col === finishNode.col
    ) {
      return retracePath(startNode, finishNode);
    }

    getNeighbors(currentNode, grid).forEach((neighbor) => {
      if (
        neighbor.isTraversable &&
        !closedSet.contains(neighbor.row + "" + neighbor.col)
      ) {
        let newMovementCostToNeighbor =
          currentNode.gCost + getDistance(currentNode, neighbor);
        if (
          newMovementCostToNeighbor < neighbor.gCost ||
          !openSet.has(key(neighbor))
        ) {
          neighbor.gCost = newMovementCostToNeighbor;
          neighbor.hCost = getDistance(neighbor, finishNode);
          neighbor.parent = currentNode;

          if (!openSet.has(key(neighbor))) {
            openSet.set(key(neighbor), neighbor);
          }
        }
      }
    });
  }
}

function getDistance(nodeA, nodeB) {
  return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col);
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const { row, col } = node;
  if (row > 0) {
    neighbors.push(grid[row - 1][col]);
  }
  if (row < grid.length - 1) {
    neighbors.push(grid[row + 1][col]);
  }
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
}

function retracePath(startNode, finishNode) {
  let path = [];
  let currentNode = finishNode;
  while (currentNode.row != startNode.row || currentNode.col != startNode.col) {
    path.push(currentNode);
    currentNode = currentNode.parent;
  }
  path.reverse();
  return path;
}

function key(obj) {
  return obj.row + "" + obj.col;
}
