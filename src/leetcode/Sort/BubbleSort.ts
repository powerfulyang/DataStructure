export const BubbleSort = (array: number[]) => {
  const tmp = [...array];

  let swapped = false;
  for (let i = 0; i < tmp.length; i++) {
    swapped = false;
    for (let j = 0; j < tmp.length - i; j++) {
      if (tmp[j] > tmp[j + 1]) {
        [tmp[j + 1], tmp[j]] = [tmp[j], tmp[j + 1]];
        swapped = true;
      }
    }
    if (swapped === false) {
      return tmp;
    }
  }

  return tmp;
};
