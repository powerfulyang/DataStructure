/**
 * @description
 * 为什么使用 forkJoin？
 *
 * 当有一组 observables，但你只关心每个 observable 最后发出的值时，
 * 此操作符是最适合的。此操作符的一个常见用例是在页面加载(或其他事件)时你希望发起多个请求，
 * 并在所有请求都响应后再采取行动。它可能与 Promise.all 的使用方式类似。
 *
 * 注意，如果任意作用于 forkJoin 的内部 observable 报错的话，
 * 对于那些在内部 observable 上没有正确 catch 错误，
 * 从而导致完成的 observable，你将丢失它们的值。
 * 如果你只关心所有内部 observables 是否成功完成的话，可以在外部捕获错误。
 *
 * 还需要注意的是如果 observable 发出的项多于一个的话，
 * 并且你只关心前一个发出的话，那么 forkJoin 并非正确的选择。
 * 在这种情况下，应该选择像 combineLatest 或 zip 这样的操作符。
 */
import { delay, take } from 'rxjs/operators';
import { forkJoin, interval, of } from 'rxjs';

const myPromise = (val: string) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000);
  });

/*
  当所有 observables 完成时，将每个 observable
  的最新值作为数组发出
*/
forkJoin([
  // 立即发出 'Hello'
  of('Hello'),
  // 1秒后发出 'World'
  of('World').pipe(delay(1000)),
  // 1秒后发出0
  interval(1000).pipe(take(1)),
  // 以1秒的时间间隔发出0和1
  interval(1000).pipe(take(2)),
  // 5秒后解析 'Promise Resolved' 的 promise
  myPromise('RESULT'),
]);
// 输出: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
