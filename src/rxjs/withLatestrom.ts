import { interval, withLatestFrom } from 'rxjs';
import { map } from 'rxjs/operators';

// 每5秒发出值
const source = interval(5000);
// 每1秒发出值
const secondSource = interval(1000);

/*
  输出:
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
source.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  }),
);

/*
  "Source (1s): 4 Latest From (5s): 0"
  "Source (1s): 5 Latest From (5s): 0"
  "Source (1s): 6 Latest From (5s): 0"
  ...
*/
secondSource.pipe(
  // 两个 observable 在发出值前要确保至少都有1个值 (需要等待5秒)
  withLatestFrom(source),
  map(([first, second]) => {
    return `Source (1s): ${first} Latest From (5s): ${second}`;
  }),
);
