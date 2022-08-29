import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

const sourceOne = of('Hello');
const sourceTwo = of('World!');
const sourceThree = of('Goodbye');
const sourceFour = of('World!');
// 一直等到所有 observables 都发出一个值，才将所有值作为数组发出
// 输出: ["Hello", "World!", "Goodbye", "World!"]
zip(
  sourceOne,
  sourceTwo.pipe(delay(1000)),
  sourceThree.pipe(delay(2000)),
  sourceFour.pipe(delay(3000)),
);
