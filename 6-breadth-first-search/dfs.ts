import { Queue } from './queue';
import graph from './graph';

function personIsSeller(name: string) {
  return name.startsWith('th');
}

function searchQueue(
  graph: Record<string, string[]>,
  owner: string,
  queue: Queue<string>,
  searched: Record<string, boolean>
) {
  queue.enqueue(graph[owner]);

  while (!queue.isEmpty()) {
    const person = queue.dequeue();

    if (person && !searched[person]) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        queue.enqueue(graph[person]);
        searched[person] = true;
      }
    }
  }
  return false;
}

const queue = new Queue<string>();

const searched: Record<string, boolean> = {};

searchQueue(graph, 'you', queue, searched);
