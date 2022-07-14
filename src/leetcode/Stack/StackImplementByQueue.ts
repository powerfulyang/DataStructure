import { Queue } from '../Queue/Queue';

/**
 * #225, https://leetcode.cn/problems/implement-stack-using-queues/
 */
export class StackImplementByQueue {
  private _queueIn = new Queue();

  private _queueOut = new Queue();

  public push(x: number) {
    this._queueIn.push(x);
  }

  public pop() {
    while (this._queueIn.size > 1) {
      this._queueOut.push(this._queueIn.shift());
    }
    const result = this._queueIn.shift();
    while (this._queueOut.size > 0) {
      this._queueIn.push(this._queueOut.shift());
    }
    return result;
  }

  public peek() {
    const tmp = this.pop();
    this._queueIn.push(tmp);
    return tmp;
  }

  public is() {
    return this._queueIn.isEmpty() && this._queueOut.isEmpty();
  }
}
