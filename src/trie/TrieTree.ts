import { TrieNode } from '@/trie/TrieNode';

export class TrieTree {
  constructor(private readonly root = new TrieNode()) {}

  insert(word: string) {
    let current = this.root;
    for (const char of word) {
      const { children } = current;
      if (!children.has(char)) {
        children.set(char, new TrieNode());
      }
      current = children.get(char);
    }
    current.isEnd = true;
  }

  search(word: string) {
    let current = this.root;
    for (const char of word) {
      const { children } = current;
      if (!children.has(char)) {
        return false;
      }
      current = children.get(char);
    }
    return current.isEnd;
  }

  startWith(word: string) {
    let current = this.root;
    for (const char of word) {
      const { children } = current;
      if (!children.has(char)) {
        return false;
      }
      current = children.get(char);
    }
    return true;
  }
}
