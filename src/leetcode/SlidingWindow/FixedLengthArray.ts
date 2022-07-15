export class FixedLengthArray<T> {
  private _array: T[] = [];

  private readonly _capacity;

  constructor(length: number) {
    this._capacity = length;
  }

  protected get size() {
    return this._array.length;
  }

  push(item: T) {
    if (this.size >= this._capacity) {
      this._array.shift();
    }
    this._array.push(item);
    return this._array;
  }
}
