function recursiveSearch(
  array: number[],
  element: number,
  index: number
): number {
  if (array.length === 0) {
    return -1;
  }

  const low = 0;
  const high = array.length - 1;
  const mid = Math.floor((low + high) / 2);

  if (array[mid] === element) {
    return index + mid;
  } else if (element < array[mid]) {
    return recursiveSearch(array.slice(0, mid), element, index);
  } else {
    return recursiveSearch(array.slice(mid + 1), element, index + mid + 1);
  }
}

console.log(recursiveSearch([1, 3, 5, 7, 9], 1, 0)); // Output: 0
console.log(recursiveSearch([1, 3, 5, 7, 9], -1, 0)); // Output: -1
