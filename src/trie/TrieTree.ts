import { TrieNode } from '@/trie/TrieNode';

export class TrieTree {
  private root: TrieNode = new TrieNode();

  public insert(word: string): void {
    let cur = this.root;
    for (const char of word) {
      if (!cur.next.has(char)) {
        cur.next.set(char, new TrieNode());
      }
      cur = cur.next.get(char);
    }
    cur.isEnd = true;
  }

  public search(word: string): boolean {
    let cur = this.root;
    for (const char of word) {
      if (!cur.next.has(char)) {
        return false;
      }
      cur = cur.next.get(char);
    }
    return cur.isEnd;
  }

  public startsWith(prefix: string): boolean {
    let cur = this.root;
    for (const char of prefix) {
      if (!cur.next.has(char)) {
        return false;
      }
      cur = cur.next.get(char);
    }
    return true;
  }
}
