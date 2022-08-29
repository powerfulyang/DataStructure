/**
 * @description
 * 在很多情况下，你可以使用只使用单个操作符 mergeMap 来替代！
 *
 * mergeMap === map + mergeAll
 */

import { delay, map, mergeAll, take } from 'rxjs/operators';
import { interval } from 'rxjs';

const source = interval(500).pipe(take(5));

/*
  interval 每0.5秒发出一个值。这个值会被映射成延迟1秒的 interval
  mergeAll 操作符接收一个可选参数
  以决定在同一时间有多少个内部 observables 可以被订阅。
  其余的 observables 会先暂存以等待订阅。
*/
export const mergeAllExample = source.pipe(
  map(() => source.pipe(delay(1000), take(3))),
  mergeAll(2), // 最多只能有两个内部 delay(1000) 被订阅
);
// 输出 [0, 1, 0, 2, 1, 2, 0, 1, 0, 2, 1, 2, 0, 1, 2]
