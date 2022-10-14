type TreeArray = {
  pId: number;
  title: string;
  id: number;
}[];

export const ListToTree = (list: TreeArray) => {
  const map = {};
  let root;
  list.forEach((item) => {
    map[item.id] = item;
    if (item.pId === 0) {
      root = item;
    }
  });
  list.forEach((item) => {
    const parent = map[item.pId];
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    }
  });
  return root;
};

type Tree = {
  pId: number;
  title: string;
  id: number;
  children?: Tree[];
};

export const TreeToList = (tree: Tree) => {
  const list = [];
  const queue = [tree];
  while (queue.length) {
    const node = queue.shift();
    list.push(node);
    if (node.children) {
      queue.push(...node.children);
      delete node.children;
    }
  }
  return list;
};
