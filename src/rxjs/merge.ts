/**
 * @description
 * 此操作符可以既有静态方法，又有实例方法！
 *
 * 如果产生值的顺序是首要考虑的，那么试试用 concat 来代替！
 */

import { map } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

// 每2.5秒发出值
const first = interval(2500);
// 每2秒发出值
const second = interval(2000);
// 每1.5秒发出值
const third = interval(1500);
// 每1秒发出值
const fourth = interval(1000);

// 从一个 observable 中发出输出值
merge(
  first.pipe(map(() => 'FIRST!')),
  second.pipe(map(() => 'SECOND!')),
  third.pipe(map(() => 'THIRD')),
  fourth.pipe(map(() => 'FOURTH')),
);
// 输出: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
