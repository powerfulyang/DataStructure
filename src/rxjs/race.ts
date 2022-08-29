/**
 * @description
 * 类似于 Promise.race([...])
 */

import { interval, map, race } from 'rxjs';

// 输出: "1s won!"..."1s won!"...etc
race(
  // 每1.5秒发出值
  interval(1500),
  // 每1秒发出值
  interval(1000).pipe(map(() => '1s won!')),
  // 每2秒发出值
  interval(2000),
  // 每2.5秒发出值
  interval(2500),
);
