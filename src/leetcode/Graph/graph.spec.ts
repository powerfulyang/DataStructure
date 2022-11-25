import { Graph } from './index';

describe('Graph', () => {
  const graph = new Graph(4);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 0);
  graph.addEdge(2, 3);
  graph.addEdge(3, 3);

  it('bfs', () => {
    const result = graph.bfs(2);
    expect(result).toEqual([2, 0, 3, 1]);
  });

  it('dfs', () => {
    const result = graph.dfs(2);
    expect(result).toEqual([2, 0, 1, 3]);
  });

  it('shortestPath', () => {
    graph.shortestPath(0, 3);
  });
});
