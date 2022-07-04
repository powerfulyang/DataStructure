// Divide and Conquer
export const QuickSort = (array: number[]) => {
  const tmp = [...array];
  // base
  if (array.length <= 1) {
    return array;
  }
  const leftArray = [];
  const rightArray = [];
  const pivot = tmp.shift();
  const centerArray = [pivot];
  while (tmp.length) {
    const current = tmp.shift();
    if (current === pivot) {
      centerArray.push(current);
    } else if (current > pivot) {
      rightArray.push(current);
    } else {
      leftArray.push(current);
    }
  }
  const left = QuickSort(leftArray);
  const right = QuickSort(rightArray);
  return left.concat(centerArray).concat(right);
};
