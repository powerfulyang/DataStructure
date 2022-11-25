import { Queue } from '../Queue/Queue';

export class Graph {
  private vertices: number;

  /**
   * @description adjacencyList
   */
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

  /**
   * @description dijkstra implementation
   * @param s - start vertex
   * @param d - destination vertex
   */
  shortestPath(s: number, d: number) {
    if (s === d) {
      // Delete these four lines if
      console.log(s); // you want to look for a cycle
      return; // when the source is equal to
    } // the target.
    const queue = [s];
    const visited = { [s]: true };
    const predecessor = {};
    let tail = 0;
    while (tail < queue.length) {
      let u = queue[tail++]; // Pop a vertex off the queue.
      const neighbors = this.adj[u];
      for (let i = 0; i < neighbors.length; ++i) {
        const v = neighbors[i];
        if (visited[v]) {
          // eslint-disable-next-line no-continue
          continue;
        }
        visited[v] = true;
        if (v === d) {
          // Check if the path is complete.
          const path = [v]; // If so, backtrack through the path.
          while (u !== s) {
            path.push(u);
            u = predecessor[u];
          }
          path.push(u);
          path.reverse();
          console.log(path.join(','));
          return;
        }
        predecessor[v] = u;
        queue.push(v);
      }
    }
    console.log(`there is no path from ${s} to ${d}`);
  }
}
