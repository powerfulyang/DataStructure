export enum Color {
  RED = 'RED',
  BLACK = 'BLACK',
}

export class RedBlackNode {
  key: number;

  value: number;

  color: Color;

  left: RedBlackNode;

  right: RedBlackNode;

  constructor(key: number, value: number, color: Color = Color.RED) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
  }
}
