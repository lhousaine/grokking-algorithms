import { Queue } from './queue';
import graph from './graph';

function personIsSeller(name: string) {
  return name.startsWith('th');
}

function searchQueueRecursive(
  graph: Record<string, string[]>,
  queue: Queue<string>,
  searched: Record<string, boolean>
): boolean {
  if (queue.isEmpty()) {
    return false;
  }

  const person = queue.dequeue() as string;

  if (person && !searched[person]) {
    if (personIsSeller(person)) {
      console.log(`${person} is a mango seller!`);
      return true;
    } else {
      queue.enqueue(graph[person]);
      searched[person] = true;
    }
  }

  return searchQueueRecursive(graph, queue, searched);
}

const startPerson: string = 'you';
const initialQueue: Queue<string> = new Queue<string>();
initialQueue.enqueue(graph[startPerson]);

const searched: Record<string, boolean> = {};

searchQueueRecursive(graph, initialQueue, searched);
