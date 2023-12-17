function findElementInArray(array: number[], element: number): number {
  let low = 0,
    high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (element === array[mid]) {
      return mid;
    } else if (element < array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(findElementInArray([1, 3, 5, 7, 9], 1)); // Output: 0
console.log(findElementInArray([1, 3, 5, 7, 9], -1)); // Output: -1
