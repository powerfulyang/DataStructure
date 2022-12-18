export const BubbleSort = (array: number[]) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        // eslint-disable-next-line no-param-reassign
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
};
