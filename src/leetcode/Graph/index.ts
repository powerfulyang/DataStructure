import { Queue } from '../Queue/Queue';
import { PriorityQueue } from '../Heap/PriorityQueue';

export class Graph {
  private readonly vertices: number;

  /**
   * @description adjacencyList
   */
  private readonly adj: Map<number, number>[];

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adj = [];
    for (let i = 0; i < vertices; i++) {
      this.adj[i] = new Map<number, number>();
    }
  }

  /**
   * @description add edge
   * @param u - start vertex
   * @param v - end vertex
   * @param w - weight
   */
  addEdge(u: number, v: number, w: number = 0) {
    this.adj[u].set(v, w);
    this.adj[v].set(u, w);
  }

  /**
   * @description breadth first search
   * @param s - start vertex
   */
  bfs(s: number) {
    const ans = [];
    const visited = new Array(this.vertices).fill(false);
    const queue = new Queue<number>();
    visited[s] = true;
    queue.enqueue(s);
    while (!queue.isEmpty()) {
      const v = queue.dequeue();
      ans.push(v);
      for (const [key] of this.adj[v]) {
        if (!visited[key]) {
          visited[key] = true;
          queue.enqueue(key);
        }
      }
    }
    return ans;
  }

  /**
   * @description depth first search
   * @param s - start vertex
   */
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
    for (const [key] of this.adj[v]) {
      if (!tmp[key]) {
        this.dfsUtil(key, tmp, ans);
      }
    }
  }

  /**
   * @description dijkstra implementation
   * @param s - start vertex
   */
  shortestPath(s: number) {
    const pg = new PriorityQueue();
    const dist = new Array<number>(this.vertices).fill(Number.MAX_SAFE_INTEGER);
    dist[s] = 0;
    pg.enqueue(s, 0);
    while (!pg.isEmpty()) {
      const u = pg.dequeue();
      for (const [v, w] of this.adj[u]) {
        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
          pg.enqueue(v, dist[v]);
        }
      }
    }
    return dist;
  }
}
