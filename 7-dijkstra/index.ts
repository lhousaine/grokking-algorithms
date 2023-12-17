const graph: Record<string, Record<string, number>> = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};

const costs: Record<string, number> = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents: Record<string, string> = {
  a: 'start',
  b: 'start',
  fin: 'None',
};

const processed: Record<string, boolean> = {};

function findLowestCostNode(costs: Record<string, number>) {
  let lowestCost = Infinity;
  let lowestNode = 'None';

  for (const node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && !processed[node]) {
      lowestCost = cost;
      lowestNode = node;
    }
  }

  return lowestNode;
}

function dijkstraAlgorithm(
  graph: Record<string, Record<string, number>>,
  costs: Record<string, number>,
  parents: Record<string, string>,
  processed: Record<string, boolean>
) {
  let node = findLowestCostNode(costs);

  while (node !== 'None') {
    const cost = costs[node];
    const neighbors = graph[node];

    for (const neighbor in neighbors) {
      const newCost = cost + neighbors[neighbor];
      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    }

    processed[node] = true;
    node = findLowestCostNode(costs);
  }
}

function findShortestPath(
  parents: Record<string, string>,
  startNode: string,
  endNode: string
) {
  const shortestPath = [endNode];
  let current = endNode;

  while (current !== startNode) {
    current = parents[current];
    shortestPath.push(current);
  }

  return shortestPath.reverse();
}

dijkstraAlgorithm(graph, costs, parents, processed);

const startNode = 'start';
const endNode = 'fin';
const shortestPath = findShortestPath(parents, startNode, endNode);

if (costs[endNode] !== Infinity) {
  console.log(`Shortest path from ${startNode} to ${endNode}:`);
  console.log(shortestPath.join(' -> '));
} else {
  console.log(`No path from ${startNode} to ${endNode} found.`);
}
