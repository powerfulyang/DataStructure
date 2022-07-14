import { Stack } from '../Stack/Stack';

/**
 * #232, https://leetcode.cn/problems/implement-queue-using-stacks/
 */
export class QueueImplementByStack {
  private _stackIn: Stack;

  private _stackOut: Stack;

  constructor() {
    this._stackIn = new Stack();
    this._stackOut = new Stack();
  }

  shift() {
    if (this._stackOut.isEmpty()) {
      while (!this._stackIn.isEmpty()) {
        this._stackOut.push(this._stackIn.pop());
      }
    }
    return this._stackOut.pop();
  }

  push(item: any) {
    this._stackIn.push(item);
  }

  peek() {
    const temp = this.shift();
    this._stackOut.push(temp);
    return temp;
  }

  isEmpty() {
    return this._stackIn.isEmpty() && this._stackOut.isEmpty();
  }
}
