export class TrieNode {
  constructor(public isEnd = false, public children = new Map<string, TrieNode>()) {}
}
