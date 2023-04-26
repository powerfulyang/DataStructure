import { describe, expect, it } from '@jest/globals';
import { Graph } from './index';

describe('Graph', () => {
  const V = 9;
  const g = new Graph(V);
  g.addEdge(0, 1, 4);
  g.addEdge(0, 7, 8);
  g.addEdge(1, 2, 8);
  g.addEdge(1, 7, 11);
  g.addEdge(2, 3, 7);
  g.addEdge(2, 8, 2);
  g.addEdge(2, 5, 4);
  g.addEdge(3, 4, 9);
  g.addEdge(3, 5, 14);
  g.addEdge(4, 5, 10);
  g.addEdge(5, 6, 2);
  g.addEdge(6, 7, 1);
  g.addEdge(6, 8, 6);
  g.addEdge(7, 8, 7);

  it('bfs', () => {
    const result = g.bfs(2);
    expect(result).toEqual([2, 1, 3, 8, 5, 0, 7, 4, 6]);
  });

  it('dfs', () => {
    const result = g.dfs(2);
    expect(result).toEqual([2, 1, 0, 7, 6, 5, 3, 4, 8]);
  });

  it('shortestPath', () => {
    const dist = g.shortestPath(0);
    // 0 - 1
    expect(dist[1]).toEqual(4);
    // 0 - 2
    expect(dist[2]).toEqual(12);
    // 0 - 3
    expect(dist[3]).toEqual(19);
    // 0 - 4
    expect(dist[4]).toEqual(21);
    // 0 - 5
    expect(dist[5]).toEqual(11);
    // 0 - 6
    expect(dist[6]).toEqual(9);
    // 0 - 7
    expect(dist[7]).toEqual(8);
    // 0 - 8
    expect(dist[8]).toEqual(14);
  });
});
