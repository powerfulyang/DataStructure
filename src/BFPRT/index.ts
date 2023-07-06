export class BFPRT {
  private static insertSort(arr: number[], begin: number, end: number): number {
    let smallestIndex: number;
    for (let i = begin; i <= end; i++) {
      smallestIndex = i;
      for (let j = i + 1; j <= end; j++) {
        if (arr[j] < arr[smallestIndex]) {
          smallestIndex = j;
        }
      }
      [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
    }
    return begin + Math.floor((end - begin) / 2);
  }

  static partition(arr: number[], begin: number, end: number, pivotIndex: number): number {
    let small = begin - 1;
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    for (let index = begin; index < end; index++) {
      if (arr[index] < arr[end]) {
        small++;
        if (index !== small) {
          [arr[small], arr[index]] = [arr[index], arr[small]];
        }
      }
    }
    small++;
    [arr[end], arr[small]] = [arr[small], arr[end]];
    return small;
  }

  static getPivotIndex(arr: number[], begin: number, end: number): number {
    if (end - begin < 5) {
      return BFPRT.insertSort(arr, begin, end);
    }
    let offset = 0;
    let i = 0;
    for (i = begin; i < end - 5; i += 5) {
      offset = i + 5;
      const medianIndex = BFPRT.insertSort(arr, i, offset);
      [arr[medianIndex], arr[begin + Math.floor((i - begin) / 5)]] = [
        arr[begin + Math.floor((i - begin) / 5)],
        arr[medianIndex],
      ];
    }
    offset = i + 5;
    if (offset > end) {
      offset = end;
    }
    const medianIndex = BFPRT.insertSort(arr, i, offset);
    [arr[medianIndex], arr[begin + Math.floor((i - begin) / 5)]] = [
      arr[begin + Math.floor((i - begin) / 5)],
      arr[medianIndex],
    ];

    return BFPRT.bfprt(
      arr,
      begin,
      begin + Math.floor((end - begin) / 5),
      begin + Math.floor((end - begin) / 10),
    );
  }

  public static bfprt(arr: number[], begin: number, end: number, k: number): number {
    let pivotIndex = 0;
    let partitionIndex = 0;
    while (true) {
      pivotIndex = BFPRT.getPivotIndex(arr, begin, end);
      partitionIndex = BFPRT.partition(arr, begin, end, pivotIndex);
      if (k === partitionIndex) {
        return arr[k];
      }
      if (k < partitionIndex) {
        end = partitionIndex - 1;
      } else {
        begin = partitionIndex + 1;
      }
    }
  }
}
