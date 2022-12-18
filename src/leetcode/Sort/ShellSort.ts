export const ShellSort = (originalArray: number[]) => {
  if (originalArray.length <= 1) return originalArray;
  const array = originalArray;
  let gap = Math.floor(array.length / 2);
  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let j = i;
      const current = array[i];
      while (j - gap >= 0 && current < array[j - gap]) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = current;
    }
    gap = Math.floor(gap / 2);
  }
  return array;
};
