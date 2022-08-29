import { defaultIfEmpty, every, take } from 'rxjs/operators';
import { AsyncSubject, BehaviorSubject, interval, of, ReplaySubject } from 'rxjs';
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

  it('AsyncSubject', () => {
    const result = [];
    const sub = new AsyncSubject();

    sub.subscribe({
      next: (value) => {
        result.push(value);
      },
    });

    sub.next(123); // nothing logged

    sub.subscribe({
      next: (value) => {
        result.push(value);
      },
    });

    sub.next(456); // nothing logged
    sub.complete(); // 456, 456 logged by both subscribers
    jest.runAllTimers();
    expect(result).toEqual([456, 456]); // Emits its last value on completion
  });

  it('BehaviorSubject', () => {
    // an initial value and emits its current value to new subscribers
    const behaviorSubject = new BehaviorSubject(0);
    const result = [];
    behaviorSubject.subscribe((v) => {
      result.push(v);
    });
    behaviorSubject.next(1);
    behaviorSubject.next(2);
    behaviorSubject.subscribe((v) => {
      result.push(v);
    });
    behaviorSubject.next(3);
    jest.runAllTimers();
    expect(result).toEqual([0, 1, 2, 2, 3, 3]);
  });

  it('ReplaySubject', () => {
    // "Replays" or emits old values to new subscribers
    const subject = new ReplaySubject(2);
    const result = [];
    subject.subscribe((v) => {
      result.push(v);
    });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.subscribe((v) => {
      result.push(v);
    });
    expect(result).toEqual([1, 2, 3, 2, 3]);
  });
});
