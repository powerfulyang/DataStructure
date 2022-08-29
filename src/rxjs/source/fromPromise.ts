// 你还可以使用 from 达到同样的效果！

import { fromPromise } from 'rxjs/internal/observable/innerFrom';

fromPromise(Promise.resolve(42));
