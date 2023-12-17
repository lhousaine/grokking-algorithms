export class Queue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  enqueue(elements: T[] | T) {
    if (Array.isArray(elements)) {
      this.elements.push(...elements);
    } else {
      this.elements.push(elements);
    }
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  peek(): T {
    return this.elements[0];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// console.log(queue.dequeue()); // Output: 1
// console.log(queue.peek()); // Output: 2
// console.log(queue.size()); // Output: 2
