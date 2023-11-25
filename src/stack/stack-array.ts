export class Stack<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(1);
stack.push(2);

const itemRemoved = stack.pop();
console.log({ itemRemoved });

stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.isEmpty());

console.log({ stack });
console.log(stack.size());
