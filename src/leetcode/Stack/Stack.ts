/**
 * @class Stack
 * LIFO: Last In First Out
 */
export class Stack<T = any> {
  private _stack: T[] = [];

  get size() {
    return this._stack.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(item: T) {
    this._stack.push(item);
  }

  pop() {
    return this._stack.pop();
  }

  clear() {
    this._stack = [];
  }

  toArray() {
    return this._stack;
  }

  peek() {
    return this._stack[0];
  }
}
