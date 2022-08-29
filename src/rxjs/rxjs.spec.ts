import { defaultIfEmpty, every, take } from 'rxjs/operators';
import { interval, of } from 'rxjs';
import { combineLatestAllExample } from './combineLatestAll';
import { combineLatestExample } from './combineLatest';
import { mergeAllExample } from './mergeAll';

describe('rxjs', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('combineLatestAll', () => {
    const result = [];
    combineLatestAllExample.subscribe({
      next: (value) => {
        result.push(value);
      },
    });
    jest.runAllTimers();
    expect(result).toEqual([
      [
        [0, 0],
        [1, 0],
      ],
      [
        [0, 1],
        [1, 0],
      ],
      [
        [0, 1],
        [1, 1],
      ],
      [
        [0, 2],
        [1, 1],
      ],
      [
        [0, 2],
        [1, 2],
      ],
      [
        [0, 3],
        [1, 2],
      ],
      [
        [0, 3],
        [1, 3],
      ],
      [
        [0, 4],
        [1, 3],
      ],
      [
        [0, 4],
        [1, 4],
      ],
    ]);
  });

  it('combineLatestExample', () => {
    const result = [];
    combineLatestExample.pipe(take(3)).subscribe({
      next: (value) => {
        result.push(value);
      },
    });
    jest.runAllTimers();
    expect(result).toEqual([
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ]);
  });

  it('mergeAll', () => {
    const result = [];
    mergeAllExample.subscribe({
      next(v) {
        result.push(v);
      },
    });
    jest.runAllTimers();
    expect(result).toEqual([0, 1, 0, 2, 1, 2, 0, 1, 0, 2, 1, 2, 0, 1, 2]);
  });

  it('defaultIfEmpty', () => {
    // 如果在完成前没有发出任何通知，那么发出给定的值
    const result = [];
    interval(1000)
      .pipe(take(0), defaultIfEmpty(0))
      .subscribe((value) => {
        result.push(value);
      });
    jest.runAllTimers();
    expect(result).toEqual([0]);
  });

  it('every', () => {
    of(1, 2, 3)
      .pipe(every((v) => v > 0))
      .subscribe((v) => {
        expect(v).toBe(true);
      });
  });
});
