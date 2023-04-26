// eslint-disable-next-line max-classes-per-file
class TrieNode {
  children: Map<string, TrieNode>;

  constructor() {
    this.children = new Map();
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
  }

  longestCommonPrefix(): string {
    let currentNode = this.root;
    let prefix = '';

    while (
      currentNode.children.size === 1 &&
      !Array.from(currentNode.children.keys()).includes('')
    ) {
      const char = Array.from(currentNode.children.keys())[0];
      prefix += char;
      currentNode = currentNode.children.get(char);
    }

    return prefix;
  }
}
