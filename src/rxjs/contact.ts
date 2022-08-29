import { concat, interval, of } from 'rxjs';

// 当 source 永远不完成时，随后的 observables 永远不会运行
const source = concat(interval(1000), of('This', 'Never', 'Runs'));
// 输出: 0,1,2,3,4....
source.subscribe(() => {
  // Example: Source never completes, second observable never runs
});
