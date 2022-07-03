export class TreeNode<T> {
  public val: T;

  public left: TreeNode<T> | null;

  public right: TreeNode<T> | null;

  constructor(
    public v: T,
    public l: TreeNode<T> | null = null,
    public r: TreeNode<T> | null = null,
  ) {
    this.val = v || null;
    this.left = l;
    this.right = r;
  }
}
