import { take } from 'rxjs/operators';
import { combineLatestAllExample } from './combineLatestAll';
import { combineLatestExample } from './combineLatest';

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
});
