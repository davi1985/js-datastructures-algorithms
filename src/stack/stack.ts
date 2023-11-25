export class Stack<T> {
  private count: number;
  private items: any;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(item: T): void {
    this.items[this.count] = item;
    this.count++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  clear(): void {
    // while (!this.isEmpty()) {
    //   this.pop();
    // }

    this.items = {};
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

/*
const stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(4);

console.log({ isEmpty: stack.isEmpty() });
console.log({ pop: stack.pop() });
console.log({ peek: stack.peek() });
// console.log({ clear: stack.clear() });

console.log({ toString: stack.toString() });

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
// console.log(stack.items);

*/
