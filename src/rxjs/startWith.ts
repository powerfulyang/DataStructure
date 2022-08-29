import { of, startWith } from 'rxjs';

const source = of(1, 2, 3);
// 从0开始
source.pipe(startWith(0));
// 输出: 0,1,2,3
