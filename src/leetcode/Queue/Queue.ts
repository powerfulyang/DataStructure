/**
 * Queue
 * FIFO
 */
export class Queue<T> {
  private _queue: Array<T> = [];

  get size(): number {
    return this._queue.length;
  }

  isEmpty(): boolean {
    return this._queue.length === 0;
  }

  push(item: T) {
    this._queue.push(item);
  }

  shift(): T {
    return this._queue.shift();
  }
}
