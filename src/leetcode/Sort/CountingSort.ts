export const CountingSort = (originalArray, smallestElement?, biggestElement?) => {
  // Init biggest and smallest elements in array in order to build number bucket array later.
  let detectedSmallestElement = smallestElement || originalArray[0];
  let detectedBiggestElement = biggestElement || originalArray[0];

  if (smallestElement === undefined || biggestElement === undefined) {
    originalArray.forEach((element) => {
      // Visit element.

      // Detect biggest element.
      if (element > detectedBiggestElement) {
        detectedBiggestElement = element;
      }

      // Detect smallest element.
      if (element < detectedSmallestElement || detectedSmallestElement === undefined) {
        detectedSmallestElement = element;
      }
    });
  }

  // Init buckets array.
  // This array will hold frequency of each number from originalArray.
  const buckets = new Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);
  // origin array is [5, 2, 4, 6, 1, 3], biggestElement is 6, smallestElement is 1
  // buckets is [0, 0, 0, 0, 0, 0]

  originalArray.forEach((element) => {
    buckets[element - detectedSmallestElement] += 1;
  });
  // buckets is [1, 1, 1, 1, 1, 1]

  // Add previous frequencies to the current one for each number in bucket
  // to detect how many numbers less than current one should be standing to
  // the left of current one.
  for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
    buckets[bucketIndex] += buckets[bucketIndex - 1];
  }
  // buckets is [1, 2, 3, 4, 5, 6]

  // Now let's shift frequencies to the right so that they show correct numbers.
  // I.e. if we won't shift righter than the value of buckets[5] will display how many
  // elements less than 5 should be placed to the left of 5 in sorted array
  // INCLUDING 5th. After shifting though this number will not include 5th anymore.
  buckets.pop();
  // buckets is [1, 2, 3, 4, 5]
  buckets.unshift(0);
  // buckets is [0, 1, 2, 3, 4, 5]

  // Now let's assemble sorted array.
  const sortedArray = new Array(originalArray.length);
  for (let elementIndex = 0; elementIndex < originalArray.length; elementIndex += 1) {
    // Get the element that we want to put into correct sorted position.
    const element = originalArray[elementIndex];

    // Get correct position of this element in sorted array.
    const elementSortedPosition = buckets[element - detectedSmallestElement];
    // element is 5, buckets[5 - 1] is 4, elementSortedPosition is 4
    // element is 2, buckets[2 - 1] is 3, elementSortedPosition is 3
    // element is 4, buckets[4 - 1] is 2, elementSortedPosition is 2
    // element is 6, buckets[6 - 1] is 1, elementSortedPosition is 1
    // element is 1, buckets[1 - 1] is 0, elementSortedPosition is 0
    // element is 3, buckets[3 - 1] is 5, elementSortedPosition is 5

    // Put element into correct position in sorted array.
    sortedArray[elementSortedPosition] = element;

    // Increase position of current element in the bucket for future correct placements.
    buckets[element - detectedSmallestElement] += 1;
    // if originalArray has more than one element with the same value, we need to increase the position
  }

  // Return sorted array.
  return sortedArray;
};
