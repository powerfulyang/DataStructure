export class TrieNode {
  public isEnd: boolean = false;

  public next: Map<string, TrieNode> = new Map();
}
