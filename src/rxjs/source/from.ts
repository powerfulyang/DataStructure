import { from } from 'rxjs';

// from array
from([1, 2, 3]);

// from promise
from(Promise.resolve(42));

// from iterable
from(new Set([1, 2, 3]));

// from string
from('foo');
