import { Queue } from '../Queue/Queue';

export class Graph {
  private vertices: number;

  private readonly adj: number[][];

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adj = [];
    for (let i = 0; i < vertices; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v: number, w: number) {
    this.adj[v].push(w);
  }

  bfs(s: number) {
    const ans = [];
    const visited = new Array(this.vertices).fill(false);
    const queue = new Queue<number>();
    visited[s] = true;
    queue.enqueue(s);
    while (!queue.isEmpty()) {
      const v = queue.dequeue();
      ans.push(v);
      for (let i = 0; i < this.adj[v].length; i++) {
        const w = this.adj[v][i];
        if (!visited[w]) {
          visited[w] = true;
          queue.enqueue(w);
        }
      }
    }
    return ans;
  }

  dfs(s: number) {
    const visited = new Array(this.vertices).fill(false);
    const ans = [];
    this.dfsUtil(s, visited, ans);
    return ans;
  }

  private dfsUtil(v: number, visited: boolean[], ans: number[]) {
    const tmp = visited;
    tmp[v] = true;
    ans.push(v);
    for (let i = 0; i < this.adj[v].length; i++) {
      const w = this.adj[v][i];
      if (!tmp[w]) {
        this.dfsUtil(w, tmp, ans);
      }
    }
  }
}
