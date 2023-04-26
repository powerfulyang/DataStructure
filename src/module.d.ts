import type { Matchers as _M } from 'expect';
import type { CustomMatchers } from './CustomerMatchers';

declare module 'expect' {
  interface Matchers<R extends void | Promise<void>, T = unknown>
    extends CustomMatchers<R>,
      _M<R, T> {}
}
