export const CountingSort = (originalArray, smallestElement?, biggestElement?) => {
  // Init biggest and smallest elements in array in order to build number bucket array later.
  let detectedSmallestElement = smallestElement || 0;
  let detectedBiggestElement = biggestElement || 0;

  if (smallestElement === undefined || biggestElement === undefined) {
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
  }

  // Init buckets array.
  // This array will hold frequency of each number from originalArray.
  const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);

  originalArray.forEach((element) => {
    buckets[element - detectedSmallestElement] += 1;
  });

  // Add previous frequencies to the current one for each number in bucket
  // to detect how many numbers less than current one should be standing to
  // the left of current one.
  for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
    buckets[bucketIndex] += buckets[bucketIndex - 1];
  }

  // Now let's shift frequencies to the right so that they show correct numbers.
  // I.e. if we won't shift righter than the value of buckets[5] will display how many
  // elements less than 5 should be placed to the left of 5 in sorted array
  // INCLUDING 5th. After shifting though this number will not include 5th anymore.
  buckets.pop();
  buckets.unshift(0);

  // Now let's assemble sorted array.
  const sortedArray = Array(originalArray.length).fill(null);
  for (let elementIndex = 0; elementIndex < originalArray.length; elementIndex += 1) {
    // Get the element that we want to put into correct sorted position.
    const element = originalArray[elementIndex];

    // Get correct position of this element in sorted array.
    const elementSortedPosition = buckets[element - detectedSmallestElement];

    // Put element into correct position in sorted array.
    sortedArray[elementSortedPosition] = element;

    // Increase position of current element in the bucket for future correct placements.
    buckets[element - detectedSmallestElement] += 1;
  }

  // Return sorted array.
  return sortedArray;
};
