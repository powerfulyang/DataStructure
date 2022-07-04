# Heap

A common data structure in computer science is called a heap.

A heap is a data structure that satisfies the following two properties:

1. **The tree is a complete binary tree.**

2. - Max-Heap: The value of each node is greater than or equal to the values of its children.
   - Min-Heap: The value of each node is less than or equal to the values of its children.

Heap is an array-based data structure.

满二叉树: 如果一个二叉树的层数为 k，且结点总数是 (2^k) -1 ，则它就是满二叉树。

- 每一个层的结点数都达到最大值，则这个二叉树就是满二叉树。

完全二叉树: 若二叉树的深度为 h，除第 h 层外，其它各层 (1 ～ h-1) 的结点数都达到最大个数，第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。

- parentIndex = Math.floor((index - 1) / 2)
- leftIndex = index \* 2 + 1
- rightIndex = index \* 2 + 2
