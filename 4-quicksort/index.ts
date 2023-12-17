function quickSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const less = array.filter((element) => element < pivot);
  const greater = array.filter((element) => element > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([10, 2, 5, 3])); // output [2,3,5,10]
