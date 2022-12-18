export const CountingSort = (originalArray: number[]) => {
  if (originalArray.length <= 1) return originalArray;
  // Init biggest and smallest elements in array in order to build number bucket array later.
  let detectedSmallestElement = originalArray[0];
  let detectedBiggestElement = originalArray[0];

  originalArray.forEach((element) => {
    // Visit element.

    // Detect biggest element.
    if (element > detectedBiggestElement) {
      detectedBiggestElement = element;
    }

    // Detect smallest element.
    if (element < detectedSmallestElement) {
      detectedSmallestElement = element;
    }
  });

  // Init buckets array.
  const buckets = new Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);
  // origin array is [1, 3, -1, -3, 5, 3, 6, 7], biggestElement is 7, smallestElement is -3
  // buckets is [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  originalArray.forEach((element) => {
    if (element >= detectedSmallestElement && element <= detectedBiggestElement) {
      buckets[element - detectedSmallestElement] += 1;
    }
  });
  // buckets is [1, 0, 1, 0, 1, 0, 2, 0, 1, 1, 1]

  let sortedIndex = 0;
  for (let j = 0; j < buckets.length; j++) {
    while (buckets[j] > 0) {
      // eslint-disable-next-line no-param-reassign
      originalArray[sortedIndex++] = j + detectedSmallestElement;
      buckets[j]--;
    }
  }

  return originalArray;
};
